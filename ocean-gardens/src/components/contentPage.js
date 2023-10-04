import "../styles/contentPage.css"
import React, { useEffect } from 'react';

function ContentPage() {
    
    useEffect(() => {
        let wave1 = document.getElementById('wave1');
        let wave2 = document.getElementById('wave2');
        let wave3 = document.getElementById('wave3');
        let wave4 = document.getElementById('wave4');
                
        window.addEventListener('scroll', function() {
        let value = window.scrollY;
        wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
        wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
        wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
        wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
        })
    }, []);

    return(
        <section>
            <div id="wave1" className="wave"></div>
            <div id="wave2" className="wave"></div>
            <div id="wave3" className="wave"></div>
            <div id="wave4" className="wave"></div>
        </section>
    )
}

export default ContentPage;