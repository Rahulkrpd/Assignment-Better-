"use client"
import React from 'react'


import PhoneIcon from '@mui/icons-material/Phone';
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useRouter } from "next/navigation";


const Navbar = ({ background, color }: { background: string; color: string }) => {
    const router = useRouter();
    return (
        <div className=" w-full fixed top-0 left-0  h-20 flex justify-between items-center p-9 text-xl z-50" style={{ backgroundColor: background, color: color }}>
            <div className='p-6 w-1/2 flex flex-row justify-between'>
                <Button className='bg-inherit rounded-full  text-xl shadow-none font-medium' onClick={() => router.push("/")}>Better </Button>
                <HoverCard>
                    <HoverCardTrigger>
                        <Button className='bg-inherit rounded-full hover:bg-gray-100 hover:rounded-full hover:text-black text-sm shadow-none ' onClick={() => router.push("/About")}>About Us </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className='bg-white text-black rounded-lg border-none'>
                        The React Framework – created and maintained by @vercel.
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger>
                        <Button className='bg-inherit rounded-full hover:bg-gray-100 hover:rounded-full hover:text-black text-sm shadow-none ' onClick={()=>router.push("/mortgage-calculator")}>Mortgage Calculator</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className='bg-white text-black rounded-lg border-none'>
                        The React Framework – created and maintained by @vercel.
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger>
                        <Button className='bg-inherit rounded-full hover:bg-gray-100 hover:rounded-full hover:text-black text-sm shadow-none '>HELOC</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className='bg-white text-black rounded-lg border-none'>
                        The React Framework – created and maintained by @vercel.
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger>
                        <Button className='bg-inherit rounded-full hover:bg-gray-100 hover:rounded-full hover:text-black text-sm shadow-none '>Rate</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className='bg-white text-black rounded-lg border-none'>
                        The React Framework – created and maintained by @vercel.
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger>
                        <Button className='bg-inherit rounded-full hover:bg-gray-100 hover:rounded-full hover:text-black text-sm shadow-none '>Better+</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className='bg-white text-black rounded-lg border-none'>
                        The React Framework – created and maintained by @vercel.
                    </HoverCardContent>
                </HoverCard>
            </div>


            <div className='w-1/3 h-full  items-center   flex  justify-evenly'>
                <div className="rounded-full cursor border-gray border-2 w-12 h-12 flex justify-center  hover:bg-gray-100 hover:text-black hover:border-none items-center">
                    <PhoneIcon className='' />
                </div>

                <Button className='bg-inherit rounded-full hover:bg-gray-100 hover:rounded-full hover:text-black text-xl shadow-none '>Sign in </Button>
                <Button className=' bg-green-400 text-black   p-6 rounded-full  hover:rounded-full hover:text-white hover:bg-[#004733]  text-lg  shadow-none'  >Continue </Button>

            </div>

        </div>
    )
}

export default Navbar
