import React from 'react'
import './style.css'
import { MdOutlineFileDownload} from 'react-icons/md';

const TopNav = ({downloadImage}) => {
  return (
    <nav className='navContainer'>
        <div className='navInner'>
            <div className="logo">Social <span>Post</span></div>
            <div className="downloadBtn" onClick={downloadImage}><MdOutlineFileDownload size={25}/>Download</div>
        </div>
    </nav>
  )
}

export default TopNav