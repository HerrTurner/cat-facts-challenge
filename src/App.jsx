
import { useInfiniteQuery, useQuery} from '@tanstack/react-query';
import './App.css';
import Card from './components/Card/Card';
import { getCatFacts } from './utils/getFacts';
import getUserInfo from './utils/getUserInfo';
import SkeletonCard from './components/SkeletonCard/SkeletonCard';


function App() {
  const {
    error,
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["facts", "infinite"],
    queryFn: ({ pageParam = 1 }) => getCatFacts(pageParam),
    getNextPageParam: ( lastPage) => {
      const url = lastPage.next_page_url;
      if (!url) return undefined;
      const urlParams = new URLSearchParams(new URL(url).search)
      return Number(urlParams.get('page'));
    }
  })


  const userQuery = useQuery({
    queryKey: ['users'],
    enabled: data != null,
    queryFn: () => getUserInfo(data.pages[0].per_page),

  })


  if (error) { //Mostrar el mensaje de error
    return <span>Error: {error.message}</span>
  }


  //Mostrar datos cuando se hayan obtenido
  return (
    <div className='bg-slate-50 p-10 flex flex-col items-center h-full'>
      <div>
        <img src="/logo.svg" className="w-44 h-44" />
      </div>
      <p className='text-3xl mb-4 text-'>The Cat Facts</p>
      <ul>
        {userQuery.data ? (data.pages.flatMap((page) => 
          page.data.map( (fact, idx)  => { 
            const user =  userQuery.data
            const name = user.results[idx].name
            const picture = user.results[idx].picture.thumbnail;
            const username = `${name.first} ${name.last}`

          
            return (     
              <li key={fact.fact}>
                <Card name={username} src={picture} data={fact.fact} />
              </li> 
            )
          }))) : <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
        }
      </ul>
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className='mt-5 bg-[#79877c] px-6 py-2 rounded-full text-slate-50'
        >
          {isFetchingNextPage
            ? 'Loading more facts 🐱'
            : hasNextPage
            ? `Load More`
            : 'You have reached the end 😿'}
        </button>
      </div>
    </div>
  )
}


export default App

