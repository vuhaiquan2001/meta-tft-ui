import React from 'react';

function PopUpNotifyRight({ title, desc }) {
    return (
        <div className="hidden group-hover:block w-auto min-w-[200px] rounded-[8px] h-auto bg-[#26282c] absolute top-[120%] right-[50%] translate-x-1/2 z-10 p-2 text-center">
            <div className="text-base py-1 font-medium text-[#c8c8c8] border-b-[1px]">{title}</div>
            <div className="text-xs px-1 font-thin text-[#c8c8c8]">{desc}</div>
        </div>
    );
}

export default PopUpNotifyRight;
