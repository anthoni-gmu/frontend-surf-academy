import EditStudent from "./editStudent";
import { useDispatch, useSelector } from 'react-redux';

const TableStudents = ({ students }) => {
    const dispatch = useDispatch();
    return (
        
                    <div className="bg-white shadow-md rounded my-6">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Nombre</th>
                                    <th className="py-3 px-6 text-left">Apellido</th>
                                    <th className="py-3 px-6 text-left">Correo</th>
                                    <th className="py-3 px-6 text-center">Estado</th>
                                    <th className="py-3 px-6 text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">

                                {students &&
                                    students !== null &&
                                    students !== undefined &&
                                    students.map((student) => (
                                        <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left">
                                                <div className="flex items-center">
                                                    <div className="mr-2">
                                                        <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                                    </div>
                                                    <span>{student.first_name}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                                <div className="flex items-center">

                                                    <span className="font-medium">{student.last_name}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                                <div className="flex items-center">

                                                    <span className="font-medium">{student.email}</span>
                                                </div>
                                            </td>


                                            <td className="py-3 px-6 text-center">
                                                {student.status
                                                    ? <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Estudiante</span>
                                                    : <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Ex-Estudiante</span>
                                                }
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                            <EditStudent  dispatch={dispatch} last_nameD={student.last_name} first_nameD={student.first_name} emailD={student.email} phoneD={student.phone} dniD={student.dni} status={student.status} />
                                               
                                            </td>
                                        </tr>

                                    ))}

                            </tbody>
                        </table>
                    </div>
           
    )
}

export default TableStudents;