import LandingPage from './landingPage';
import WavePage from './wavePage';
import TransmissionPage from './transmissionPage'
import {Helmet} from "react-helmet"
import React, {useState} from 'react';
import {Router, Route, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import GlobesPage from "./GlobesPage"
import InitialGlobePage from './InitialGlobePage';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import CarouselPage from './CarouselPage';

export default function Navigator(props){
    const location = useLocation();

    return <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path = '/' element = {<TransmissionPage setLandingPage = {props.setLandingPage} clicks = {props.clicks} setClicks = {props.setClicks}/>} />
                    <Route path = '/wavePage' element={<WavePage/>} />
                    <Route path = '/initialGlobePage' element={<InitialGlobePage/>} />
                    <Route path = '/globesPage' element={<GlobesPage/>} />
                    <Route id='SAVEME' path = '/landingPage' element={<LandingPage/>} />
                    <Route path = '/page3' element={<Page3/>} />
                    <Route path = '/page4' element={<Page4/>} />
                    <Route path = '/page5' element={<Page5/>} />
                    <Route path = '/carousel' element={<CarouselPage/>} />
                </Routes>
           </AnimatePresence>
}