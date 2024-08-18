import React,{useRef, useState, useEffect} from 'react';
import './gallery.css';
import artworks from './data_artworks';
import digital from './data_digital';
import handicrafts from './data_handicrafts';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import imagesLoaded from 'imagesloaded';

const preloadImages = (selector) => {
    return new Promise((resolve) => {
        imagesLoaded(
            document.querySelectorAll(selector),
            {background:true},
            resolve
        )
    })
};

const Gallery = () => {
    const ref = useRef(null);
    const leftColRef = useRef(null);
    const midColRef = useRef(null);
    const rightColRef = useRef(null);

    const scroll = useRef({
        cache: 0,
        current: 0,
    });

    useEffect (() => {
        const scrollElement = new LocomotiveScroll({
            el: ref.current,
            smooth: true,
            smartphone: { 
                smooth: true, 
            },
            getDirection: true,
            getSpeed: true,
        });

        scrollElement.on('scroll',(obj)=>{
            scroll.current.current = obj.scroll.y;
            const distance = scroll.current.current - scroll.current.cache;
            scroll.current.cache = scroll.current.current;

            leftColRef.current.style.transform = `skewY(${(distance/50)}deg)`;
            midColRef.current.style.transform = `skewY(${(-distance/50)}deg)`;
            rightColRef.current.style.transform = `skewY(${(distance/50)}deg)`;
        });

        Promise.all([preloadImages(".grid-item-media")]) .then(()=>{
            scrollElement.update();
        });
    },[]);

    return (
        <div className="main-container" 
        data-scroll-container
        ref={ref}>
            <div className="grid-wrap">
                <div className="left-col" ref={leftColRef}>
                    {
                        [...artworks].map(({name,description},index)=>(
                            <div className="grid-item">
                                <img
                                    src={require('../../assets/gallery/artworks/' +
                                    name +
                                    '.png')}
                                    className="grid-item-media"
                                    alt={name}
                                />
                                <p className='grid-item-description'>{description}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="mid-col" 
                    data-scroll 
                    data-scroll-speed='-20'>
                    <div ref={midColRef} >
                    {
                        [...digital].map(({name,description},index)=>(
                            index < 29 ? (
                                <div className="grid-item">
                                    <img
                                        src={require('../../assets/gallery/digital/' +
                                        name +
                                        '.png')}
                                        className="grid-item-media"
                                        alt={name}
                                    />
                                    <p className='grid-item-description'>{description}</p>
                                </div>
                            ) : index < 32 ? (
                                <div className="grid-item">
                                    <img
                                        src={require('../../assets/gallery/digital/' +
                                        name +
                                        '.gif')}
                                        className="grid-item-media"
                                        alt={name}
                                    />
                                    <p className='grid-item-description'>{description}</p>
                                </div>
                            ) : (
                                <div className="grid-item">
                                    <img
                                        src={require('../../assets/gallery/digital/' +
                                        name +
                                        '.svg')}
                                        className="grid-item-media"
                                        alt={name}
                                    />
                                    <p className='grid-item-description'>{description}</p>
                                </div>
                            )
                        ))
                    }
                    </div>
                </div>
                <div className="right-col" ref={rightColRef}>
                    {
                        [...handicrafts].map(({name,description},index)=>(
                            <div className="grid-item">
                                <img
                                    src={require('../../assets/gallery/handicrafts/' +
                                    name +
                                    '.png')}
                                    className="grid-item-media"
                                    alt={name}
                                />
                                <p className='grid-item-description'>{description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>           
        </div>
    )
}

export default Gallery;