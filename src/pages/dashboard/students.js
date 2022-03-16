import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout/LayaoutDashboard'
import { get_students } from '../../redux/actions/student';
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid"

import TableStudents from '../../components/dashboard/tableStudents';
import AddStudent from '../../components/dashboard/addStudent';
import { Disclosure } from '@headlessui/react';

const Student = () => {
    const dispatch = useDispatch();
    useEffect(() => {

        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(get_students());
    }, [dispatch]);
    const students = useSelector((state) => state.Student.students)


    return (
        <Layout>
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                <div className="w-full lg:w-5/6">
                    <AddStudent dispatch={dispatch} />
                </div>

                {/* <div className="lg:w-1/6">
                    <Disclosure as="div" className=" m-4">
                        {({ open }) => (
                            <>
                                <h3 className="-mx-2 -my-3 flow-root">
                                    <Disclosure.Button className="px-2 py-3 rounded-lg bg-slate-200 w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                        <span className="font-sofiapro-regular text-gray-900 font-semibold">Filtros</span>
                                        <span className="ml-6 flex items-center">
                                            {open ? (
                                                <MinusSmIcon className="h-5 w-5 text-black" aria-hidden="true" />
                                            ) : (
                                                <PlusSmIcon className="h-5 w-5 text-black" aria-hidden="true" />
                                            )}
                                        </span>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="pt-2">






                                        <div className="lg:col-span-3">
                                            <div className=' flex items-center h-5 my-5'>
                                                <input
                                                    type='radio'
                                                    className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                />
                                                <label className={`ml-3 min-w-0 flex-1  font-sofiapro-light`}>
                                                    Todos
                                                </label>
                                            </div>
                                            <div className=' flex items-center h-5 my-5'>
                                                <input
                                                    type='radio'
                                                    className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                />
                                                <label className={`ml-3 min-w-0 flex-1  font-sofiapro-light`}>
                                                    Todos
                                                </label>
                                            </div>


                                        </div>
                                    </Disclosure.Panel>
                                </h3>
                            </>
                        )}
                    </Disclosure>
                </div> */}

            </div>
            <div className="overflow-x-auto ">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                    <div className="w-full lg:w-5/6">
                        <TableStudents students={students} dispatch={dispatch} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Student


