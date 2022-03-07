import {
    GET_STUDENTS,
    GET_STUDENTS_FAIL
} from "./types";

import axios from "axios";


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