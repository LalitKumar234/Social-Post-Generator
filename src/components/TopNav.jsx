import React from 'react'
import './style.css'
import { MdOutlineFileDownload } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';

const TopNav = ({ downloadImage }) => {
  return (
    <nav className='navContainer'>
      <div className='navInner'>
        <div className="logo">Social <span>Post</span>
          <a href="https://github.com/LalitKumar234/Social-Post-Generator" target='_blank'>
            <AiFillGithub color='black'/>
          </a>
        </div>
        <div className="downloadBtn" onClick={downloadImage}><MdOutlineFileDownload size={25} />Download</div>
      </div>
    </nav>
  )
}

export default TopNav