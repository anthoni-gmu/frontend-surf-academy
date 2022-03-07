import {
    GET_STUDENTS,
    GET_STUDENTS_FAIL
} from '../actions/types'


const initialState = {
    students: null,
}

export default function Student(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_STUDENTS:
            return {
                ...state,
                students: payload.results,
            }
        case GET_STUDENTS_FAIL:
            return {
                ...state,
                students: null
            }
        default:
            return state
    }

}