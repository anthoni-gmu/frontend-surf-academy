import { check_authenticated, load_user, refresh } from '../../redux/actions/auth';

import Head from "next/head";

import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Dialog,Disclosure, Menu, Transition } from '@headlessui/react'


import Sidebar from "../dashboard/sidebar";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import Alert from "../notification/alert";

// import DropAuth from "../components/auth/dropAuth";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  


const LayaoutDashboard = ({ title, content, children }) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.Auth.isAuthenticated);

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const logoutHandler = () => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
          dispatch(logout());
      };
    
    const userLinks = () => {
        return (
          <Menu as="div" className="ml-3 relative">
          

            <div>
              <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="./main"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                     Dashboart
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={logoutHandler}
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        )
      }


    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_authenticated());
        dispatch(load_user());
        dispatch(refresh());
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={content} />
            </Head>

            <div>
                <div>
                    <Transition.Root show={sidebarOpen} as={Fragment}>
                        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                            </Transition.Child>
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                        <Sidebar />
                                    </div>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 w-14" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </Dialog>
                    </Transition.Root>

                    {/* Static sidebar for desktop */}
                    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex flex-col flex-grow border-r border-gray-200 bg-white overflow-y-auto">

                            <div className=" flex-grow flex flex-col">
                                <nav className="flex-1 px-2 pb-4 space-y-1">
                                    <Sidebar />
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="md:pl-64 flex flex-col flex-1">
                        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
                            <button
                                type="button"
                                className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            <div className="flex-1 px-4 flex justify-between">
                                <div className="flex-1 flex">

                                </div>
                                <div className="ml-4 flex items-center w-1/5 md:ml-6">
                                    {/* Profile dropdown */}
                                   { userLinks(logoutHandler)}
                                </div>
                            </div>
                        </div>

                        <main className="flex-1">
                            {children}

                        </main>
                    </div>
                </div>
                <Alert />

            </div>
        </>
    )
}

LayaoutDashboard.defaultProps = {
    title: 'Surf',
    content: 'Surf'
}

export default LayaoutDashboard