import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
  return <section className='w-full pt-36 md:pt-48 pb-10'>
    <div className='space-y-6 text-center'>
        <div className='space-y-6 mx-auto'>
            <h1 className='gradient-title'>Your AI Career Coach for <br /> Professional Success</h1>
            <p>Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.</p>
        </div>

        <div>
            <Link href={"/dashboard"}>
                <Button className={"px-8"} size={"lg"}>Get Started</Button>
            </Link>

            <Link href={"https://www.github.com/Manan0p/Sensai"}>
                <Button className={"px-8"} size={"lg"} variant={"outline"}>Check Repo</Button>
            </Link>
        </div>

        <div>
            <div>
                <Image src={"/banner.jpeg"} width={1280} height={720} alt='Sensai Banner' className='rounded-lg shadow-2xl border mx-auto' priority/>
            </div>
        </div>
    </div>
  </section>
}

export default HeroSection