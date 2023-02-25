import React from 'react';
import { getStartedCard } from './cardInfo';

function StartedCard() {
    return (
        <div className="flex flex-row flex-wrap items-center justify-center">
            {getStartedCard.map((card, index) => (
                <div
                    key={index}
                    className="flex flex-col pt-5 items-center bg-[#222326] rounded-lg min-w-[200px] w-1/4 h-fit"
                >
                    <img
                        className={`h-[70px] w-auto m-[15px]
                    ${card.title === 'Join us on Discord' ? 'h-[48px!important] w-auto m-[26px!important]' : ''}
                    ${card.title === 'Support on Patreon' ? 'h-[60px!important] w-auto m-[20px!important]' : ''}
                    ${card.title === 'Download the App' ? 'h-[76px!important] w-auto m-[12px!important]' : ''}
                    `}
                        src={card.img}
                        alt="Happy"
                    />
                    <div className="flex item-center text-[#e6e6e6] text-lg text-center font-semibold mx-1 mb-1 hover:text-[#fff] cursor-pointer">
                        {card.title}
                    </div>
                    <div className="flex item-center text-center text-[#cfcfcf] text-sm mx-5 mb-5 hover:text-[#fff] cursor-pointer">
                        {card.desc}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StartedCard;
