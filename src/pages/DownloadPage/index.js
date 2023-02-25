import React from 'react';
import { Link } from 'react-router-dom';
import { appDataCard, installCard } from '../../components/card/cardInfo';
import ImgFirstEnd from '../../components/card/imgendCard';
import DownloadCard from '../../components/card/downloadcard';
import { discoverTab } from '../../components/multiTabs/multiTabInfo';
import MultiTabs from '../../components/multiTabs';

function DownloadPage() {
    return (
        <div className="flex justify-center w-full h-max  px-[16px] pb-[40px]">
            <div className="flex flex-col justify-center w-full max-w-[1140px] mx-auto px-3">
                <div className="flex flex-col items-center">
                    <div className="text-[#e6e6e6] text-2xl font-medium min-w-[200px] mb-2 mt-5">
                        MetaTFT In-Game App
                    </div>
                    <div className="text-[#cfcfcf] text-[13px] text-center font-normal leading-snug mr-3">
                        Join over 100.000 users and download the free MetaTFT in-game app. All the stats and data you're
                        used to, with new features including Lobby Scouting, Matchmaking Tracking, and Detailed Match
                        Historie
                    </div>
                </div>

                <div
                    id="HomePage_desc"
                    className="flex flex-col lg:flex-row justify-between items-center w-auto h-fit mt-[40px]"
                >
                    {appDataCard.map((card, index) => (
                        <ImgFirstEnd card={card} key={index} />
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center mt-2">
                    <Link
                        to="/"
                        className="bg-[#be0505] hover:bg-[#e51616d6] shadow-[5px_5px_9px_0px_rgba(0,0,0,0.3)] hover:bg-gray text-[#e6e6e6!important]  font-medium py-[10px] px-4 lg:px-[34px] rounded-lg inline-flex items-center"
                    >
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="DownloadButtonIcon mr-[5px]"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download Now
                    </Link>
                    <div className="mt-[5px] text-xs text-[#cfcfcf] text-center">
                        Available for Windows - Powered by Overwolf
                    </div>
                </div>

                <div id="Discover_MetaTFT" className="flex flex-col items-center mt-[40px] rounded-[10px]">
                    <div className="max-w-full min-h-full bg-[#222326] rounded-[10px]">
                        <div className="text-[26px] leading-[1.5] box-border text-slate-200 font-medium mt-3 text-center">
                            Discover MetaTFT
                        </div>
                        <MultiTabs arr={discoverTab}></MultiTabs>
                    </div>
                </div>

                <div className="flex flex-col  w-auto h-fit mt-[40px] bg-[#222326] rounded-[10px]">
                    <div className="text-[26px] leading-[1.5] box-border text-slate-200 font-medium mt-3 text-center">
                        Discover MetaTFT
                    </div>
                    <div className="flex flex-col lg:flex-row justify-around items-center">
                        {installCard.map((card, index) => (
                            <DownloadCard key={index} card={card} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadPage;
