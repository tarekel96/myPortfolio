import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <div id="contactContainer">
        <div className="row">
          <div className="col-md-4">
            <h1 id="contactHead">Contact</h1>
          </div>
          <div>
            <div>
              <div className="container">
                <div className="col-md-8 main-section">
                  <form>
                    <div className="form-group" id="contact-form">
                      <label htmlFor="name" id="nameHead">
                        Name
                      </label>
                      <input
                        type="text"
                        id="nameInput"
                        name="name"
                        placeholder="Will Smith"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" id="emailHead">
                        Email
                      </label>
                      <input
                        type="email"
                        id="emailInput"
                        name="email"
                        placeholder="example@gmail.com"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" id="messageHead">
                        Message
                      </label>
                      <textarea
                        id="messageInput"
                        name="message"
                        required="required"
                        defaultValue={""}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-default"
                      id="submit-button"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              {/* Make footer container fluid so it goes across the screen */}
              <div className="container-fluid footer-section">
                <div className="row" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
