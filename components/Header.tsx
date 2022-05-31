import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {BeakerIcon, 
    ChevronDoubleDownIcon, 
    HomeIcon, 
    SearchIcon,
    MenuIcon,
} 
from '@heroicons/react/solid'
import {
    BellIcon,
    ChatIcon,
    GlobeIcon,
    PlusIcon,
    SparklesIcon,
    SpeakerphoneIcon,
    VideoCameraIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
function Header() {
    const { data: session } = useSession();
  return (
    <div className='sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
        <Link href='/'>
          <Image 
          src='https://links.papareact.com/fqy'
          layout='fill'
          objectFit='contain'
          />
          </Link>
      </div>
      <div className='flex items-center mx-7 xl:min-w-[300px]'>
          <HomeIcon className='h-5 w-5'/>
          <p className='ml-2 hidden lg:inline flex-1'>Home</p>
          <ChevronDoubleDownIcon className='h-5 w-5'/>
      </div>
      {/* search box */}
      <form className='flex flex-1 items-center space-x-2 border 
      border-gray-200 rounded-sm px-3 py-1'>
          <SearchIcon className='h-6 w-6 text-gray-400'/>
          <input className='flex-1 bg-transparent outline-none' 
          type='text' placeholder='Search Reddit'/>
          <button type='submit' hidden/>
      </form>
      <div className='text-gray-500 items-center mx-5 space-x-2
      hidden lg:inline-flex'>
          <SparklesIcon className='icon'/>
          <GlobeIcon className='icon'/>
          <VideoCameraIcon className='icon'/>
          <hr className='h-10 border border-gray-100'/>
          <ChatIcon className='icon'/>
          <BellIcon className='icon'/>
          <PlusIcon className='icon'/>
          <SpeakerphoneIcon className='icon'/>
      </div>
      <div className='ml-5 flex items-center lg:hidden'>
          <MenuIcon className='icon'/>
      </div>
      {/* sign in / sign out */}
      {session ? (
                <div className='hidden lg:flex items-center space-x-2 border border-gray-100
                p-2 cursor-pointer'>
                  <div onClick={() => signOut()} 
                  className='relative h-5 w-5 flex-shrink-0'>
                <Image
                objectFit='contain'
                src='https://links.papareact.com/23l'
                layout='fill'
                alt='image'
                />
                </div>
                <div className='flex-1 text-xs'>
                    <p className='truncate'>{session.user?.name}</p>
                <p className='text-gray-400 '>1 Karma</p>
                </div>
                <ChevronDoubleDownIcon className='h-5 flex-shrink-0 text-gray-400'/>
                </div>
      ): (
        <div className='hidden lg:flex items-center space-x-2 border border-gray-100
        p-2 cursor-pointer'>
          <div onClick={() => signIn()} 
          className='relative h-5 w-5 flex-shrink-0'>
        <Image
        objectFit='contain'
        src='https://links.papareact.com/23l'
        layout='fill'
        alt='image'
        />
        </div>
        <p className='text-gray-400 '>Sign In</p>
        </div>
      )}
    </div>
  )
}

export default Header
