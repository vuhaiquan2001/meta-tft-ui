import React from 'react';

function ImgFirstEnd({ card, index }) {
    return (
        <div
            key={index}
            className="flex flex-col flex-auto w-full justify-between items-center bg-[#222326] rounded-lg lg:min-h-full lg:max-w-[32%] mb-[20px]"
        >
            <div className="flex flex-col items-center w-full h-full mt-[10px]">
                <div className="flex item-center text-center text-[#e6e6e6] text-lg font-semibold mx-1 mb-1">
                    {card.title}
                </div>
                <div className="flex item-center text-center text-[#cfcfcf] text-sm mx-5">{card.desc}</div>
            </div>
            <img className="h-[180px] w-auto mt-[5px] mb-0" src={card.img} alt="Happy" />
        </div>
    );
}

export default ImgFirstEnd;
