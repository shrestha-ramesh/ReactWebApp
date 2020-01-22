import React from 'react';
import Ramesh from './Images/Ramesh.jpeg';
import One from './Images/1.jpg';
import Two from './Images/2.jpg';
import Three from './Images/3.jpg';
import Four from './Images/4.jpg';
import Five from './Images/5.jpg';
import Six from './Images/6.jpeg';
import Seven from './Images/7.jpg';
import Eight from './Images/8.jpg';
import Nine from './Images/9.jpg';
import Ten from './Images/10.jpg';
function Photos(){
    return(
        <div style={{"textAlign":"center"}}>
            <img src={One} style={{"width":"70%"}}/>
            <img src={Two} style={{"width":"70%"}}/>
            <img src={Three} style={{"width":"70%"}}/>
            <img src={Four} style={{"width":"70%"}}/>
            <img src={Five} style={{"width":"70%"}}/>
            <img src={Six} style={{"width":"70%"}}/>
            <img src={Seven} style={{"width":"70%"}}/>
            <img src={Eight} style={{"width":"70%"}}/>
            <img src={Nine} style={{"width":"70%"}}/>
            <img src={Ten} style={{"width":"70%"}}/>
            <img src={Ramesh} style={{"width":"70%"}}/>
        </div>
    );
}
export default Photos;