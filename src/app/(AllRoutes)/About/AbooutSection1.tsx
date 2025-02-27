import React from 'react'

const AboutSection1 = () => {
    return (
        <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center mt-20">
            <div className='  w-4/5 h-3/5'>

                <div className=' w-full  h-3/5  flex justify-center items-center'>
                    <p className="text-4xl text-green-800 font-extrabold p-3">Our mission</p>

                </div>
                <div className="h-1/5 flex justify-center items-center text-center px-10">
                    <h2 className="text-5xl  leading-tight max-w-5xl text-[#292b29]  font-medium">
                        We’re making homeownership simpler, faster —
                        and most importantly, more accessible for all
                        Americans.
                    </h2>
                </div>


            </div>

        </div>
    )
}

export default AboutSection1
