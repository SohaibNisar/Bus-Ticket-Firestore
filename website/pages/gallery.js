import React from 'react';
import { MDBGallery, MDBGalleryList, MDBMask, MDBBox } from 'mdbreact';
import Nav from '../components/navbar';
import Footer from '../components/footer';
import image1 from '../../data/images/gallery/g1.jpg';
import image2 from '../../data/images/gallery/g2.jpg';
import image3 from '../../data/images/gallery/g3.jpg';
import image4 from '../../data/images/gallery/g4.jpg';
import image5 from '../../data/images/gallery/g5.jpg';
import image6 from '../../data/images/gallery/g6.jpg';
import image7 from '../../data/images/gallery/g7.jpg';
import image8 from '../../data/images/gallery/g8.jpg';
import image9 from '../../data/images/gallery/g9.jpg';
import image10 from '../../data/images/gallery/g10.jpg';

function Gallery() {
    const dataImg = [
        {
            img: image4,
            cols: 1,
            title: 'image4',
        },
        {
            img: image2,
            cols: 2,
            title: 'image2',
        },
        {
            img: image3,
            cols: 1,
            title: 'image3',
        },
        {
            img: image1,
            cols: 2,
            title: 'image1',
        },
        {
            img: image5,
            cols: 2,
            title: 'image5',
        },

        {
            img: image6,
            cols: 1,
            title: 'image6',
        },
        {
            img: image7,
            cols: 2,
            title: 'image7',
        },
        {
            img: image8,
            cols: 1,
            title: 'image8',
        },
        {
            img: image9,
            cols: 2,
            title: 'image9',
        },
        {
            img: image10,
            cols: 2,
            title: 'image10',
        }
    ];

    return (
        <div style={{ marginTop: 54 }}>
            <Nav />
            <div style={{ padding: 50 }}>
                <MDBGallery cols={4}>
                    {dataImg.map((x, i) => {
                        return (
                            <MDBGalleryList
                                key={i}
                                cols={x.cols}
                                titleClasses='view overlay'
                            >
                                <img src={x.img} alt={x.title} />
                                <MDBMask className='flex-center' overlay='blue-light'>
                                    <MDBBox
                                        tag='p'
                                        color='white'
                                        style={{
                                            position: 'absolute',
                                            top: '50%'
                                        }}
                                    >
                                    </MDBBox>
                                </MDBMask>
                            </MDBGalleryList>
                        );
                    })}
                </MDBGallery>
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;