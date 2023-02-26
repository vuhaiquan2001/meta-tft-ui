import React from 'react';

function PopUpNotifyRight({ title, desc }) {
    return (
        <div className="hidden group-hover:flex flex-col items-start w-auto max-w-[200px] rounded-[8px] h-auto bg-[#222222] absolute right-[23%] top-[-9%] z-[10] p-2 text-center">
            <div className="text-base w-full text-start py-1 font-medium text-[#c8c8c8] border-b-[1px]">{title}</div>
            <div className="text-xs px-1 font-thin text-[#c8c8c8]">{desc}</div>
        </div>
    );
}

export default PopUpNotifyRight;
