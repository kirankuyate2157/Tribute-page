import React from 'react'
import Album from './Album';
import Name from './Name';

const Songs = () => {


    const numbers = [1, 2, 3, 4, 5];

    const updatedNums = numbers.map((number) => {
        return <li>{number}</li>;
    });
    return (
        <>
            <div className="  px-28  w-full bg-gray-900 flex " >
                <div className="  w-3/4 px-5" >
                    <div className="py-8 font-bold text-red-700 text-4xl">Songs
                    </div><hr />
                    <div className=" ">
                        <ul className="divide-y divide-red-500">
                            <Name /> <Name /> <Name /> <Name /> <Name /> <Name /><Name /> <Name /><Name /> <Name /><Name /> <Name /><Name /> <Name /> <Name />
                        </ul>

                    </div>
                </div>
                <div className="px-5  w-1/3 ">
                    <div className="py-8 px-8 font-bold text-red-700 text-4xl">Albums</div>
                    <Album />
                    <Album /> <Album /> <Album /> <Album />
                </div>
            </div>
        </>
    )
}

export default Songs;