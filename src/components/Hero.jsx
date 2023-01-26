import React from 'react'

import Navbar from './Navbar'
const Hero = () => {
    return (

        <>

            <div className="">
                <div className="w-full absolute full ">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznI0xHbtQuk7zfpSw_Bk40_FMEk8m8KnoEA&usqp=CAU"
                        alt="Hero img"
                        className="w-full h-full  "
                    />
                </div>
                <div className="relative ">
                    <Navbar />
                    <div className="   w-full  flex ">

                        <div className="flex flex-row  lg:mt-56 justify-end mx-5  bg-blend-darken ">

                            <div className=" w-1/2 lg:w-1/3 ml-12  md:mt-9 ">
                                <h1 className="font-bold text-6xl text-red-800 ">Arjit Singh.</h1>
                                <h4 className="font-medium mt-2 text-gray-400">1995 - present</h4>
                                <p className="my-4 pr-4  text-white">Arijit Singh is an Indian singer and music composer. The recipient of several accolades including a National Film Award and six Filmfare Awards, he has recorded songs in several Indian languages and has established himself as one of the leading playback singers of Bollywood. </p>
                            </div>
                        </div>
                    </div>
                </div></div>
        </>
    )
}



export default Hero;
