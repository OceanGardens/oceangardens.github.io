import LandingPage from './landingPage';
import ContentPage from './contentPage';
import TransmissionPage from './transmissionPage'
import {Helmet} from "react-helmet"
import React, {useState} from 'react';

export default function Navigator(props){
    if(props.LandingPage){ 
        return <LandingPage/>
    }
    return <TransmissionPage setLandingPage = {props.setLandingPage} clicks = {props.clicks} setClicks = {props.setClicks}/>
}