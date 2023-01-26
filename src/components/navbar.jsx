import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className=" mx-auto">
                <div className="flex justify-end pt-3 px-20">
                    <ul className=" flex flex-row text-center font-semibold text-sm justify-between ">
                        <li className="  ml-5">SONGS</li>
                        <li className="  ml-5">PHOTOS</li>
                        <li className="  ml-4">BIOGRAPHY</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navbar
