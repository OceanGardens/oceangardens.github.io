import LandingPage from './landingPage';
import WavePage from './wavePage';
import TransmissionPage from './transmissionPage'
import {Helmet} from "react-helmet"
import React, {useState} from 'react';
import {Router, Route, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import CreditsPage from './creditsPage'
import CarouselPage from './CarouselPage';
import Page6 from './page6';
import Page7 from './page7';
import Page61 from './page61';
import Page62 from './page62';
import Page63 from './page63';


import GlobesPage from "./GlobesPage"
import InitialGlobePage from './InitialGlobePage';
import Page9 from './page9';
import Page8 from './page8'
import PreviewGlobesPage from './PreviewGlobesPage';

export default function Navigator(props){
    const location = useLocation();

    return <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path = '/' element = {<TransmissionPage setLandingPage = {props.setLandingPage} clicks = {props.clicks} setClicks = {props.setClicks}/>} />
                    <Route id='SAVEME' path = '/landingPage' element={<LandingPage/>} />
                    <Route path = '/page3' element={<Page3/>} />
                    <Route path = '/page4' element={<Page4/>} />
                    <Route path = '/page5' element={<Page5/>} />
                    <Route path = '/carousel' element={<CarouselPage/>} />
                    <Route path = '/page6' element={<Page6/>} />
                    <Route path = '/page7' element={<Page7/>} />
                    <Route path = '/landingPage' element={<LandingPage/>} />
                    <Route path = '/creditsPage' element={<CreditsPage/>} />
                    <Route path = '/wavePage' element={<WavePage/>} />
                    <Route path = '/initialGlobePage' element={<InitialGlobePage/>} />
                    <Route path = '/previewGlobesPage' element = {<PreviewGlobesPage/>} />
                    <Route path = '/globesPage' element={<GlobesPage/>} />
                    <Route path = '/page61' element={<Page61/>} />
                    <Route path = '/page62' element={<Page62/>} />
                    <Route path = '/page63' element={<Page63/>} />
                    <Route path = '/page8' element={<Page8/>}/>
                    <Route path = '/page9' element={<Page9/>} />
                </Routes>
           </AnimatePresence>
}