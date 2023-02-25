import React from 'react';
import { Link } from 'react-router-dom';
import { introduceCards } from '../../components/card/cardInfo';
import ImgFirstCard from '../../components/card/imgFirstCard';
import StartedCard from '../../components/card/getstartedCard';
import MultiTabs from '../../components/multiTabs/index';
import { discoverMetaTFT } from '../../components/multiTabs/multiTabInfo';

function Home() {
    return (
        <div className="flex justify-center w-full h-max  px-[16px] pb-[40px]">
            <div className="flex flex-col justify-between w-full items-center xl:max-w-[1140px] xl:px-[15px] xl:mx-auto">
                <div id="HomePage_banner" className="h-[500px] aspect-[1] relative w-full mt-[40px] lg:aspect-video">
                    <img
                        className="rounded-[10px] bg-[#202233] object-cover w-full h-full lg:object-fill lg:w-full lg:h-full opacity-[0.6] mix-blend-soft-light z-0"
                        src="https://cdn.metatft.com/file/metatft/home/set7_bg.webp"
                        alt="TFT Set 8"
                    />
                    <div className="flex flex-col ml-[5%] absolute top-[32%] ">
                        <h1 className="flex flex-col text-[28px] font-medium lg:text-[34px] lg:font-medium text-[#fff] leading-[137%]">
                            <span>The best place for TFT</span>
                            <span>stats and data</span>
                        </h1>
                        <h3 className="text-[18px] lg:text-[20px] font-normal text-[#cfcfcf] leading-[1.2] mt-2">
                            Up to date for Patch 13.3
                        </h3>
                        <div className="flex flex-col lg:flex-row h-[40px] w-[100%] mt-2 ">
                            <div className="lg:mr-2">
                                <Link
                                    to="/comps"
                                    className="bg-[#424348] hover:bg-[#535459dc]  shadow-[5px_5px_9px_0px_rgba(0,0,0,0.5)] hover:bg-gray text-[#e6e6e6!important] font-medium py-[12px] px-[27px] rounded-lg inline-flex items-center"
                                >
                                    Views Comps
                                </Link>
                            </div>
                            <div className="lg:mr-2 lg:mt-0 mt-3">
                                <Link
                                    to="/download"
                                    className="bg-[#be0505] hover:bg-[#e51616d6] shadow-[5px_5px_9px_0px_rgba(0,0,0,0.3)] hover:bg-gray text-[#e6e6e6!important] font-medium py-[12px] px-[27px] rounded-lg inline-flex items-center"
                                >
                                    Download App
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="HomePage_desc" className="flex flex-col lg:flex-row justify-between w-auto h-fit mt-[40px]">
                    {introduceCards.map((card, index) => (
                        <ImgFirstCard card={card} key={index} />
                    ))}
                </div>
                <div id="Discover_MetaTFT" className="flex flex-col items-center mt-[40px] rounded-[10px]">
                    <div className="max-w-full min-h-full bg-[#222326] rounded-[10px]">
                        <div className="text-[26px] leading-[1.5] box-border text-slate-200 font-medium mt-3 text-center">
                            Discover MetaTFT
                        </div>
                        <MultiTabs arr={discoverMetaTFT}></MultiTabs>
                    </div>
                </div>
                <div className="flex flex-col mt-10 bg-[#222326] rounded-[10px]">
                    <div className="text-[26px] leading-[1.5] box-border text-slate-200 font-medium mt-3 text-center">
                        Get Started
                    </div>
                    <div className="flex flex-row flex-wrap ">
                        <StartedCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
