import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

const initTabObj = {
    obj: {},
    currentName: '',
};

const GET_OBJ = 'get_obj';
const GET_NAME = 'get_name';

const get_obj = (payload) => {
    return {
        type: GET_OBJ,
        payload,
    };
};
const get_name = (payload) => {
    return {
        type: GET_NAME,
        payload,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case GET_OBJ:
            return { ...state, obj: action.payload };
        case GET_NAME:
            return { ...state, currentName: action.payload };
        default:
            break;
    }
};

function MultiTabs(obj) {
    const arr = obj.arr;
    const [state, dispatch] = useReducer(reducer, initTabObj);
    const [index, setIndex] = useState(0);

    const handleActive = (arr, index) => {
        dispatch(get_name(arr.name));
        setIndex(index);
    };

    useEffect(() => {
        dispatch(get_obj(arr[index]));
        dispatch(get_name(arr[index].name));
    }, [index, arr]);

    return (
        <div className="  max-w-full max-h-full box-border">
            <ul className="flex flex-wrap list-none content-between mx-5 border-b-[1px] border-[#404144]">
                {arr.map((obj, index) => (
                    <li
                        className={`block px-4 py-2  border-[1px]  border-transparent text-sm font-light rounded-t text-[#cfcfcf] 
                        cursor-pointer hover:bg-[#222326] hover:text-[#cbb46c!important] hover:border-[#404144!important]
                        ${
                            state.currentName === obj.name
                                ? 'text-[#cbb46c!important] border-[#404144!important] border-b-[transparent!important] bg-[#222326] mb-[-1px] '
                                : ''
                        }
                        `}
                        key={index}
                        onClick={() => handleActive(obj, index)}
                    >
                        {obj.name}
                    </li>
                ))}
            </ul>
            <div className="flex flex-wrap-reverse justify-between items-center p-5 ">
                <div className="w-full lg:w-[32%] ">
                    <div className="mb-[5px] text-[#e6e6e6] text-lg leading-[30px] font-semibold text-left">
                        {state.obj.name}
                    </div>
                    <div className="mb-[5px] text-[#cfcfcf] text-sm leading-[160%]  font-normal text-left">
                        {state.obj.desc}
                    </div>
                    <Link
                        to={state.obj.url}
                        className="mb-[5px] text-[#cbb46c]  text-sm leading-[160%]  font-normal text-left hover:text-[#fff]"
                    >
                        {state.obj.urldesc}
                    </Link>
                </div>
                <div className="flex items-center w-full lg:max-w-[710px] lg:w-[70%-12px] max-h-full aspect-[1.36538]">
                    <img className="rounded-[10px] w-full h-auto align-middle" src={state.obj.img} alt="Discover_img" />
                </div>
            </div>
        </div>
    );
}

export default MultiTabs;
