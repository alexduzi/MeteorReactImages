import React, { Component } from 'react';
import ImageScore from './image_score';

const ImageDetail = ({ image }) => {
    const { title, link, description, ups, downs } = image;
    
    return (
            <li className={'media list-group-item'}>
                <div className={'media-left'}>
                    <img src={link} />
                </div>
                <div className={'media-body'}>
                    <h4 className={'media-heading'}>
                        {title}
                    </h4>
                    <p>{description}</p>
                    <ImageScore ups={ups} downs={downs} />
                </div>
            </li>
        );
};

export default ImageDetail;