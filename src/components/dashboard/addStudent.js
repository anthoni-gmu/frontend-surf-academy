import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { create_student } from '../../redux/actions/student';
import { setAlert } from '../../redux/actions/alert';
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid"
import SearchStudent from './searchStudent'
const AddStudent = ({ dispatch }) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        dni: "",
    });

    const {
        first_name,
        last_name,
        email,
        phone,
        dni
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(create_student(first_name, last_name, email, phone, dni));
        setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            dni: "",
        })
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <>


            <div className="p-1.5 w-full sm:w-auto overflow-hidden bg-white border rounded-lg  ">
                <div className="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
                    <button className="flex items-center justify-center w-full px-2 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                        onClick={openModal}
                        type="button"

                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="mx-1">
                            Agregar Estudiante
                        </span>
                    </button>
                    <SearchStudent dispatch={dispatch} />
                   
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <form className='flex' onSubmit={e => onSubmit(e)}>
                                    {/* <div className="flex-none w-24 md:w-48  relative">
                                        <img src={product.photo_url} alt={product.name} className="absolute rounded-lg inset-0 w-full h-full object-cover" />
                                    </div> */}
                                    <div className="space-y-6 w-full bg-white">
                                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                            <h2 className="max-w-sm mx-auto md:w-1/3">
                                                Correo
                                            </h2>
                                            <div className="max-w-sm mx-auto md:w-2/3">
                                                <div className=" relative ">
                                                    <input
                                                        onChange={e => onChange(e)}
                                                        name='email'
                                                        type="email"
                                                        value={email}
                                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                            <h2 className="max-w-sm mx-auto md:w-1/3">
                                                Datos Personales
                                            </h2>
                                            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                                                <div >
                                                    <div className=" relative ">
                                                        <input
                                                            onChange={e => onChange(e)}
                                                            value={first_name}
                                                            name='first_name'
                                                            type="text"
                                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                            placeholder="Nombres"

                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className=" relative ">
                                                        <input
                                                            onChange={e => onChange(e)}
                                                            value={last_name}
                                                            name='last_name'
                                                            type="text"
                                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                            placeholder="Apellidos"

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                            <h2 className="max-w-sm mx-auto md:w-1/3">
                                                Datos Personales
                                            </h2>
                                            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                                                <div >
                                                    <div className=" relative ">
                                                        <input
                                                            onChange={e => onChange(e)}
                                                            value={dni}
                                                            name='dni'
                                                            type="text"
                                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                            placeholder="DNI"
                                                        />
                                                    </div>
                                                </div>
                                                <div>

                                                    <div className=" relative ">
                                                        <input
                                                            onChange={e => onChange(e)}
                                                            value={phone}
                                                            type="text"
                                                            name='phone'
                                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                            placeholder="N° de Celular"

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                            <button type="submit"
                                                className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                Registrar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Transition.Child>
                    </div>

                </Dialog>
            </Transition>
        </>
    )
}

export default AddStudent;