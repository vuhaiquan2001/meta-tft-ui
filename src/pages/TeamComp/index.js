import React from 'react';
import images from './../../assets/imgs/index';
import { GoSearch } from 'react-icons/go';
import FilterElement from '../../components/filterElement';
import CompCard from '../../components/compCard';

function TeamComp() {
    return (
        <div className="flex flex-col items-center justify-center w-full xl:max-w-[1140px]  px-3 ">
            {/* title */}
            <div className="flex flex-row flex-wrap justify-between w-full my-3">
                <div className="flex flex-col">
                    <div className="text-[#e6e6e6] text-3xl font-semibold min-w-[200px] mb-2">Top TFT Team Comps</div>
                    <div className="text-[#cfcfcf] text-[13px] font-normal leading-snug mr-3">
                        A tier list of the best comps to play in the current meta, backed by data.
                        <span className="text-[#e6e6e6] text-[13px] font-normal leading-snug cursor-pointer underline">
                            More Info
                        </span>
                    </div>
                </div>
                <div className="flex flex-col mt-[5px] px-[10px] py-[5px] self-start items-center bg-[#27282b] rounded-md justify-start text-xs leading-5 text-[#cfcfcf]">
                    <div className="flex justify-between min-w-[220px] w-full">
                        Last Updated:<span className="flex items-center ml-1 font-semibold ">6 minutes ago</span>
                    </div>
                    <div className="flex justify-between min-w-[220px] w-full">
                        Comps Analyzed:<span className="flex items-center ml-1 font-semibold ">845,478</span>
                    </div>
                </div>
            </div>
            {/* config */}
            <div className="flex flex-wrap w-full justify-between text-xs items-center text-[#e6e6e6] min-h-[32px]">
                <div className="flex flex-row flex-wrap items-center">
                    <img className="w-5" src={images.filtericon} alt="filter" />

                    {/* Thẻ filter */}
                    <FilterElement />
                    <div className="hover:bg-[#616266] h-6 px-1 ml-1 flex flex-row items-center justify-center bg-[#414245] cursor-pointer rounded shadow-md">
                        <img className="w-[16px]" src={images.plusicon} alt="expand" />
                    </div>
                    {/* end thẻ filter */}
                </div>
                <div className="flex flex-wrap flex-[3_3_470px] justify-end items-center text-center">
                    <div className="flex items-center justify-center mx-[5px] mb-[5px]">
                        <span>Sort: </span>
                        <div className="flex justify-between items-center w-[120px] ml-[5px] bg-[#414245] hover:bg-[#5c5d61] p-[5px] rounded shadow-md">
                            <span className="px-1">Pick Rate</span>
                            <div className="border-l-[1px] border-[#cccccc]">
                                <img className="" src={images.expandicon} alt="expand" />
                            </div>
                        </div>
                    </div>
                    {/* switch */}
                    <div className="flex flex-col items-center justify-between mb-[5px] mr-[5px]">
                        <div className="drop-shadow-md">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                className="AscendingIcon active"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 00.753-1.659l-4.796-5.48a1 1 0 00-1.506 0z"></path>
                            </svg>
                        </div>

                        <div className="text-[#424348] drop-shadow-lg">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                className="AscendingIcon"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* search */}
                    <div className="flex flex-row justify-between items-center mb-[5px] mx-1 py-[4px] bg-[#414245] rounded">
                        <input
                            className="group pl-1 bg-inherit  outline-none rounded"
                            placeholder="Search Unit or Triat"
                        />
                        <GoSearch className="text-[#5e656b] pr-1 text-2xl " />
                    </div>

                    <div className=" hover:bg-[#616266] h-7 mx-[5px] mb-[5px] flex flex-row bg-[#414245] cursor-pointer rounded shadow-md">
                        <img className="w-[18px] ml-[5px]" src={images.patreon} alt="expand" />
                        <img className="w-[18px] mx-[3px]" src={images.lock} alt="expand" />
                    </div>
                    <div className="hover:bg-[#616266] h-7 p-1 flex mb-[5px] flex-row items-center justify-center bg-[#414245] cursor-pointer rounded shadow-md">
                        <img className="w-[16px]" src={images.setting} alt="expand" />
                    </div>
                </div>
            </div>
            {/* content */}
            <div id="container" className="w-full min-h-[1000px]">
                {/* comp row */}
                <CompCard />
            </div>
        </div>
    );
}

export default TeamComp;
