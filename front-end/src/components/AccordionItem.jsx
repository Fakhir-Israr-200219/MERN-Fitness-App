import { useDispatch } from 'react-redux';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { incrementValue, decrementValue } from '../app/Slices/logSclice';

const AccordionItem = ({ date, log }) => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    return (
        <div className="border-4 border-[#ed563b] mx-3 px-2 mt-4 md:ml-25">
            {['exercises', 'cardios'].map((type) =>
                log[type]?.map((item, index) => (
                    <table key={index} className="w-full border-2 border-[#ed563b] mb-4">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="font-bold text-left px-4 py-2" colSpan="3">
                                    {item.exercise || item.cardio || 'Unnamed Exercise'}
                                    <span className="text-sm text-gray-500 ml-2">({type === 'exercises' ? 'Exercise' : 'Cardio'})</span>
                                </th>
                            </tr>
                            <tr className="bg-gray-200">
                                <th className="font-bold text-left px-4 py-2">Attribute</th>
                                <th className="font-bold text-left px-4 py-2">Value</th>
                                <th className="font-bold text-left px-4 py-2">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {['Sets', 'Reps', 'Weight', 'Duration'].map((field) =>
                                item[field.toLowerCase()] !== undefined && (
                                    <tr key={field} className="border-t">
                                        <td className="font-extrabold w-1/2 px-4 py-2">{field}:</td>
                                        <td className="w-1/3 px-4 py-2 text-left">
                                            {item[field.toLowerCase()]} {field === 'Weight' ? 'kg' : field === 'Duration' ? 'min' : ''}
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="flex space-x-4">
                                                <span
                                                    className="cursor-pointer text-red-500"
                                                    onClick={() =>
                                                        dispatch(decrementValue({
                                                            date, type, index, field: field.toLowerCase(), id: item._id, token
                                                        }))
                                                    }
                                                >
                                                    <FaMinusCircle />
                                                </span>
                                                <span
                                                    className="cursor-pointer text-green-500"
                                                    onClick={() =>
                                                        dispatch(incrementValue({
                                                            date, type, index, field: field.toLowerCase(), id: item._id, token
                                                        }))
                                                    }
                                                >
                                                    <FaPlusCircle />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                ))
            )}
        </div>
    );
};

export default AccordionItem;
