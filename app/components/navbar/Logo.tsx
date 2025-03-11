"use client"
// Next Libraries
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {

    const router = useRouter();

    return (
        <div className='flex items-center space-x-2 flex-col'>
        <Image
            onClick={() => router.push("/")}
            alt='Logo'
            className='hidden md:block cursor-pointer rounded-full'
            height={100}
            width={100}
            src="/images/logo.png"
        />
        <p>
            Urban Nest
        </p>
        </div>
    )
}

export default Logo