
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center py-5 px-10  bg-(--c1)'>
        <Link to='/' className='font-medium text-2xl'>Media Search</Link>
        <div className='flex gap-5 text-xl items-center'>
            <Link className='text-base font-medium active:scale-90 bg-(--c4) text-black rounded px-4 py-2 ' to='/'>Search</Link>
            <Link className='text-base font-medium active:scale-90 bg-(--c4) text-black rounded px-4 py-2 ' to='/collection'>Collection</Link>
        </div>
      </div>
  )
}

export default Navbar
