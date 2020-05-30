import React from 'react';
import Slideshow from 'react-slidez';

const slidesList = [
    require('../assets/1.jpg'),
    require('../assets/2.jpg')



];

const home = () => {
    return (
        <div>
            <div className = "Slides">
                <Slideshow
                    showIndex
                    autoplay
                    useDotIndex = {true}
                    showArrows = {true}
                    enableKeyboard = {false}
                    slideInterval={8000}
                    defaultIndex={0}
                    slides={slidesList}
                    effect={'left'}
                    height={'80%'}
                    width={'80%'}
                />
            </div>
        </div>
    );
}


export default home;