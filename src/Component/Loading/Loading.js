import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import './Loading.css';

const Loading = () => {
    return (
        <div className='loader'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#784BA0"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    );
};

export default Loading;