"use client";
import Image from "next/image";
import heroVariantC from "../../../../public/hero-variant-c.webp";
import { Button } from "@/components/ui/button"
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import GoogleIcon from "../../../../public/icons8-google.svg"
import star from "../../../../public/favorite (1).png"
import halfstar from "../../../../public/rating (1).png"


export default function Section1() {
    return (
        <div className="w-full h-[calc(100vh-80px)] bg-[#004733] flex flex-col justify-center items-center mt-20">

            <div className="w-full h-48 flex flex-col justify-center items-center z-10  relative top-80">
                <p className="text-green-400 text-9xl font-bold mb-6 z-10 ">Mortgages </p>
                <p className="text-green-400 text-9xl font-bold mb-6 z-10 ">made simple</p>
            </div>
            <div className=" bg-[#004733] w-full  relative top-56">
                <Image src={heroVariantC} alt="image" className="relative     left-[30rem]"  />
            </div>

            <div className="w-full z-20   flex justify-around  absolute  bottom-6  ">

                <div className="flex-col items-center justify-center">
                    <div className="bg-green-400 rounded-3xl p-4 text-lg w-52 relative right-1 hover:bg-transparent hover:text-white ">
                        <Button className=" text-lg   shadow-none ">Start my approval</Button>
                    </div>
                    <span className="text-white flex-row justify-center ">
                        <TimerOutlinedIcon fontSize="small" className="relative bottom-[1px]" /> 3 min| No credit impact
                    </span>
                </div>


                <div className=" flex  flex-col justify-center items-center">

                    <div className="flex  items-center ">
                        <Image src={GoogleIcon} alt="google" className=" ml-1 " width={30} />
                        <Image src={star} alt="google" className="w-auto h-8" />
                        <Image src={star} alt="google" className="w-auto h-8" />
                        <Image src={star} alt="google" className="w-auto h-8" />
                        <Image src={star} alt="google" className="w-auto h-8" />
                        <Image src={halfstar} alt="google" className="w-auto h-7"  />

                    </div>
                    <div className="text-white">
                        <span>4.6 Stars | 3177 Google reviews</span>
                    </div>
                </div>

            </div>


        </div>
    );
}
