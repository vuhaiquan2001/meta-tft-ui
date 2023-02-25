import React from 'react';

function ImgFirstCard({ card, index }) {
    return (
        <div
            key={index}
            className="flex flex-row w-full mb-5 lg:mb-0 lg:flex-col flex-auto items-center bg-[#222326] rounded-lg lg:min-h-full lg:max-w-[32%] h-fit"
        >
            <img className="h-32 w-32 my-5 ml-3 lg:my-5" src={card.img} alt="Happy" />
            <div className="h-full w-full flex flex-col justify-center items-center">
                <div className="flex item-center text-center justify-center text-[#e6e6e6] text-lg font-semibold mt-2 mx-1 mb-1">
                    {card.title}
                </div>
                <div className="flex item-center  text-center text-[#cfcfcf] text-sm mx-5 mb-5">{card.desc}</div>
            </div>
        </div>
    );
}

export default ImgFirstCard;
