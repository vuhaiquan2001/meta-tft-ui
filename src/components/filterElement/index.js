import React from 'react';
import images from './../../assets/imgs/index';
import { filterComps } from './filterElementInfo';

function FilterElement() {
    return (
        <div className="flex flex-row flex-wrap items-center">
            {filterComps.map((obj, index) =>
                obj.type === 'rank' ? (
                    <div key={index} className="group m-[2px_2px_2px_4px] relative">
                        <div className="flex justify-center items-center cursor-pointer h-7 bg-[#414245] hover:bg-[#5e5f64] p-[5px_5px_5px_7px] rounded shadow-md">
                            {obj.child[0].title}
                            <img className="w-4 mr-[-3px]" src={images.expandicon} alt="expand" />
                        </div>

                        <div className="hidden group-hover:flex flex-col mt-1 top-7 absolute z-10">
                            <div className="bg-[#414245] flex flex-col drop-shadow-[5px_5px_5px_rgba(0,0,0,.5)] w-[200px] rounded">
                                {obj.child.map((filter, index) => (
                                    <div key={index}>
                                        <div className="flex flex-row hover:bg-[#65676a] items-center justify-between p-[6px_6px_6px_10px] cursor-pointer border-b-[1px] border-b-[#313236] ">
                                            <span className="flex items-center ">
                                                {' '}
                                                <img
                                                    className="mr-[3px] h-[26px] w-[26px]"
                                                    src={filter.img}
                                                    alt="expand"
                                                />{' '}
                                                {filter.title}
                                            </span>
                                            <div className="inline-flex items-center flex-row">
                                                <span className="mr-2 leading-[1.8]">{filter.total}</span>
                                                <span className="mt-[1px] relative text-base ">
                                                    <img className="w-4 " src={images.checkbox} alt="expand" />
                                                    {filter.ischecked ? (
                                                        <img
                                                            className="absolute w-[11px] mr-[-3px] bottom-[3px] left-1 z-20"
                                                            src={images.checked}
                                                            alt="expand"
                                                        />
                                                    ) : (
                                                        <React.Fragment></React.Fragment>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex flex-row-reverse text-xs p-[5px]">
                                    <div className="p-[3px] w-[50px] rounded-[5px] bg-[#be0505] hover:bg-[#ce3030] cursor-pointer font-medium text-[#cfcfcf] text-center">
                                        Apply
                                    </div>
                                </div>
                                <div className="absolute w-full h-4 top-[-10px] left-0"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div key={index} className="group m-[2px_2px_2px_4px] relative">
                        <div className="flex justify-center items-center cursor-pointer h-7 bg-[#414245] hover:bg-[#5e5f64] p-[5px_5px_5px_7px] rounded shadow-md">
                            {obj.child[0].title}
                            <img className="w-4 mr-[-3px]" src={images.expandicon} alt="expand" />
                        </div>

                        <div className="hidden group-hover:flex flex-col mt-1 top-7 absolute z-10">
                            <div className="bg-[#414245]  flex flex-col drop-shadow-[5px_5px_5px_rgba(0,0,0,.5)] w-[200px] rounded relative">
                                {obj.child.map((filter, index) => (
                                    <div key={index}>
                                        <div className="flex flex-row hover:bg-[#65676a] items-center justify-between p-[6px_6px_6px_10px] cursor-pointer border-b-[1px] border-b-[#313236] ">
                                            <span> {filter.title}</span>
                                            <div className="inline-flex items-center flex-row">
                                                <span className="mr-2 leading-[1.8]">{filter.total}</span>
                                                <span className="mt-[1px] relative text-base ">
                                                    <img className="w-4 " src={images.checkbox} alt="expand" />
                                                    {filter.ischecked ? (
                                                        <img
                                                            className="absolute w-[11px] mr-[-3px] bottom-[3px] left-1 z-20"
                                                            src={images.checked}
                                                            alt="expand"
                                                        />
                                                    ) : (
                                                        <React.Fragment></React.Fragment>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex flex-row-reverse text-xs p-[5px]">
                                    <div className="p-[3px] w-[50px] rounded-[5px] bg-[#be0505] hover:bg-[#ce3030] cursor-pointer font-medium text-[#cfcfcf] text-center">
                                        Apply
                                    </div>
                                </div>
                                <div className="absolute w-full h-4 top-[-10px] left-0"></div>
                            </div>
                        </div>
                    </div>
                ),
            )}
        </div>
    );
}

export default FilterElement;
