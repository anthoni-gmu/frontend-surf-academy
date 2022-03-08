import {
    GET_STUDENTS,
    GET_STUDENTS_FAIL,

    CREATE_STUDENT,
    CREATE_STUDENT_FAIL
} from "./types";

import axios from "axios";

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
            if (res.status === 201 ||res.status === 200 ) {
                dispatch({
                    type: CREATE_STUDENT,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: CREATE_STUDENT_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: CREATE_STUDENT_FAIL
            });
        }

    }