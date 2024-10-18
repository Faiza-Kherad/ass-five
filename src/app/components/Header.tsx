import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center h-14 justify-center'>
      <ul className='flex gap-x-10'>
        <li className='cursor-pointer px-4 py-2 hover:bg-purple-400 hover:text-white rounded-full '><Link href="/">Home</Link></li>
        <li className='cursor-pointer px-4 py-2 hover:bg-purple-400 hover:text-white rounded-full '><Link href="/about">About</Link></li>
        <li className='cursor-pointer px-4 py-2 hover:bg-purple-400 hover:text-white rounded-full '><Link href="/blogs">Blogs</Link></li>
      </ul>
    </div>
  )
}

export default Header