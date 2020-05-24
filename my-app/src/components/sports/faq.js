import React from 'react';
import './sports.css'; 



class FAQPage extends React.Component {
    render() {
        return <div>
            <SportsTitle2/>
        </div>
    }
}


class SportsTitle2 extends React.Component {
    render() {
        return <div className="sportstitle">
            <h3>CAL POLY SWIM CLUB FAQ</h3>
        </div>
    }
}
export default FAQPage;