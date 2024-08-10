import PropTypes from 'prop-types';


const Card = (props) => {

  const { name, src, data } = props

  return (
    <div className='bg-white shadow-md rounded p-4 mt-2 flex items-start w-full sm:max-w-3xl'>
        <img src={src} className="rounded-3xl w-10 h-10"/>
        <div className='flex flex-col  items-start ml-5'>
            <p className="text-sm text-gray-950"><strong>{name}</strong></p>
            <p className="mt-1 text-gray-950">{data}</p>
        </div>
    </div>
  )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
}

export default Card