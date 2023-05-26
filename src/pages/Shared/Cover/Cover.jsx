import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, heading, subHeading }) => {
    return (
        <Parallax
            blur={{ min: -80, max: 80 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-100}
        >
            <div className="hero min-h-screen">
                <div className="hero-overlay h-80 w-3/4 bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl uppercase font-semibold">{heading}</h1>
                        <p className="mb-5 uppercase">{subHeading}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;