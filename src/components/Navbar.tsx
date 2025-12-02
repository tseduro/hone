import { Link } from "react-router-dom"

const Navbar = () => {
  return (
      <nav className='bg-slate-800 shadow-lg flex items-center justify-around py-3 px-32 fixed top-0 left-0 w-full'>
          <Link
              to="/">
              <span className='font-semibold text-lg flex items-center gap-3 text-blue-400'>
                  <span className="font-semibold text-2xl">Hone</span>
              </span>
          </Link>

          <div className='flex items-center gap-5 text-black'>
              <Link
                  to="/"
                  className='py-1 px-3 text-lg font-light text-white 
                  hover:text-sky-300 rounded-2xl 
                  hover:bg-slate-700 transition duration-300'
              >
                  Home
              </Link>

              <Link
                  to="/Dashboard"
                  className='py-1 px-3 text-lg font-light text-white 
                  hover:text-sky-300 rounded-2xl 
                  hover:bg-slate-700 transition duration-300'
              >
                  Dashboard
              </Link>
          </div>
      </nav>
  )
}

export default Navbar