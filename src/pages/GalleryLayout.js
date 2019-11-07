import React from 'react';
import GalleryHeader from '../Components/GalleryHeader/GalleryHeader';

export const GalleryLayout = props => (
    <React.Fragment>
        <GalleryHeader />
        {props.children}
    </React.Fragment>
)