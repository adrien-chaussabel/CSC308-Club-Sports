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
      <h2>PARTICIPANT FORMS</h2>
      <div className="links">
        <h5>FORMS</h5>
        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUMlRHRVdBUEo5SjhZUVhKUko3WUlNVloyRiQlQCN0PWcu">Participant Release Form (PDF)</a>
        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=2wING578lUSVNx03nMoq52oE0TprIP9KvKKO7ytndVpUOEZWUzlFVkg2UVhYNTZLUEdCUEgyWjJSUSQlQCN0PWcu">Driver Application</a>
      </div>
    </div>
  </div>
);

export default FormsPage;
