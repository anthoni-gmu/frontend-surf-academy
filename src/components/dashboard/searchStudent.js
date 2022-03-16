import { search_student } from '../../redux/actions/student';
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'



const SearhStudent = ({ dispatch }) => {


 

    const [formData, setFormData] = useState({
        search: "",
    });

    const {
        search,
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
   

    const onSubmit = e => {
        e.preventDefault();
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(search_student(search));
        // setFormData({
        //     search: "",

        // })
        window.scrollTo(0, 0);
    };



    return (
        <form onSubmit={e => onSubmit(e)} className="flex mx-3 appearance-none border-2 p-1 left-2 m-5 sm:max-w-screen-sm text-stone-900">
            <input
                type="text"
                onChange={e => onChange(e)}
                name='search'
                value={search}
                className="appearance-none bg-transparent px-4 py-2 w-64"
                placeholder="Search..."

            />


         
            {/* <label htmlFor="checkbox" className="relative mx-2 flex-inline items-center isolate p-2 rounded-2xl">
                <input
                    id="checkbox"
                    type="checkbox"
                    name='student'
                    value={student}
                    defaultChecked={true}

                    onChange={e => handleChange(e)}
                    className="relative peer z-20 text-green-600 rounded-md focus:ring-0"

                />
                <span className="ml-2 relative z-20">Estudiante</span>
                <div className="absolute inset-0 bg-white peer-checked:bg-green-50 peer-checked:border-green-300 z-10 border rounded-2xl"></div>
            </label>
            <label htmlFor="checkbox2" className="relative flex-inline items-center isolate p-2 rounded-2xl">
                <input
                    id="checkbox2"
                    type="checkbox"

                    name='ex_student'
                    value={ex_student}
                    defaultChecked={true}

                    onChange={e => handleChange(e)}

                    className="relative peer z-20 text-red-600 rounded-md focus:ring-0"

                />
                <span className="ml-2 relative z-20">Ex-Estudiante</span>
                <div className="absolute inset-0 bg-white peer-checked:bg-red-50 peer-checked:border-red-300 z-10 border rounded-2xl"></div>
            </label> */}
            <button type="submit" className="flex mx-2 items-center justify-center px-5">
                <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                </svg>
            </button>
        </form>
    )
}

export default SearhStudent;