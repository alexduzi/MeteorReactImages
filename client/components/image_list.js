import React, { Component } from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
    { "title": 'Pen', "link": 'https://dummyimage.com/600/400' },
    { "title": 'Pine Tree', "link": 'https://dummyimage.com/600/400' },
    { "title": 'Mug', "link": 'https://dummyimage.com/600/400' }
];

const ImageList = ({ images }) => {
    const validImages = images.filter(image => !image.is_album);

    const RenderedImages = validImages.map((image, index) => {
        return <ImageDetail key={index} image={image} />
    });

    return (
            <ul className={'media-list list-group'}>
                {RenderedImages}
            </ul>
        );
};

export default ImageList;