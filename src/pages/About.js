import React from "react";

import { useWindupString } from "windups";

function About() {
  const [skill] = useWindupString("MY SKILLSET", {
    pace: (char) => (char === " " ? 50 : 80),
  });

  const [social] = useWindupString("EXPERIENCE", {
    pace: (char) => (char === " " ? 50 : 80),
  });
  return (
    <div className="about">
      <div className="about-one">
        <img
          src="https://drive.google.com/uc?export=download&id=1mhhnZ3Of3XS9gry5eYZFgoYc1EhzZcGV"
          alt="my-dummmy"
        />
      </div>
      <div className="about-two">
        <div className="skills">
          <center>
            <h1>{skill}</h1>
          </center>
          <ul className="techstack">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Flutter</li>
            <li>Dart</li>
            <li>Java</li>
            <li>Angular</li>
            <li>Animation</li>
            <li>UI&UX</li>
            <li>Instructor</li>
            <li>Branding</li>
            <li>SEO</li>
            <li>D-Marketting</li>
            <li>OOPS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="super">
          <center>
            <h1>{social}</h1>
          </center>

          <table>
            <tr>
              <th>Company</th>
              <th>Designation</th>
              <th>Period</th>
            </tr>
            <tr>
              <td>IgonSoft</td>
              <td>Front-End-Dev</td>
              <td>3-Months</td>
            </tr>
            <tr>
              <td>Unschool</td>
              <td>Digital Marketting</td>
              <td>2-Months</td>
            </tr>
            <tr>
              <td>HootWelfare-Society</td>
              <td>Graphic-Designer</td>
              <td>3-Months</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;
