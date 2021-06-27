import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import './ScrollToTop.css'
const ScrollToTop = () => {

    const { y : pageYOffeset} = useWindowScroll();
    const [visiable, setVisible] =  useState(false);

    useEffect(() => {
        if(pageYOffeset > 300){
            setVisible(true);
        }else{
            setVisible(false);
        }
        
    }, [pageYOffeset])

    const scroll = () => window.scroll({
        top : 0,
        behavior : 'smooth'
    })

    return (
        <div className = {visiable?'scroll-to-top':'scroll-to-top visiable'} onClick = {scroll} >
            <i className="fas fa-chevron-up"></i>
        </div> 
    )
}

export default ScrollToTop
