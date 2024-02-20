import React from 'react';
import image0 from '../../assets/Potence/0.jpg';
import image1 from '../../assets/Potence/1.jpg';
import image2 from '../../assets/Potence/2.jpg';
import image3 from '../../assets/Potence/3.jpg';
import image4 from '../../assets/Potence/4.jpg';
import image5 from '../../assets/Potence/5.jpg';
import image6 from '../../assets/Potence/6.jpg';

const Potence = ({ errorCount }) => {
    const images = [
        image0,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
    ];

    const potenceImage = errorCount <= images.length ? images[errorCount - 1] : null;

    return (
        <div className="potence">
            {potenceImage && <img src={potenceImage} alt={`Potence ${errorCount}`} />}
        </div>
    );
};

export default Potence;
