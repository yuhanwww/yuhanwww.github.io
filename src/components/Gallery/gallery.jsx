import React from 'react';
import './gallery.css';
import artworks from './data_artworks';
import digital from './data_digital';
import handicrafts from './data_handicrafts';

const Gallery = () => {
    return (
        <div className="grid-wrap">
            <div className="left-col">
                {
                    artworks.map(({name,description},index)=>(
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
            <div className="mid-col">
                {
                    digital.map(({name,description},index)=>(
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
            <div className="right-col">
                {
                    handicrafts.map(({name,description},index)=>(
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
    )
}

export default Gallery;