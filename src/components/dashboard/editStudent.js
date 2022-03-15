import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { update_student, delete_student } from '../../redux/actions/student';
import { setAlert } from '../../redux/actions/alert';


const EditStudent = ({
    dispatch,
    last_nameD,
    first_nameD,
    emailD,
    phoneD,
    dniD,
    status

}) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    let [isOpenDelete, setIsOpenDelete] = useState(false)

    function closeModalDelete() {
        setIsOpenDelete(false)
    }

    function openModalDelete() {
        setIsOpenDelete(true)
    }




    const [formData, setFormData] = useState({
        email: emailD,
        phone: phoneD,
        dni: dniD,
    });

    const {
        email,
        phone,
        dni
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(update_student(email, phone, dni));
        setIsOpen(false);
        window.scrollTo(0, 0);
    };
    const removeStudent = async () => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(delete_student(dniD));
        setIsOpenDelete(false);
        window.scrollTo(0, 0);

    }


    return (
        <>

            <div className="flex item-center justify-center">
                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </div>
                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <button className=""
                        onClick={openModal}
                        type="button"

                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </button>
                </div>
                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <button className=""
                        onClick={openModalDelete}
                        type="button"

                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>

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
                            <div className="inline-block w-full max-w-sm p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <form className=' w-full max-w-xs p-6  overflow-hidden' onSubmit={e => onSubmit(e)}>
                                    {/* <div className="flex-none w-24 md:w-48  relative">
                                        <img src={product.photo_url} alt={product.name} className="absolute rounded-lg inset-0 w-full h-full object-cover" />
                                    </div> */}

                                    <div className="flex flex-col md:flex-row items-center justify-between">
                                        <div className="flex items-center justify-start w-full flex-grow">
                                            <a href="#" className="block relative">
                                                <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                            </a>
                                            <div className="flex flex-col items-start ml-4">
                                                <span className="text-gray-700">
                                                    {first_nameD}{last_nameD}
                                                </span>

                                            </div>
                                        </div>
                                        <div className="flex-none hidden md:block ">
                                            <div className=" text-center">
                                                {status
                                                    ? <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Estudiante</span>
                                                    : <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Ex-Estudiante</span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <hr />

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
                                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                        <h2 className="max-w-sm mx-auto md:w-1/3">
                                            PHONE
                                        </h2>
                                        <div className="max-w-sm mx-auto md:w-2/3">
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
                                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                                        <h2 className="max-w-sm mx-auto md:w-1/3">
                                            DNI
                                        </h2>
                                        <div className="max-w-sm mx-auto md:w-2/3">
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
                                    </div>

                                    <button type="submit" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Actualizar
                                    </button>
                                    <hr />


                                </form>
                            </div>
                        </Transition.Child>
                    </div>

                </Dialog>
            </Transition>

            <Transition appear show={isOpenDelete} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModalDelete}>
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
                            <div className="inline-block w-full max-w-sm  overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className=" p-4 bg-white w-64 m-auto">
                                    <div className="w-full h-full text-center">
                                        <div className="flex h-full flex-col justify-between">
                                            <svg width="40" height="40" className="mt-4 w-12 h-12 m-auto text-red-500" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z">
                                                </path>
                                            </svg>
                                            <p className="text-gray-800  text-xl font-bold mt-4">
                                                Eliminar Estudiante
                                            </p>
                                            <p className="text-gray-600  text-xs py-2 px-6">
                                                No se podra revertir esta accion, esta seguro?
                                            </p>
                                            <div className="flex items-center justify-between gap-4 w-full mt-8">
                                                <button onClick={removeStudent} type="button" className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                    Eliminar
                                                </button>
                                                <button onClick={closeModalDelete} type="button" className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                    Cancelar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </Transition.Child>
                    </div>

                </Dialog>
            </Transition>
        </>
    )
}

export default EditStudent;