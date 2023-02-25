import React from 'react';

function PageHeader() {
    return (
        <div className="flex flex-row relative justify-center lg:justify-between max-w-[1140px] w-full mt-6 px-3">
            <div className="flex h-[225px] max-h-[calc(100%-24px)] w-full lg:w-96 rounded-md bg-[#27282b] bottom-0 z-0 justify-center items-center">
                <img
                    className="h-24 opacity-10 absolute pointer-events-none"
                    src="https://www.metatft.com/logo.svg"
                    alt="logo"
                />
            </div>
            <div className="hidden lg:flex flex-1 items-center justify-center flex-col p-2 relative h-[225px] ml-2">
                <div className="flex items-center justify-center flex-col text-center z-20">
                    <div className="mb-2 text-base font-medium text-[#e6e6e6] drop-shadow-lg">
                        Download the free MetaTFT in-game App for more features and insights
                    </div>
                    <div className=" text-base font-medium text-[#cbb46c] drop-shadow-lg">Find Out More...</div>
                    <div className="mt-2 text-sm font-light text-[#e6e6e6]">
                        Join over 100,000 people using the app to improve their TFT gameplay!
                    </div>
                </div>
                <img
                    className="bg-cover mix-blend-soft-light max-w-full w-full  h-full rounded-md opacity-60 absolute top-0 object-cover z-0"
                    src="https://www.metatft.com/cdn-cgi/image/width=700,format=auto/https://cdn.metatft.com/file/metatft/images/dragon_bg.png"
                    alt="background page header"
                />
            </div>
        </div>
    );
}

export default PageHeader;
