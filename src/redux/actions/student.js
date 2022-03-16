import {
    GET_STUDENTS,
    GET_STUDENTS_FAIL,

    CREATE_STUDENT,
    CREATE_STUDENT_FAIL,

    UPDATE_STUDENT,
    UPDATE_STUDENT_FAIL,

    DELETE_STUDENT,
    DELETE_STUDENT_FAIL,

    SEARCH_STUDENT,
    SEARCH_STUDENT_FAIL
} from "./types";

import axios from "axios";
import { setAlert } from '../../redux/actions/alert';

const getStorLocal = (item) => {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(item);
    }
    return null;
}

export const get_students = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/student/students`, config)
        if (res.status === 200) {
            dispatch({
                type: GET_STUDENTS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_STUDENTS_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_STUDENTS_FAIL
        });
    }

}


export const create_student = (
    first_name,
    last_name,
    email,
    phone,
    dni,) => async dispatch => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${getStorLocal('access')}`
            }
        };

        const body = JSON.stringify({
            first_name,
            last_name,
            email,
            phone,
            dni,
        });

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/student/addstudent`, body, config)
            if (res.status === 201 || res.status === 200) {
                dispatch({
                    type: CREATE_STUDENT,
                    payload: res.data
                });
                dispatch(setAlert('Estudiante creado satisfactoriamente', 'green'));

            } else {
                dispatch({
                    type: CREATE_STUDENT_FAIL
                });
                dispatch(setAlert('Los datos ingresados no son los correctos', 'red'));

            }
        } catch (err) {
            dispatch({
                type: CREATE_STUDENT_FAIL
            });
            dispatch(setAlert('Ocurrio un error en el servidor', 'red'));

        }

    }




export const update_student = (
    email,
    phone,
    dni,) => async dispatch => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${getStorLocal('access')}`
            }
        };

        const body = JSON.stringify({
            email,
            phone,
            dni,
        });

        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/student/updatestudent`, body, config)
            if (res.status === 201 || res.status === 200) {
                dispatch({
                    type: UPDATE_STUDENT,
                    payload: res.data
                });
                dispatch(setAlert('Estudiante actualizado satisfactoriamente', 'green'));

            } else {
                dispatch({
                    type: UPDATE_STUDENT_FAIL
                });
                dispatch(setAlert('Los datos ingresados no son los correctos', 'red'));

            }
        } catch (err) {
            dispatch({
                type: UPDATE_STUDENT_FAIL
            });
            dispatch(setAlert('Ocurrio un error en el servidor', 'red'));

        }

    }

export const delete_student = (
    dni
) => async dispatch => {
    const body = JSON.stringify({
        dni
    });
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `JWT ${getStorLocal('access')}`
        },
        data: body
    };



    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/student/deletestudent`, config)

        if (res.status === 200) {
            dispatch({
                type: DELETE_STUDENT,
                payload: res.data
            });
            dispatch(setAlert('Estudiante Eliminado satisfactoriamente', 'green'));

        } else {
            dispatch({
                type: DELETE_STUDENT_FAIL,
            });
            dispatch(setAlert('Los datos ingresados no son los correctos', 'red'));

        }
    } catch (err) {
        dispatch({
            type: DELETE_STUDENT_FAIL
        });
        dispatch(setAlert('Ocurrio un error en el servidor', 'red'));

    }

}
export const search_student = (
    search
) => async dispatch => {
    const body = JSON.stringify({
        search,
    });
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `JWT ${getStorLocal('access')}`
        },
    };

    try {

        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/student/searchstudent`,body, config)

        if (res.status === 200) {
            dispatch({
                type: SEARCH_STUDENT,
                payload: res.data
            });
            dispatch(setAlert('Resultados', 'green'));

        } else {
            dispatch({
                type: SEARCH_STUDENT_FAIL,
            });
            dispatch(setAlert('Los datos ingresados no son los correctos', 'red'));

        }
    } catch (err) {
        dispatch({
            type: SEARCH_STUDENT_FAIL
        });
        dispatch(setAlert('Ocurrio un error en el servidor', 'red'));

    }

}