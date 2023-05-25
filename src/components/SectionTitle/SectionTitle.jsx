import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='text-center py-16'>
            <p className='text-warning italic text-xl'> ---- {subHeading} ----</p>
            <div className="divider w-96 mx-auto"></div>
            <h2 className="text-4xl uppercase">{heading}</h2>
            <div className="divider w-96 mx-auto"></div>
        </div>
    );
};

export default SectionTitle;