
const SkeletonCard = () => {
  return (
    <div className='bg-white shadow-md rounded p-4 mt-2 flex items-start w-full sm:max-w-3xl animate-pulse'>
        <div className="rounded-3xl w-10 h-10 animate-pulse bg-slate-300"></div>
        <div className='flex flex-col  items-start ml-5'>
            <div className="h-3 w-48 rounded-full bg-gray-300 mb-2"></div>
            <div className="h-2 w-72 rounded-full bg-gray-300 mb-1"></div>
            <div className="h-2 w-72 rounded-full bg-gray-300 mb-1"></div>
        </div>
    </div>
  )
}

export default SkeletonCard