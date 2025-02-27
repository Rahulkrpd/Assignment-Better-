"use client"
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import { useRouter } from "next/navigation";


const Page = () => {
  const handleCall = () => {
    window.location.href = "tel:415523 8837";
  };

  const router = useRouter();

  return (

    <div className='min-h-screen bg-white  '>
      {/* Navbar of this page this */}
      <div className='w-full  flex justify-center mt-4 '>

        <nav className='w-4/5  h-20 flex  justify-between p-2 lg:w-4/5   '>
          <div className=''>
            <div className='text-[#1e5f4dfc] font-medium text-xl font-[Roboto]' onClick={() => { router.push("/Home") }}>
              <button>Better</button> <br /><button className='text-gray-500'>Mortgage</button>
            </div>
          </div>

          <div className='flex justify-center items-center ' onClick={handleCall}>
            <button className='text-green-700 rounded-full bg-green-200 mr-1 '><PhoneIcon fontSize={'large'} /></button>
            <button className='hidden lg:block'>Need help ? Call (415)523 8837</button>
          </div>
        </nav>

      </div>




      {/* line  */}
      <div className='w-full flex justify-center   '>
        <div className='border-2 border-gray-300 w-4/5  flex justify-center'>
        </div>

      </div>
      <div className='w-full justify-center flex'>
        <Avatar className='relative bottom-4'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>






      <div className="h-1/5 flex justify-center items-center text-center px-10">
        <h2 className="text-5xl  leading-tight max-w-5xl text-[#292b29]  font-medium">
          Hi, I&apos;m Betsy! <br />
          What can I help you with?
        </h2>
      </div>



      <div className='w-full flex flex-col justify-center items-center mt-5'>

        <div className='border-[1px] border-solid border-gray-400  w-3/5 flex justify-start items-center hover:border-green-800  rounded-xl hover:border-[3px] hover:ease-in h-16 mb-6 lg:w-2/5'>
          <div className='flex  relative left-10 w-2/4 text-2xl justify-around items-center hover:text-green-800 font-medium  lg:justify-center lg:gap-4 '>
            <HomeTwoToneIcon className='text-green-800' fontSize='large' />
            <h2>Buying a home</h2>
          </div>
        </div>
        <div className='border-[1px] border-solid border-gray-400  w-3/5 flex justify-start items-center hover:border-green-800  rounded-xl hover:border-[3px] hover:ease-in h-16 mb-6 lg:w-2/5'>
          <div className='flex  relative left-10 w-2/4 min-w-fit text-2xl justify-around items-center hover:text-green-800 font-medium  lg:justify-center lg:gap-4 '>
            <HomeTwoToneIcon className='text-green-800 mr-2 lg:mr-0' fontSize='large' />
            <h2>Refinance my mortgage</h2>
          </div>
        </div>
        <div className='border-[1px] border-solid border-gray-400  w-3/5 flex justify-start items-center hover:border-green-800  rounded-xl hover:border-[3px] hover:ease-in h-16 mb-6 lg:w-2/5'>
          <div className='flex  relative left-10 w-2/4 min-w-fit text-2xl justify-around items-center hover:text-green-800 font-medium  lg:justify-center lg:gap-4 '>
            <HomeTwoToneIcon className='text-green-800 mr-2 lg:mr-0' fontSize='large' />
            <h2>Get cash  from my home</h2>
          </div>
        </div>


      </div>


      <div className='w-full  flex justify-center mt-10'>
        <div className='  lg:w-1/2 flex  justify-between'>
          <div className=' flex flex-col items-center'>
            <p className='text-3xl font-bold'>$100B</p>
            <p className='text-gray-400'>home loans funded entirely online</p>
          </div>

          <div className=' flex flex-col items-center'>
            <p className='text-3xl font-bold'>400K</p>
            <p className='text-gray-400'>Customers who chose a Better Mortgage</p>
          </div>
        </div>
      </div>














    </div>
  )
}

export default Page
