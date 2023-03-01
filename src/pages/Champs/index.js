import React from 'react';
import images from './../../assets/imgs/index';
import { useState, useEffect } from 'react';
import { GoSearch } from 'react-icons/go';
import FilterElement from '../../components/filterElement';

function Champ() {
    const [champs, setChamps] = useState([]);
    const [gamejson, setGameJson] = useState({});
    const [isloading, setLoading] = useState(false);

    async function getJSONAsync() {
        setLoading(true);
        await fetch('https://api2.metatft.com/tft-comps-api/unit_items')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return data.results.splice(0, 175);
            })
            .then((champs) => {
                setChamps(champs);
            })

            .catch((e) => console.error(e));
        setLoading(false);
    }
    useEffect(() => {
        getJSONAsync();
        const data = require('../../components/gameAssets/game/json/Set8_latest_en_us.json');
        setGameJson(data);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full xl:max-w-[1140px]  px-3 ">
            {/* title */}
            <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between w-full my-3">
                <div className="flex flex-col">
                    <div className="text-[#e6e6e6] text-3xl font-semibold min-w-[200px] mb-2">
                        TFT Champion Tier List
                    </div>
                    <div className="text-[#cfcfcf] text-[13px] font-normal leading-snug mr-3">
                        Stats on the best tft champions to play in set 8. Select a unit to see the best items and builds
                        for that unit. Data updates every 5 minutes.
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
                <div className="flex flex-wrap flex-[3_3_470px] justify-end items-center text-center text-[#cfcfcf]">
                    {/* search */}
                    <div className="flex flex-row justify-between items-center mb-[5px] mx-1 py-[4px] bg-[#414245] rounded">
                        <input
                            className="group pl-1 bg-inherit  outline-none rounded"
                            placeholder="Search Unit or Triat"
                        />
                        <GoSearch className="text-[#5e656b] pr-1 text-2xl " />
                    </div>
                </div>
            </div>

            {/* content */}
            <div className="flex flex-col lg:flex-row w-full mt-1">
                <div className="w-[200px] mr-[5px] min-h-[100px] h-fit p-[10px] flex-shrink rounded bg-[#27282b]">
                    <span className="text-[#cfcfcf]">This page is still under development....</span>
                </div>
                <div className="flex-auto ">
                    <table className="select-auto w-full">
                        <thead>
                            <tr role="row" className="bg-[#1f2022!important] text-[#cfcfcf]">
                                <th className="cursor-pointer">
                                    <div className="px-[.4rem] py-[.6rem] text-sm font-medium min-w-[170px] max-w-[170px] flex justify-start">
                                        <span className="hidden"> ▼</span>
                                        <div className="">Unit</div>
                                    </div>
                                </th>
                                <th className="cursor-pointer">
                                    <div className="px-[.4rem] py-[.6rem] text-sm font-medium">
                                        <span className="hidden"> ▼</span>
                                        <div className="">Tier</div>
                                    </div>
                                </th>
                                <th className="cursor-pointer">
                                    <div className="px-[.4rem] py-[.6rem] text-sm font-medium">
                                        <span className="hidden"> ▼</span>
                                        <div className="">Avg Place</div>
                                    </div>
                                </th>
                                <th className="cursor-pointer">
                                    <div className="px-[.4rem] py-[.6rem] text-sm font-medium">
                                        <span className="hidden"> ▼</span>
                                        <div className="">Winrate</div>
                                    </div>
                                </th>
                                <th className="cursor-pointer">
                                    <div className="px-[.4rem] py-[.6rem] text-sm font-medium text-end">
                                        <span className="hidden"> ▼</span>
                                        <div className="">Frequency</div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        {isloading ? (
                            <tbody className=" w-full">
                                <tr className="animate-pulse border-b-[1px] border-[#313236] min-w-[170px] w-full h-screen odd:bg-[#27282b] even:bg-[#222326]">
                                    <td></td>
                                    <td className=""></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody className="">
                                {champs.map((champ, index) => {
                                    const champinfo = gamejson.units.find((item) => item.apiName === champ.unit);
                                    return champ.unit ? (
                                        <tr
                                            key={index}
                                            className="border-b-[1px] border-[#313236] h-fit min-w-[170px] max-w-[170px] odd:bg-[#27282b] even:bg-[#222326]"
                                        >
                                            <td className="flex items-center ml-1 px-[.4rem] py-[.6rem]">
                                                <img
                                                    className={`border-[1.5px] h-8 w-8 hover:border-[#f0d77e!important]
                                                            ${
                                                                champinfo.cost === 1
                                                                    ? 'border-[#747278]'
                                                                    : champinfo.cost === 2
                                                                    ? 'border-[#17c21e]'
                                                                    : champinfo.cost === 3
                                                                    ? 'border-[#233ae7]'
                                                                    : champinfo.cost === 4
                                                                    ? 'border-[#b013b8]'
                                                                    : 'border-[#d9b73e]'
                                                            }
                                                            `}
                                                    src={`https://cdn.metatft.com/file/metatft/set8/champions/tft8_${champinfo.name
                                                        .toLowerCase()
                                                        .replace(/( )|(')|(&)|willump/g, '')}.png`}
                                                    alt="unit img"
                                                />
                                                <span className="ml-1 text-[#cfcfcf]"> {champinfo.name}</span>
                                            </td>
                                            <td className="text-center text-[#cfcfcf] px-[.4rem] py-[.6rem]">1</td>
                                            <td className="text-center text-[#cfcfcf] px-[.4rem] py-[.6rem]">
                                                {' '}
                                                {champinfo.name}
                                            </td>
                                            <td className="text-center text-[#cfcfcf] px-[.4rem] py-[.6rem]">
                                                {' '}
                                                {champinfo.name}
                                            </td>
                                            <td className="text-end text-[#cfcfcf] mr-5 px-[.4rem] py-[.6rem]">
                                                {' '}
                                                {champinfo.name}
                                            </td>
                                        </tr>
                                    ) : (
                                        <React.Fragment key={index}></React.Fragment>
                                    );
                                })}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Champ;
