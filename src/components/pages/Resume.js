import React from 'react';
import PDF from "../../TylerResume.pdf";


export default function Resume() {
    return (
        <div>
      <section class="page-section" id="Resume">
        <h2>Resume</h2>
            <div class="col">
                <h1>Front End Proficiencies</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Handlebars</li>
                </ul>
                <h1>Back End Proficiencies</h1>
                <ul>
                    <li>Node.js</li>
                    <li>SQL</li>
                    <li>Mongo</li>
                    <li>Express</li>
                    <li>GQL</li>
                </ul>
                <a href ={PDF} target ="_blank" >
              Download my resume
            </a>
            </div>
      </section>
    </div>
    )
}