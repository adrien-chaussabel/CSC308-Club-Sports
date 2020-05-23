import React from 'react';
import '../../app.css';
import ResourceTitle from './resourceTitle';

const FormsPage = () => (
  <div className="forms">
    <ResourceTitle />
    <h3>
      Club Sports strives to make running your club as streamlined as possible. This page is an
      <br />
      exellent resource for all the information and forms you need. If you have any additional
      <br />
      questions, please contact the Club Sports Advisor.
    </h3>
    <div id="greenform1" />
    <h2>PARTICIPANT FORMS</h2>
    <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUMlRHRVdBUEo5SjhZUVhKUko3WUlNVloyRiQlQCN0PWcu">Participant Release Form (PDF)</a>
    <br />
    <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUOEZWUzlFVkg2UVhYNTZLUEdCUEgyWjJSUSQlQCN0PWcu">Driver Application</a>
    <div id="greenform2" />
    <h2>HOME EVENT FORMS</h2>
    <a href=".">Facility Request Form (DOC)</a>
    <br />
    <a href=".">Equipment Agreement (DOC)</a>
    <div id="greenform3" />
    <h2>AWAY EVENT FORMS</h2>
    <a href=".">Club Sport Travel Roster (PDF)</a>
    <br />
    <a href=".">Reimbursement Request (DOC)</a>
  </div>
);

export default FormsPage;
