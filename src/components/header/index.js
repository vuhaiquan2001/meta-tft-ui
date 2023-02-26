import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navMenu } from '../navbarItem';
import PopUpNotify from '../popupnotify';
import { FiMenu } from 'react-icons/fi';

function Header() {
    const [currentName, setCurrentName] = useState('');
    const [openMenu, setOpenMenu] = useState(false);
    const [opensubMenu, setOpenSubMenu] = useState(false);
    const [pathName, setPathName] = useState('');
    const [currentChild, setCurrentChild] = useState('');

    const handleActive = (title) => {
        setCurrentChild(title);
        setCurrentName('');
        setPathName('');
    };
    const handleCurrentName = (title) => {
        setOpenSubMenu(!opensubMenu);
        setCurrentName(title);
        setPathName('');
        setCurrentChild('');
    };

    useEffect(() => {
        setPathName(window.location.pathname);
    }, []);

    return (
        <header className="flex relative w-full justify-center bg-primary h-[60px] px-[16px]">
            <div className="flex  justify-between w-full items-center xl:max-w-[1140px] xl:px-[15px] xl:mx-auto">
                <Link to="/" className="mr-[10px] cursor-pointer">
                    <img src="https://www.metatft.com/logo.svg" alt="Meta TFT" width={'45px'} />
                </Link>
                <a
                    className="no-underline text-center text-[2rem] text-[#e6e6e6!important] leading-tight font-semibold cursor-pointer"
                    href="/"
                >
                    MetaTFT
                </a>
                <div
                    onClick={() => setOpenMenu(!openMenu)}
                    className=" border-[1px] border-[#393939] rounded lg:hidden z-50"
                >
                    <FiMenu className="text-[#e6e6e6] text-3xl m-2" />
                </div>

                <div className="hidden lg:flex flex-1 grow justify-end items-center h-full">
                    <div className="h-full">
                        <div className="flex h-full">
                            {navMenu.map((nav, index) => (
                                <div key={index}>
                                    {nav.url ? (
                                        <Link
                                            to={nav.url}
                                            onClick={() => handleCurrentName(nav.name)}
                                            className={`flex items-center text-[#e6e6e6!important] hover:bg-sub font-normal h-full  ${
                                                currentName === nav.name || pathName === nav.url
                                                    ? 'border-b-2 border-[#cbb46c]'
                                                    : ''
                                            }`}
                                        >
                                            <div className="px-[16px] py-[21px] cursor-pointer">{nav.name}</div>
                                        </Link>
                                    ) : (
                                        <div
                                            onClick={() => handleCurrentName(nav.name)}
                                            key={index}
                                            className={`flex items-center h-full relative text-[#d2d2d2] hover:bg-sub font-normal ${
                                                currentName === nav.name ||
                                                nav.children.find((item) => item.title === currentChild)
                                                    ? 'border-b-2 border-[#cbb46c]'
                                                    : ''
                                            }`}
                                        >
                                            <div className="peer flex items-center px-3 py-2 h-full cursor-pointer">
                                                {nav.name}
                                            </div>
                                            <div className="hidden shadow-[5px_5px_9px_0px_rgba(0,0,0,0.5)] min-w-[160px] w-max rounded peer-hover:flex hover:flex flex-col absolute bg-[#272728] top-[60px] left-0 z-50">
                                                {nav.children.map((obj, index) => (
                                                    <div
                                                        onClick={() => handleActive(obj.title)}
                                                        key={index}
                                                        className=" w-full h-full hover:bg-[#39393a] border-b border-zinc-700"
                                                    >
                                                        <Link
                                                            className="block p-[15px] font-light cursor-pointer"
                                                            to={obj.url}
                                                        >
                                                            {obj.title}
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center items-center group pl-[10px] h-full relative">
                        <button
                            onClick={handleActive}
                            className="bg-[#be0505] hover:bg-gray text-[#e6e6e6!important] font-medium py-2 px-4 rounded-lg inline-flex items-center"
                        >
                            <Link to="/download" className="no-underline">
                                Download App
                            </Link>
                        </button>
                        <PopUpNotify
                            title="Download MetaTFT App"
                            desc="Get more powerful features with the in-game app"
                        />
                    </div>
                    <div className="flex justify-center items-center h-full pl-[10px]">
                        <div className="flex justify-center items-center  h-full relative group">
                            <Link to="/patreon">
                                <img
                                    className="m-[2px]"
                                    src="https://www.metatft.com/icons/Patreon_120.png"
                                    alt="Meta TFT"
                                    width={'26px'}
                                />
                            </Link>
                            <PopUpNotify
                                title="Support us on Patreon"
                                desc="Remove ads, unlock more features and support the site's development"
                            />
                        </div>
                        <div className="flex justify-center items-center h-full relative group">
                            <a href="https://discord.com/invite/RqN3qPy">
                                <img
                                    className="my-[2px] py-[2px]  mr-[4px] ml-[2px]"
                                    src="https://www.metatft.com/icons/Discord.svg"
                                    target="_blank"
                                    alt="Meta TFT"
                                    width={'26px'}
                                />
                            </a>
                            <PopUpNotify
                                title="Join the MetaTFT Discord"
                                desc="Join the metaTFT community - share strategies, make feature request, get help and show off your climb"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            <div
                className={`absolute top-[100%] w-full flex-col px-[16px] bg-[#222222] z-[999]
                ${openMenu ? 'flex' : 'hidden'}`}
            >
                <div className="flex flex-col h-full ">
                    {navMenu.map((nav, index) => (
                        <div key={index} className="w-full">
                            {nav.url ? (
                                <Link
                                    to={nav.url}
                                    onClick={() => handleCurrentName(nav.name)}
                                    className={`flex items-center text-[#e6e6e6!important] active:bg-sub bg-[#222222] font-normal h-full  ${
                                        currentName === nav.name || pathName === nav.url
                                            ? 'border-b-2 border-[#cbb46c]'
                                            : ''
                                    }`}
                                >
                                    <div className="px-[16px] py-[21px] cursor-pointer w-full border-b-[1px] border-[#7c7c7b]">
                                        {nav.name}
                                    </div>
                                </Link>
                            ) : (
                                <div
                                    onClick={() => handleCurrentName(nav.name)}
                                    key={index}
                                    className={`flex items-center h-full relative text-[#d2d2d2] active:bg-sub font-normal ${
                                        currentName === nav.name ||
                                        nav.children.find((item) => item.title === currentChild)
                                            ? 'border-b-2 border-[#cbb46c]'
                                            : ''
                                    }`}
                                >
                                    <div className="flex px-[16px] py-[21px] items-center h-full w-full cursor-pointer border-b-[1px] border-[#7c7c7b]">
                                        {nav.name}
                                    </div>
                                    <div
                                        className={`${
                                            opensubMenu && currentName === nav.name ? 'flex' : 'hidden '
                                        } shadow-[5px_5px_9px_0px_rgba(0,0,0,0.5)] min-w-[160px] w-max rounded  flex-col absolute bg-[#272728] top-[60px] left-0 z-50`}
                                    >
                                        {nav.children.map((obj, index) => (
                                            <div
                                                onClick={() => handleActive(obj.title)}
                                                key={index}
                                                className=" w-full h-full hover:bg-[#39393a] border-b border-zinc-700"
                                            >
                                                <Link className="block p-[15px] font-light cursor-pointer" to={obj.url}>
                                                    {obj.title}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex justify-start items-center h-full pl-[10px] my-[5px]">
                        <div className="flex justify-center items-center  h-full relative group">
                            <Link to="/patreon">
                                <img
                                    className="m-[2px]"
                                    src="https://www.metatft.com/icons/Patreon_120.png"
                                    alt="Meta TFT"
                                    width={'26px'}
                                />
                            </Link>
                        </div>
                        <div className="flex justify-center items-center h-full relative group">
                            <a href="https://discord.com/invite/RqN3qPy">
                                <img
                                    className="my-[2px] py-[2px]  mr-[4px] ml-[2px]"
                                    src="https://www.metatft.com/icons/Discord.svg"
                                    target="_blank"
                                    alt="Meta TFT"
                                    width={'26px'}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
