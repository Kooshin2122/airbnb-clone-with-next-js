import Image from 'next/image'
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid'

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 items-center bg-white      shadow-md py-2 px-5 md:px-10'>
            {/* Left */}
            <div className='relative flex items-center h-20 w-24 cursor-pointer'>
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            {/* middle */}
            <div className='flex items-center rounded-full md:border-2 h-10 p-5 md:shadow-sm'>
                <input type="text"
                    name="" id=""
                    placeholder='start search'
                    className='flex-grow bg-transparent outline-none text-xl text-gray-600' />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 p-2 rounded-full text-white cursor-pointer md:ml-2' />
            </div>
            {/* right */}
            <div className='flex space-x-4 items-center justify-end text-gray-500'>
                <p className='hidden md:inline cursor-pointer text-xl font-medium'>
                    Become a host
                </p>
                <GlobeAltIcon className='h-6 text-3xl w-6 cursor-pointer' />
                <div className='flex items-center space-x-2 border-2 rounded-full p-2'>
                    <MenuIcon className='h-6 cursor-pointer' />
                    <UserCircleIcon className='h-6 cursor-pointer' />
                </div>
            </div>
        </header>
    )
}

export default Header

