import React, { useState } from 'react';

const GlobeHeader = ({ setSelectedBanner }) => {
    const changeBanner = (newBanner) => {
        setSelectedBanner(newBanner);
    };
    return (
    <div className="header">
        <button onClick={() => changeBanner('GlobePage')}> Filoplancton </button>
        <button onClick={() => changeBanner('GlobePage')}>Teste 2</button>
        <button onClick={() => changeBanner('GlobePage')}>Banner 3</button>
    </div>
    );
}

export default GlobeHeader;
