import React from 'react';

function PopUpNotify({ title, desc }) {
    return (
        <div className="hidden group-hover:block w-auto min-w-[200px] rounded-[8px] h-auto bg-[#26282c] absolute top-[120%] right-[50%] translate-x-1/2 z-50 p-2 text-center">
            <div className="text-base py-1 font-medium text-[#c8c8c8] border-b-[1px]">{title}</div>
            <div className="text-xs px-1 font-thin text-[#c8c8c8]">{desc}</div>
            <span className=" border-8 border-t-[transparent!important] border-l-[transparent!important] border-r-[transparent!important] border-[#26282c] absolute top-[-16px] left-[calc(50%-14px)] z-10"></span>
        </div>
    );
}

export default PopUpNotify;
