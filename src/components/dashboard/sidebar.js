import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    ShoppingBagIcon,
    ArrowCircleLeftIcon,
    LogoutIcon,
    CogIcon,
    CurrencyDollarIcon,
    ClipboardIcon,
    HeartIcon,
    SparklesIcon,
    FireIcon
} from '@heroicons/react/solid'
import { useDispatch } from "react-redux";

import { logout } from '../../redux/actions/auth'

const Sidebar = () => {
    const router = useRouter()
    // console.log(router.pathname)
    const noSelect = ' flex items-center text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-200 p-1'
    const noSelectIcon = 'h-6 w-6 mr-4 text-gray-700 hover:text-indigo-600 transition duration-200 '

    const select = 'flex items-center text-sm font-semibold bg-indigo-400  rounded-md text-gray-100  p-1'
    const selectIcon = 'h-6 w-6 mr-4 text-white'
    const dispatch = useDispatch();



    const logoutHandler = () => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(logout());
    };

    return (
        <div className="py-12 px-10 ">
            <div className="flex space-2 items-center border-b-2 pb-4">
                <div>

                    <ShoppingBagIcon className="h-14 w-14 text-indigo-600" />
                </div>
                <div className="ml-3">
                    <h1 className="text-3xl font-bold text-indigo-600">TWS</h1>
                    <p className="text-center text-sm text-indigo-600 mt-1 font-serif">CLOTHING</p>
                </div>
            </div>
            <Link href="/" >
                <a className="flex items-center space-x-4 mt-6 p-2 bg-indigo-600 rounded-md">
                    <div>
                        <ArrowCircleLeftIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                        <p className="text-lg text-white font-semibold">Regresar</p>
                    </div>
                </a>
            </Link>
            <div className="mt-8">
                <ul className="space-y-4">
                    <li>
                        <Link href="/dashboard/main">
                            <a className={router.pathname === '/dashboard/main' ? select : noSelect}>
                                <FireIcon className={router.pathname === '/dashboard/main' ? selectIcon : noSelectIcon} />
                                Mis Compras
                            </a>

                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/students">
                            <a className={router.pathname === '/dashboard/students' ? select : noSelect}>
                                <FireIcon className={router.pathname === '/dashboard/students' ? selectIcon : noSelectIcon} />
                                Estudiantes
                            </a>

                        </Link>
                    </li>

                </ul>
            </div>
            <button onClick={logoutHandler} className="flex mt-20 space-x-4 items-center  ">
                <div className="flex space-x-3 font-semibold text-gray-900 transition duration-200 hover:text-red-600">
                    <LogoutIcon className="h-6 w-6 hover:text-red-600 text-gray-700 transition duration-200" />
                    <span className="hover:text-red-600">Salir</span>
                </div>
            </button>
        </div>
    )
}


export default Sidebar