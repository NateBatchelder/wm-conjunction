import React from 'react';
import FilterContainer from 'react-filter';

const gallery = () => {
    const galleryItems = [
        { tag: 'nature', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg' },
        { tag: 'architecture', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(1).jpg' },
        { tag: 'food', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg' },
        { tag: 'architecture', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(2).jpg' },
        { tag: 'nature', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(114).jpg' },
        { tag: 'architecture', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(4).jpg' },
        { tag: 'architecture', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(6).jpg' },
        { tag: 'nature', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(115).jpg' },
        { tag: 'food', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(44).jpg' },
        { tag: 'architecture', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(5).jpg' },
        { tag: 'food', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(45).jpg' },
        { tag: 'food', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(46).jpg' },
        { tag: 'food', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(47).jpg' },
        { tag: 'nature', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(111).jpg' },
        { tag: 'architecture', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(3).jpg' },
        { tag: 'nature', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(112).jpg' }
    ];

    const gutterWidth = 15;
    const gutterHeight = 15;

    return (
        <div style={{ minHeight: '100vh' }}>
            <div>
                <FilterContainer gutterWidth={gutterWidth} gutterHeight={gutterHeight} categories={['nature', 'architecture', 'food']} >
                    {galleryItems.map(photo => (
                        <img key={photo.imgSrc} data-filter={photo.tag} src={photo.imgSrc} alt="" className="animated zoomIn faster" />
                    ))}
                </FilterContainer>
            </div>
        </div>
    );
};

export default gallery;