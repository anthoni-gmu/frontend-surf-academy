import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout/LayaoutDashboard'
import { get_students } from '../../redux/actions/student';

import TableStudents from '../../components/dashboard/tableStudents';
import AddStudent from '../../components/dashboard/addStudent';

const Student = () => {
    const dispatch = useDispatch();
    useEffect(() => {

        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(get_students());
    }, [dispatch]);
    const students = useSelector((state) => state.Student.students)


    return (
        <Layout>
            <div className="overflow-x-auto ">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="w-full lg:w-5/6">
                        <AddStudent dispatch={dispatch} />
                        <TableStudents students={students} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Student


