import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className=" sticky mx-auto ">
                <div className="flex justify-end pt-3 px-20 bg-gradient-to-l  pb-2">
                    <ul className=" flex flex-row text-center font-semibold text-sm justify-between ">
                        <li className="  ml-5 hover:text-red-400">SONGS</li>
                        <li className="  ml-5 hover:text-red-400">PHOTOS</li>
                        <li className="  ml-5 hover:text-red-400">BIOGRAPHY</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar;
