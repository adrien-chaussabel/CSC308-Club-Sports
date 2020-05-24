import React from 'react';
import './sports.css'; 



class FormsPage extends React.Component {
    render() {
        return <div>
            <SportsTitle2/>
        </div>
    }
}


class SportsTitle2 extends React.Component {
    render() {
        return <div className="sportstitle">
            <h3>CAL POLY SWIM CLUB FORMS</h3>
        </div>
    }
}
export default FormsPage;