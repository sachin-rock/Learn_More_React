import React from 'react'

const Navbar = () => {
  return (
    <div >
        <nav className="bg-gray-900 h-16 w-screen flex justify-between items-center px-10">
            <div className="text-white font-poppins text-2xl tracking-widest">Navbar</div>
            <div className="flex justify-evenly items-center w-1/4">
                <div className="text-white font-poppins text-xl tracking-widest">Home</div>
                <div className="text-white font-poppins text-xl tracking-widest">About</div>
                <div className="text-white font-poppins text-xl tracking-widest">Contact</div>

        

                    </div>
        </nav>
    </div>
  )
}

export default Navbar