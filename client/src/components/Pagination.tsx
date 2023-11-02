import { ArrowLeftIcon } from '@heroicons/react/20/solid'


function Paginator() {
    return (
        <nav>
            <ul className="flex">
                <li>
                    <a
                        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                        href="#"
                        aria-label="Previous"
                    >
                        <span className="material-icons text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </span>
                    </a>
                </li>
                <li>
                    <a
                        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
                        href="#"
                    >
                        1
                    </a>
                </li>
                <li>
                    <a
                        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                        href="#"
                    >
                        2
                    </a>
                </li>
                <li>
                    <a
                        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                        href="#"
                    >
                        3
                    </a>
                </li>
                <li>
                    <a
                        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                        href="#"
                        aria-label="Next"
                    >
                        <span className="material-icons text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>

                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Paginator;