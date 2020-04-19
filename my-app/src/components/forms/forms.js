import React from 'react';
import '../../app.css';

class ResourceTitle extends React.Component {
    render() {
        return <div className="title2">
            <h3>RESOURCES AND FORMS</h3>
        </div>
    }
}

class FormsPage extends React.Component {
    render() {
        return <div className="forms">
            <ResourceTitle />
            <h3>Club Sports strives to make running your club as streamlined as possible. This page is an <br />
                exellent resource for all the information and forms you need. If you have any additional <br />
                questions, please contact the Club Sports Advisor.</h3>
            <div id="greenform1" ></div>
            <h2>PARTICIPANT FORMS</h2>
            <label>Participant Release Form (PDF)</label><br />
            <label>Risk and Release Form (PDF)</label><br />
            <label>Medical Insurance Form (PDF)</label>
            <div id="greenform2" ></div>
            <h2>HOME EVENT FORMS</h2>
            <label>Facility Request Form (DOC)</label><br />
            <label>Equipment Agreement (DOC)</label>
            <div id="greenform3" ></div>
            <h2>AWAY EVENT FORMS</h2>
            <label>Club Sport Travel Roster (PDF)</label><br />
            <label>Reimbursement Request (DOC)</label>
        </div>
    }
}

export default FormsPage;