import React from 'react';


export default function Project() {
  return (
    <div>
      <section className="page-section" id="work">
        <h2>Work</h2>
        <div className="flex-container">
          <a href="https://jkouneski.github.io/Reddit-Effect/" className="flex-item reddit-effect">
            <div>
              <h3>Reddit Effect</h3>
              <span>JS/HTML/CSS/APIs</span>
            </div>
          </a>
          <a href="https://pure-chamber-08412.herokuapp.com/" className="flex-item iPortfolio">
            <div>
              <h3>IPortfolio</h3>
              <span>JS/SQL/Sequelize/HTML/CSS</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
