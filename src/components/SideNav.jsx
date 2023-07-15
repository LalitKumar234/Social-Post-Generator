import React, { useState } from 'react'
import './style.css'
import { BiRename, BiUserPin, BiUserPlus } from 'react-icons/bi';
import { TiSocialTwitter } from 'react-icons/ti';
import { PiTextT, PiSelectionBackgroundBold } from 'react-icons/pi';
import { RiRoundedCorner } from 'react-icons/ri';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { socialIcons } from '../data/data';
import { gradientBackground } from '../data/bg';

const SideNav = ({ setUserDetails, userDetails }) => {

    const [show, setShow] = useState(6)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            console.log(fileReader.result)
            setUserDetails({ ...userDetails, profilePic: fileReader.result })
        };
        fileReader.readAsDataURL(file);
    };
    return (
        <div className='sideNavContainer'>
            <ul className='navItems'>
                <li>
                    <div
                        className='navItem'
                        onClick={() => setShow(1)}
                    >
                        <div className='navTitle'>
                            <BiRename size={25} />
                            Name
                        </div>
                        <MdOutlineKeyboardArrowDown size={25} />
                    </div>
                    {
                        show === 1 && <div className='innerNavItems'>
                            <input
                                className="inputField"
                                type="text"
                                value={userDetails.name}
                                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                            />
                        </div>
                    }

                </li>
                <li>
                    <div
                        onClick={() => setShow(2)}
                        className='navItem'
                    >
                        <div className='navTitle'>
                            <BiUserPin size={25} />User Name
                        </div>
                        <MdOutlineKeyboardArrowDown size={25} />
                    </div>
                    {
                        show === 2 && <div className='innerNavItems'>
                            <input
                                className="inputField"
                                type="text"
                                value={userDetails.userName}
                                onChange={(e) => setUserDetails({ ...userDetails, userName: e.target.value })}
                            />

                        </div>
                    }

                </li>
                <li>
                    <div
                        className='navItem'
                        onClick={() => setShow(3)}
                    >
                        <div className='navTitle'>
                            <BiUserPlus size={25} />Profile Pic
                        </div>
                        <MdOutlineKeyboardArrowDown size={25} />
                    </div>
                    {
                        show === 3 && <div className='innerNavItems'>
                            <input type="file" onChange={handleFileChange} />
                        </div>
                    }

                </li>
                <li>
                    <div className='navItem'
                        onClick={() => setShow(4)}
                    >
                        <div className='navTitle'>
                            <TiSocialTwitter size={25} />
                            Select Platform
                        </div>
                        <MdOutlineKeyboardArrowDown size={25} />
                    </div>
                    {
                        show === 4 && <ul className='dropDown'>
                            {
                                socialIcons.map((icon) =>
                                    <li 
                                    className={`${userDetails.socialPlatform === icon.id && 'active'}`}
                                    onClick={() => setUserDetails({ ...userDetails, socialPlatform: icon.id })}>
                                        {icon.name}
                                    </li>)
                            }
                        </ul>
                    }

                </li>
                <li>
                    <div
                        className='navItem'
                        onClick={() => setShow(5)}
                    >
                        <div className='navTitle'>
                            <PiTextT size={25} />
                            What's in your mind
                        </div>
                        <MdOutlineKeyboardArrowDown size={25} />
                    </div>
                    {
                        show === 5 && <div className='innerNavItems'>
                            <textarea
                                value={userDetails.content}
                                onChange={(e) => setUserDetails({ ...userDetails, content: e.target.value })}
                            ></textarea>
                        </div>
                    }

                </li>
                <li>
                    <div
                        className='navItem'
                        onClick={() => setShow(6)}
                    >
                        <div className='navTitle'>
                            <PiSelectionBackgroundBold size={25} />
                            Select Bg
                        </div>
                        <MdOutlineKeyboardArrowDown size={25} />
                    </div>
                    {
                        show === 6 && <div className='bgColors'>
                            {
                                gradientBackground.map((bg) =>
                                    <div
                                        onClick={() => setUserDetails({ ...userDetails, selectBg: bg.id })}
                                        key={bg.id}
                                        className='bgColor'
                                        style={{ backgroundImage: `${bg.gradient}` }}
                                    ></div>
                                )
                            }
                        </div>
                    }

                </li>
                <li>
                    <div
                        className='navItem'
                        onClick={() => setShow(7)}
                    >
                        <div className='navTitle'>
                            <RiRoundedCorner size={25} />Rounded Corners
                        </div>
                        <MdOutlineKeyboardArrowDown size={25} />
                    </div>
                    {
                        show === 7 && <div className='innerNavItems'>
                            <input
                                type="range"
                                value={userDetails.rounded}
                                min={0}
                                max={25}
                                onChange={(e) => setUserDetails({ ...userDetails, rounded: e.target.value })}
                            />
                        </div>
                    }

                </li>
            </ul>
        </div>
    )
}

export default SideNav