import React from 'react'
import './ImageSection.scss'
import Image from '../.././../assets/images/signup.svg'
function ImageSection() {
    return (
        <div className='imagesection-contaienr'>
            <img src={Image} alt="" />
        </div>
    )
}

export default ImageSection
