import React from 'react';
import { useState, useEffect } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import images from '../../assets/imgs';

function CompCard() {
    const [comps, setComps] = useState([]);
    const [gamejson, setGameJson] = useState({});
    const [isloading, setLoading] = useState(false);
    async function getJSONAsync() {
        setLoading(true);
        await fetch('https://api2.metatft.com/tft-comps-api/comps_data')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return data.results.data.cluster_details;
            })
            .then((clust) => {
                const array = Object.values(clust);
                setComps(array);
            })
            .catch((e) => console.error(e));
        setLoading(false);
    }

    useEffect(() => {
        getJSONAsync();
        const data = require('../../components/gameAssets/game/json/Set8_latest_en_us.json');
        setGameJson(data);
    }, []);
    return isloading ? (
        <div className="flex flex-col justify-center items-center w-full bg-[#27282b] min-h-screen rounded-[10px] animate-pulse ">
            <span className="text-4xl text-[#6d6a6a] font-bold">Loading....</span>
            <img
                className="animate-spin w-[40px] mb-[300px] "
                src="https://freesvg.org/img/1544764567.png"
                alt="loading"
            />
        </div>
    ) : (
        <div>
            {comps.map((cluster, index) => {
                const avg = (
                    cluster.trends.reduce((count, current) => {
                        return count + current.avg;
                    }, 0) / cluster.trends.length
                ).toFixed(2);
                const pickrate = cluster.trends
                    .reduce((count, current) => {
                        return count + current.pick;
                    }, 0)
                    .toFixed(2);
                return (
                    <div
                        key={index}
                        className="flex my-[10px] min-h-[50px] w-full p-[5px_5px_5px_10px] bg-[#27282b] rounded-[5px] drop-shadow"
                    >
                        <div className="flex relative w-full max-w-full max-h-full min-w-0">
                            {/* comp option */}
                            <div className="flex justify-end items-center w-[100px] h-5 z-10 absolute right-0 top-0 ">
                                <div className="float-right mr-[5px] cursor-pointer">
                                    <img className="w-[20px]" src={images.share} alt="comp option" />
                                </div>
                                <div className="float-right mr-[5px] cursor-pointer">
                                    <img src={images.hidden} alt="comp option" />
                                </div>
                                <div className="float-right mr-[5px] cursor-pointer">
                                    <img src={images.pin} alt="comp option" />
                                </div>
                            </div>
                            {/* endcomp option */}
                            <div className="flex-[1_1_auto] min-w-0">
                                <div className="text-[#e6e6e6]">
                                    <div className="flex flex-row flex-wrap justify-start text-sm font-medium mr-[80px] mb-[2px]">
                                        <img className="hidden h-5 w-5 mr-[3px] cursor-pointer" src="" alt="" />
                                        {cluster.name_string.replace(/(,)|(_)|TFT8|Set8/g, '   ') + ' Comp'}
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between w-full">
                                    <div className="flex flex-row flex-wrap justify-start lg:min-w-[380px]">
                                        {/* unit container */}
                                        {cluster.units_string.split(', ').map((name, index) => {
                                            const champ = gamejson.units.find((item) => item.apiName === name);
                                            return (
                                                <div
                                                    key={index}
                                                    className="group flex flex-col items-center justify-center px-[3px] "
                                                >
                                                    <div>
                                                        {cluster.stars.map((star, index) => {
                                                            return name === star ? (
                                                                <div
                                                                    key={index}
                                                                    className=" flex-col items-center h-12px relative"
                                                                >
                                                                    <img
                                                                        className="absolute top-[-7px]"
                                                                        src="https://www.metatft.com/cdn-cgi/image/height=12,format=auto/https://cdn.metatft.com/file/metatft/tiers/3.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <React.Fragment key={index} />
                                                            );
                                                        })}

                                                        <img
                                                            className={`border-[1.5px] h-10 w-10 rounded-[3px] hover:border-[#f0d77e!important]
                                                            ${
                                                                champ.cost === 1
                                                                    ? 'border-[#747278]'
                                                                    : champ.cost === 2
                                                                    ? 'border-[#17c21e]'
                                                                    : champ.cost === 3
                                                                    ? 'border-[#233ae7]'
                                                                    : champ.cost === 4
                                                                    ? 'border-[#b013b8]'
                                                                    : 'border-[#d9b73e]'
                                                            }
                                                            `}
                                                            src={`https://cdn.metatft.com/file/metatft/set8/champions/tft8_${champ.name
                                                                .toLowerCase()
                                                                .replace(/( )|(')|(&)|willump/g, '')}.png`}
                                                            alt="unit img"
                                                        />
                                                    </div>
                                                    <div className="flex flex-row items-end text-center text-[#cfcfcf] text-[10px] h-[15px] max-w-[47px] overflow-hidden text-ellipsis ">
                                                        {champ.name}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="flex flex-col justify-around mx-[5px] px-[5px] min-w-[140px] m-h-full">
                                        <div className="flex flex-row justify-between items-center w-full">
                                            <span className="inline-flex text-center text-[#cfcfcf] text-sm">
                                                Avg Place:
                                            </span>
                                            <div
                                                className={`flex items-baseline justify-end font-normal text-base w-10  ml-[10px] mt-[1px] group
                                            ${
                                                avg >= 5
                                                    ? 'text-[#cc4e57]'
                                                    : avg >= 4.5
                                                    ? 'text-[#d9aa6c]'
                                                    : avg >= 3.5
                                                    ? 'text-[#e5eb7f]'
                                                    : 'text-[#9ecb6c]'
                                            }
                                            `}
                                            >
                                                {avg}
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between items-center w-full">
                                            <span className="inline-flex text-center text-[#cfcfcf] text-sm">
                                                Pick Rate:
                                            </span>
                                            <div
                                                className={`flex items-baseline justify-end font-normal text-base w-10  ml-[10px] mt-[1px] group
                                            ${
                                                pickrate >= 0.5
                                                    ? 'text-[#cc4e57]'
                                                    : pickrate >= 0.3
                                                    ? 'text-[#d9aa6c]'
                                                    : pickrate >= 0.2
                                                    ? 'text-[#e5eb7f]'
                                                    : 'text-[#9ecb6c]'
                                            }
                                            `}
                                            >
                                                {pickrate}
                                            </div>
                                        </div>
                                    </div>
                                    <div id="spacing"> </div>
                                </div>
                            </div>
                            {/* carries */}
                            <div className="hidden lg:flex flex-[0_1] flex-col items-start justify-around min-w-[300px] ml-5 text-[#cfcfcf]">
                                <div className="flex-[0_1] relative text-sm">
                                    Carries
                                    <FaQuestionCircle className="text-xs absolute right-[-14px] top-[-2px] cursor-pointer" />
                                </div>
                                <div className="flex flex-col flex-[1_1] justify-center items-center ">
                                    <div className="flex flex-row">
                                        {cluster.builds.map((obj, index) => {
                                            const champ = gamejson.units.find((item) => item.apiName === obj.unit);
                                            return (
                                                <div
                                                    key={index}
                                                    className="flex flex-col items-center justify-center px-[3px]"
                                                >
                                                    <div>
                                                        <img
                                                            className={`border-[1.5px] h-10 w-10 rounded-[3px] hover:border-[#f0d77e!important]
                                                            ${
                                                                champ.cost === 1
                                                                    ? 'border-[#747278]'
                                                                    : champ.cost === 2
                                                                    ? 'border-[#17c21e]'
                                                                    : champ.cost === 3
                                                                    ? 'border-[#233ae7]'
                                                                    : champ.cost === 4
                                                                    ? 'border-[#b013b8]'
                                                                    : 'border-[#d9b73e]'
                                                            }
                                                            `}
                                                            src={`https://cdn.metatft.com/file/metatft/set8/champions/tft8_${champ.name
                                                                .toLowerCase()
                                                                .replace(/( )|(')|(&)|willump/g, '')}.png`}
                                                            alt="unit img"
                                                        />
                                                    </div>
                                                    <div className="h-4 flex flex-row mt-[-10px]">
                                                        {obj.build.map((item, index) => {
                                                            return (
                                                                <div key={index} className="h-4 w-4 ">
                                                                    <img
                                                                        className="border-[1px] border-[#222] rounded-[4px]"
                                                                        src={`https://cdn.metatft.com/file/metatft/set8/items/${obj.build[index]}.png`}
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="flex flex-col cursor-pointer justify-end mb-[-5px] max-h-full">
                                <img className="w-[30px]" src={images.expandicon} alt="" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CompCard;
