import React from 'react'
import { socialIcons } from '../data/data'
import { gradientBackground } from '../data/bg'
import { MdVerified } from 'react-icons/md';

const MainComponent = ({userDetails, divRef}) => {
    const { name, userName, profilePic, socialPlatform, content, selectBg, rounded  } = userDetails

    function getGradientById(id) {
        return gradientBackground.find(item => item.id === id)?.gradient || null;
    }
    function getIconsById(id){
        return socialIcons.find(item => item.id === id)?.icon || null;
    }
    function getFormattedDateTime() {
        const options = {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        };
      
        const currentDate = new Date();
        return currentDate.toLocaleString('en-US', options);
      }
    return (
        <div className='home-container'>
            <div className="home-inner">
                <div ref={divRef} className='PreviewArea' style={{backgroundImage: `${getGradientById(selectBg)}`}}>
                    <div className='snippet' style={{borderRadius: `${rounded}px`}}>
                        <div className='snippetHeader'>
                            <div className='leftContent'>
                                <img src={profilePic} alt="" />
                                <div className='snippetName'>
                                    <h3>{name} <MdVerified size={15} color='#3797f0'/></h3>
                                    <p>@{userName}</p>
                                </div>

                            </div>
                            <div className='rightContent'>
                           { getIconsById(socialPlatform)}
                                
                            </div>
                        </div>
                        <pre className='snippetContent'>
                            {content}
                        </pre>
                        <div className='snippetFooter'>
                            <p>{getFormattedDateTime()}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MainComponent