import React from 'react'

const Details = (props) => {

    return (
        <><div className="w-4/5  mt-8 text-gray-300 p-10 flex flex-row">

            <div className=" w-8/12  md:px-8  8pr-">
                <h1 className="font-bold text-3xl md:text-6xl drop-shadow-2xl  mb-10 text-red-800 ">{props.title}</h1>

                {props.para.map(p => (
                    <p className='flex justify-start mt-6  pr-12 text-xl'>
                        {p}
                    </p>
                ))
                }


            </div>
            <aside


                style={{ height: "fit-content" }}
                className="hidden md:flex md:w-4/12 sticky  mx-5 top-2 bg-red-700  shadow-xl flex flex-col gap-4"
            >


                <img src={props.image}
                    alt="Argit singh"
                    className='ml-6 mb-6 ' />

            </aside >


        </div></>
    )
}

export default Details;
