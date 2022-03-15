import {
    GET_STUDENTS,
    GET_STUDENTS_FAIL,

    CREATE_STUDENT,
    CREATE_STUDENT_FAIL,

    UPDATE_STUDENT,
    UPDATE_STUDENT_FAIL,

    DELETE_STUDENT,
    DELETE_STUDENT_FAIL
} from '../actions/types'


const initialState = {
    students: null,
}

export default function Student(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_STUDENTS:
        case CREATE_STUDENT:
        case UPDATE_STUDENT:
        case DELETE_STUDENT:
            return {
                ...state,
                students: payload.results,
            }
        case GET_STUDENTS_FAIL:
        case CREATE_STUDENT_FAIL:
        case UPDATE_STUDENT_FAIL:
        case DELETE_STUDENT_FAIL:
            return {
                ...state,
                students: null
            }
        default:
            return state
    }

}