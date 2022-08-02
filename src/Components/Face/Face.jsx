import React from 'react';
import "./Face.css";

const Face = () => {
    return (
        <div className='face'>
            <img className='img-face' src="https://media.male-extravaganza.com/wp-content/uploads/2013/03/Johnny-Depp-5.jpg" alt="face" />
            <div className='face-text'>
                <h3 className='face-title'>John Christopher Depp II</h3>
                <p className="face-sub"><strong>Date of Birth: </strong>born June 9, 1963</p>
                <p className="face-sub"><strong>Profession: </strong>American actor, producer, and musician</p>
            </div>
        </div>
    );
};

export default Face;