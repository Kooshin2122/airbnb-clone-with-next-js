import Image from 'next/image'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid'
import { useRouter } from 'next/router';


function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState(1)
    const router = useRouter()

    const haldleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests: noOfGuests
            }
        })
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const resetInput = () => {
        setSearchInput('')
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 items-center bg-white shadow-md py-2 px-5 md:px-10'>
            {/* Left */}
            <div
                onClick={() => router.push('/')}
                className='relative flex items-center h-20 w-24 cursor-pointer'>
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            {/* middle */}
            <div className='flex items-center rounded-full md:border-2 h-10 p-5 md:shadow-sm'>
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    name="" id=""
                    placeholder={placeholder || 'Start your search'}
                    className='flex-grow bg-transparent outline-none text-xl text-gray-600 placeholder:text-xs md:placeholder:text-lg placeholder:text-left placeholder:text-gray-500' />
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
            {
                searchInput && (
                    <div className='flex flex-col col-span-3 md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto'>
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={['#FD5B61']}
                            onChange={haldleSelect}
                            className='w-10 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full'
                        />
                        <div className='flex items-center border-b mb-4'>
                            <h2 className='text-2xl font-semibold flex-grow'>
                                Number of guests
                            </h2>
                            <UsersIcon className='h-5' />
                            <input
                                type="number"
                                value={noOfGuests}
                                onChange={(e) => setNoOfGuests(e.target.value)}
                                min={1}
                                className='w-12 pl-2 text-md font-bold text-red-400 outline-none'
                            />
                        </div>
                        <div className='flex'>
                            <button
                                onClick={resetInput}
                                className='flex-grow text-gray-400 active:scale-90 transition duration-150'>
                                Cancel
                            </button>
                            <button
                                onClick={search}
                                className='flex-grow text-red-400'>
                                Search
                            </button>
                        </div>
                    </div>

                )
            }
        </header>
    )
}

export default Header

