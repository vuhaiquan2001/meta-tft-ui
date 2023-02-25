import React from 'react';

function DownloadCard({ card, index }) {
    return (
        <div key={index} className="flex flex-col flex-auto items-center rounded-lg max-w-[32%] h-fit">
            <div className="bg-[#273b4a] h-[110px] w-[110px] flex justify-center mb-[10px] mt-5 rounded-[50%]">
                <img className="" src={card.img} alt="Happy" />
            </div>
            <div className="flex item-center text-[#e6e6e6] text-lg font-semibold mx-1 mb-1">{card.title}</div>
            <div className="flex item-center text-center text-[#cfcfcf] text-sm mx-5 mb-5">{card.desc}</div>
        </div>
    );
}

export default DownloadCard;
