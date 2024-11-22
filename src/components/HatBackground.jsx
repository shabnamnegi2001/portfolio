import React from 'react';
import {HatA, HatB, HatC} from './Hats';

const HatBackground = () => {
    return (
        <div className='absolute w-full h-full' style={{zIndex : 1}}>
            {/* <HatA sx={{transform : 'translate(-200px, 120px)'}} /> */}
            {/* <HatB sx={{transform : 'translate(-200px, 120px)'}} /> */}
            {/* <HatC sx={{transform : 'translate(100px, -20px)'}} /> */}
            <HatB sx={{transform : 'translate(2940px, 1520px)'}} />
            <HatA sx={{transform : 'translate(1650px, 2170px)'}} />
            <HatC sx={{transform : 'translate(1370px, 1230px)'}} />
            <HatB sx={{transform : 'translate(360px, 1980px)'}} />
            <HatA sx={{transform : 'translate(1700px, -260px)'}} />
            <HatC sx={{transform : 'translate(100px, 120px)'}} />
        </div>
    );
}

export default HatBackground;
