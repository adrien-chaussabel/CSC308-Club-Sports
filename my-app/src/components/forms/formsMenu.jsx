import React from 'react';
import './forms.css';

const FormsMenu = () => (
  <div className="vertical-menu">
    <a href="#general">GENERAL INFO</a>
    <a href="#participant" className="active">PARTICIPANT FORMS</a>
    <a href="#clubSportsCouncil">CLUB SPORTS COUNCIL</a>
    <a href="#homeEvents">HOME EVENTS</a>
    <a href="#awayEvents">AWAY EVENTS</a>
    <a href=".">ACCIDENTS & INJURIES</a>
    <a href=".">FINANCIAL RESOURCES</a>
    <a href=".">COACHES & OFFICIALS</a>
    <a href=".">APPAREL & LICENSING</a>
  </div>
);

export default FormsMenu;
