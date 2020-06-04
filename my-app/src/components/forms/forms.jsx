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
        <strong>Sarah Hawkins, MA</strong>
        <br />
        Coordinator for Clubs & Organizations
        <br />
        Club Sports Advisor
        <br />
        shawki06@calpoly.edu
        <br />
        Virtual Office / 805.242.2219
        <br />
        Voicemail / 805.756.7009
      </p>
      <a href="https://outlook.office365.com/owa/calendar/CalPolyClubSports@cpslo.onmicrosoft.com/bookings/">Book an Online Appointment</a>
      <h2 id="participant">PARTICIPANT FORMS</h2>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUMlRHRVdBUEo5SjhZUVhKUko3WUlNVloyRiQlQCN0PWcu">Participant Release Form (PDF)</a>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUOEZWUzlFVkg2UVhYNTZLUEdCUEgyWjJSUSQlQCN0PWcu">Driver Application</a>
      <h2 id="clubSportsCouncil">CLUB SPORTS COUNCIL FORMS</h2>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUNldFM0RDV0U1NVBUMUNNTzRCNlIzRzRTNyQlQCN0PWcu">Gold Stars Tracking</a>
      <a href="https://content-calpoly-edu.s3.amazonaws.com/clubs/1/documents/club_sports/Club%20Sports%20Allocation%20Rubric.pdf">Club Sports Allocation Rubric (PDF)</a>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUNDhPNTlYUDJDQzFBS0JJWU9QS0RVUTUzTSQlQCN0PWcu">Club Sports Council Application</a>
      <h2 id="homeEvents">HOME EVENTS</h2>
      <a href="http://www.asi.calpoly.edu/eplans/start?js=1">E-Plan Request</a>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUQVFJQUc0VkFDNVY1WlBSVTAwVTgxOUpKTCQlQCN0PWcu">Home Risk Form</a>
      <a href="https://content-calpoly-edu.s3.amazonaws.com/deanofstudents/1/documents/clubs-and-orgs/release-liability-multi-lines20170801.pdf">Guest Release of Liability (PDF)</a>
      <a href="https://afd.calpoly.edu/facilities/facs/forms/supply-rental.pdf">Facilities Supply Rental Form (PDF)</a>
      <h2 id="awayEvents">AWAY EVENTS</h2>
      <a href="http://www.asi.calpoly.edu/eplans/start?js=1">E-Plan Request</a>
      <a href="https://content-calpoly-edu.s3.amazonaws.com/clubs/1/documents/Trip_Roster.pdf">Trip Roster (PDF)</a>
      <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUNlZLN1BTUkxFMUdHOURVQVJRU0tZQlNJVyQlQCN0PWcu">Travel Request Form</a>
      <h2 id="accidents">ACCIDENTS & INJURIES</h2>
      <a href="https://afd.calpoly.edu/risk-management/accidents-incident/nonvehicle-accident">Incident/Accident Report Form STD 286</a>
      <a href="https://afd.calpoly.edu/risk-management/accidents-incident/vehicle-accident">Vehicle Accident Data Form STD 269</a>
      <a href="http://fs.ncaa.org/Docs/health_safety/ConFactSheetsa.pdf">NCAA Concussion Fact Sheet</a>
      <h2 id="finResources">FINANCIAL RESOURCES</h2>
      <a href="https://adobesign.calpoly.edu/powerform/3AAABLblqZhAHhLP7IDp-eWP-ovhWk2ijp-zLW0jAHEOnunx8SYu9dJsUoHZKVbct212mFor0NpR-FugjRNtRjDvtWUYfblEp/">Payment Request Form</a>
      <a href="https://www.asi.calpoly.edu/wp-content/uploads/2020/04/ADVISOR-MEMO.pdf">Advisor Memo (PDF)</a>
      <a href="https://content-calpoly-edu.s3.amazonaws.com/deanofstudents/1/clubsports/files/Cal%20Poly%20Club%20Request%20for%20W-9.pdf">Supplemental Form for a W-9 Request (PDF)</a>
      <a href="https://content-calpoly-edu.s3.amazonaws.com/advancement/1/documents/GIK_Acceptance_Form_041519.pdf">Gift In Kind Acceptance Form (PDF)</a>
      <h2 id="coaches">COACHES, OFFICIALS, & TRAINERS</h2>
      <a href="https://cpslo.sharepoint.com/sites/ClubSports/_layouts/15/guestaccess.aspx?e=OJreLc&share=EXZKVK55KlFOvkKBwaFRpe0B5_Cp5f_-jJ5bBfLsVTIDgw">Athletic Trainer Database</a>
      <a href="https://content-calpoly-edu.s3.amazonaws.com/clubs/1/documents/club_sports/ServiceContract.pdf">Service Contract for Officials and Trainers (PDF)</a>
      <a href="https://www.irs.gov/pub/irs-pdf/fw9.pdf">IRS W-9 Form (PDF)</a>
      <h2 id="apparel">APPAREL & LICENSING</h2>
      <a href="https://universitymarketing.calpoly.edu/wp-content/uploads/2019/08/cal-poly-approved-licensees.pdf">Licensed Vendors</a>
      <a href="https://universitymarketing.calpoly.edu/trademark-licensing/">Licensing Guidelines</a>
      <a href="https://universitymarketing.calpoly.edu/trademark-licensing/request-form/">Trademark Licensing Request Form</a>
      <a href="https://universitymarketing.calpoly.edu/wp-content/uploads/2017/12/calpoly_marketing_logos.pdf">Athletic Mark Brand Colors (PDF)</a>
    </div>
  </div>
);

export default FormsPage;
