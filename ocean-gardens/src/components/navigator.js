import LandingPage from './landingPage';
import WavePage from './wavePage';
import TransmissionPage from './transmissionPage'
import {Helmet} from "react-helmet"
import React, {useState} from 'react';
import {Router, Route, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

export default function Navigator(props){
    const location = useLocation();

    return <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path = '/' element = {<TransmissionPage setLandingPage = {props.setLandingPage} clicks = {props.clicks} setClicks = {props.setClicks}/>} />
                    <Route path = '/landingPage' element={<LandingPage/>} />
                    <Route path = '/wavePage' element={<WavePage/>} />
                </Routes>
           </AnimatePresence>
}