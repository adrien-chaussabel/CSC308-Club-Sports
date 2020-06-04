import React from 'react';
import './forms.css';
import ResourceTitle from './resourceTitle';
import FormsMenu from './formsMenu';

const FormsPage = () => (
  <div>
    <ResourceTitle />
    <div className="forms">
      <h3>
        Club Sports strives to make running your club as streamlined as possible. This page is an
        exellent resource for all the information and forms you need. If you have any additional
        questions, please contact the Club Sports Advisor.
      </h3>
      <FormsMenu />
      <h2 id="general">GENERAL INFO</h2>
      <p>
        Mail should be sent to:
        Team Name
        1 Grand Avenue
        San Luis Obispo, CA 93407-0675
        Make sure to use the last four digits of the zip code to ensure proper routing.
        Club mail can be picked up from the Club Sports Mailbox Center in UU 203
      </p>
      <h2 id="participant">PARTICIPANT FORMS</h2>
      <h5>FORMS</h5>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUMlRHRVdBUEo5SjhZUVhKUko3WUlNVloyRiQlQCN0PWcu">Participant Release Form (PDF)</a>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUOEZWUzlFVkg2UVhYNTZLUEdCUEgyWjJSUSQlQCN0PWcu">Driver Application</a>
      <h2 id="clubSportsCouncil">CLUB SPORTS COUNCIL FORMS</h2>
      <h5>FORMS</h5>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUNldFM0RDV0U1NVBUMUNNTzRCNlIzRzRTNyQlQCN0PWcu">Gold Stars Tracking</a>
      <a href="https://content-calpoly-edu.s3.amazonaws.com/clubs/1/documents/club_sports/Club%20Sports%20Allocation%20Rubric.pdf">Club Sports Allocation Rubric (PDF)</a>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUNDhPNTlYUDJDQzFBS0JJWU9QS0RVUTUzTSQlQCN0PWcu">Club Sports Council Application</a>
      <h2 id="homeEvents">HOME EVENTS</h2>
      <a href="http://www.asi.calpoly.edu/eplans/start?js=1">E-Plan Request</a>
      <h5>FORMS</h5>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUQVFJQUc0VkFDNVY1WlBSVTAwVTgxOUpKTCQlQCN0PWcu">Home Risk Form</a>
      <a href="https://content-calpoly-edu.s3.amazonaws.com/deanofstudents/1/documents/clubs-and-orgs/release-liability-multi-lines20170801.pdf">Guest Release of Liability (PDF)</a>
      <a href="https://afd.calpoly.edu/facilities/facs/forms/supply-rental.pdf">Facilities Supply Rental Form (PDF)</a>
      <h2 id="awayEvents">AWAY EVENTS</h2>
      <a href="http://www.asi.calpoly.edu/eplans/start?js=1">E-Plan Request</a>
      <a href="https://content-calpoly-edu.s3.amazonaws.com/clubs/1/documents/Trip_Roster.pdf">Trip Roster (PDF)</a>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUNlZLN1BTUkxFMUdHOURVQVJRU0tZQlNJVyQlQCN0PWcu">Travel Request Form</a>
      <h5>FORMS</h5>
    </div>
  </div>
);

export default FormsPage;
