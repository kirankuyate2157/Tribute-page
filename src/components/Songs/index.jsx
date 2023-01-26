import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import Album from './Album';
import Name from './Name';

const Songs = () => {



    return (
        <>
            <div className=" md:px-28  w-full bg-gray-900 flex " >
                <div className="  w-3/4 " >
                    <div className="py-8 md:px-8 px-5 font-bold text-red-700 text-2xl md:text-4xl">SONGS
                    </div><hr />
                    <div className=" ">
                        <ul className="divide-y divide-red-500 flex flex-col flex-wrap" >
                            <Scrollbars style={{ height: 650 }}>


                                <Name /> <Name /> <Name /> <Name /> <Name /> <Name /><Name /> <Name /><Name /> <Name /><Name /> <Name /><Name /> <Name /> <Name />
                            </Scrollbars>
                        </ul>

                    </div>
                </div>
                <div className=" w-1/3 ">
                    <div className="py-8 md:px-8 px-5 font-bold text-red-700 text-2xl md:text-4xl">ALBUMS</div>
                    <Scrollbars style={{ height: 650 }}>
                        <Album />  <Album />  <Album />  <Album />  <Album />  <Album />  <Album />  <Album />  <Album />  <Album />  <Album />  <Album />
                    </Scrollbars>
                </div>
            </div>

        </>
    )
}

export default Songs;