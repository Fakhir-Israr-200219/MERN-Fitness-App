import React, { useState, useRef, useEffect } from 'react';
import { FaMinusCircle } from 'react-icons/fa';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('0px');

    const toggleAccordion = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    return (
        <div className="border-4 border-[#ed563b] mx-3 px-2 mt-4">
            <button
                onClick={toggleAccordion}
                className="w-full flex justify-between items-center py-5 text-slate-800"
            >
                <span className='font-extrabold'>{title}</span>
                <span className="text-slate-800 transition-transform duration-300">
                    {isOpen ? (
                        // Minus icon when open
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                            <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                        </svg>
                    ) : (
                        // Plus icon when closed
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                        </svg>
                    )}
                </span>
            </button>
            <div
                ref={contentRef}
                style={{ maxHeight }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                
                <div className="pb-5 text-sm text-slate-500">
                    {content.map((section, idx) => (
                        <table key={idx} className="w-full border-2 border-[#ed563b] mb-4">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="font-bold text-left px-4 py-2">
                                        {section.type}
                                    </th>
                                    <th className="font-bold text-left px-4 py-2">
                                        
                                    </th>
                                    <th  className="font-bold text-left px-4 py-2">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {section.items.map((item, i) => (
                                    <tr key={i} className="border-t">
                                        <td className="font-extrabold w-1/2 px-4 py-2">{item.label}</td>
                                        <td className="w-1/3 px-4 py-2 text-left">{item.value}</td>
                                        <td className="px-4 py-2">
                                            {(item.label === 'Sets:' || item.label === 'Ribs:') && (
                                                <span className="cursor-pointer">
                                                    <FaMinusCircle />
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AccordionItem;
