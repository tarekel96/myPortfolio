import React, { Component } from "react";
// import { Button} from "react-bootstrap";
import resumeData from "../resumeData";
export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills:
        // resumeData.skills &&
        resumeData.skills.map(item => {
          return (
            <li id="skillsList" /* style={{ visibility: "hidden" }} */>
              <span className={`bar-expand ${item.skillname.toLowerCase()}`} />
              <em>{item.skillname}</em>
            </li>
          );
        })
    };
  }
  preview = () => {
    this.setState({ visibility: "visible" });
  };
  hide_preview = () => {
    this.setState({ visibility: "hidden" });
  };

  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map(item => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {/* <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div> */}

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
            <div />
          </div>

          {/* <button
            id="viewButton"
               onClick={function() {
              document.getElementbyId("skillsList").style.visibility =
                "visible";
            }} 
          >
            View
          </button> */}
          <div>
            <div
              className="bars post_preview"
              id="skillsDiv postpreview"
              // style={{ visibility: "hidden" }}
            >
              <span className="spanClass">
                * indicates I have a certification for that skill
              </span>
              <ul>
                <li>- HTML/CSS*</li>
                <li>- JavaScript/jQuery*</li>
                <li>- Node.js & Express*</li>
                <li>- React.js*</li>
                <li>- SQL & NoSQL Databases*</li>
                <li>- Python</li>
              </ul>
              {/* {this.state.skills} */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  displaySkills = function() {
    this.state.skills.getElementbyId("skillsList").style.visibility = "visible";
  };
  // document.getClassByName("bars").style.visibility.visible
}
