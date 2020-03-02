import React from "react";
import "./App.scss";

const App = () => {
  return (
    <>
      <main>
        <article>
          <h1>freeCodeCamp Survey Form</h1>
          <h2>Thank you for taking the time to help us improve the platform</h2>
          <form>
            <div className="form-group">
              <label className="d-block mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className="form-group">
              <label className="d-block mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="form-group">
              <label className="d-block mb-1" htmlFor="age">
                Age (optional)
              </label>
              <input id="age" type="number" placeholder="Enter your Age" />
            </div>
            <div className="form-group">
              <label className="d-block mb-1" htmlFor="role">
                Which option best describes your current role?
              </label>
              <select name="role" id="role" required>
                <option selected disabled value="0">
                  Select current role
                </option>
                <option value="1">Student</option>
                <option value="2">Full time Job</option>
                <option value="3">Full time Learner</option>
                <option value="4">Prefer not to say</option>
                <option value="5">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label className="d-block mb-1" htmlFor="recommendation">
                Would you recommend freeCodeCamp to a friend?
              </label>
              <label className="d-block" htmlFor="definitely">
                <input
                  id="definitely"
                  type="radio"
                  name="recommendation"
                  value="0"
                  className="mr-2 mb-1"
                />
                Definitely
              </label>
              <label className="d-block" htmlFor="maybe">
                <input
                  id="maybe"
                  type="radio"
                  name="recommendation"
                  value="1"
                  className="mr-2 mb-1"
                />
                Maybe
              </label>
              <label className="d-block mb-3" htmlFor="notSure">
                <input
                  id="notSure"
                  type="radio"
                  name="recommendation"
                  value="2"
                  className="mr-2 mb-1"
                />
                Not Sure
              </label>
            </div>
            <div className="form-group">
              <label className="d-block mb-1" htmlFor="role">
                What is your favorite feature of freeCodeCamp?
              </label>
              <select name="role" id="role" required>
                <option selected disabled value="0">
                  Select an option
                </option>
                <option value="1">Challenges</option>
                <option value="2">Projects</option>
                <option value="3">Community</option>
                <option value="4">Open Source</option>
              </select>
            </div>
            <div className="form-group">
              <label className="d-block mb-1" htmlFor="improvement">
                What would you like to see improved?
                <small>(Check all that apply)</small>
              </label>
              <label className="d-block" htmlFor="frontEndProjects">
                <input
                  id="frontEndProjects"
                  type="checkbox"
                  name="frontEndProjects"
                  value="1"
                  className="mr-2 mb-1"
                />
                Front-end Projects
              </label>
              <label className="d-block" htmlFor="backEndProjects">
                <input
                  id="backEndProjects"
                  type="checkbox"
                  name="backEndProjects"
                  value="2"
                  className="mr-2 mb-1"
                />
                Back-end Projects
              </label>
              <label className="d-block" htmlFor="dataVisualization">
                <input
                  id="dataVisualization"
                  type="checkbox"
                  name="dataVisualization"
                  value="3"
                  className="mr-2 mb-1"
                />
                Data Visualization
              </label>
              <label className="d-block" htmlFor="challenges">
                <input
                  id="challenges"
                  type="checkbox"
                  name="challenges"
                  value="4"
                  className="mr-2 mb-1"
                />
                Challenges
              </label>
              <label className="d-block" htmlFor="openSourceCommunity">
                <input
                  id="openSourceCommunity"
                  type="checkbox"
                  name="openSourceCommunity"
                  value="5"
                  className="mr-2 mb-1"
                />
                Open Source Community
              </label>
              <label className="d-block" htmlFor="gitterHelpRooms">
                <input
                  id="gitterHelpRooms"
                  type="checkbox"
                  name="gitterHelpRooms"
                  value="6"
                  className="mr-2 mb-1"
                />
                Gitter help rooms
              </label>
              <label className="d-block" htmlFor="videos">
                <input
                  id="videos"
                  type="checkbox"
                  name="videos"
                  value="7"
                  className="mr-2 mb-1"
                />
                Videos
              </label>
              <label className="d-block" htmlFor="cityMeetups">
                <input
                  id="cityMeetups"
                  type="checkbox"
                  name="cityMeetups"
                  value="8"
                  className="mr-2 mb-1"
                />
                City Meetups
              </label>
              <label className="d-block" htmlFor="wiki">
                <input
                  id="wiki"
                  type="checkbox"
                  name="wiki"
                  value="9"
                  className="mr-2 mb-1"
                />
                Wiki
              </label>
              <label className="d-block" htmlFor="forum">
                <input
                  id="forum"
                  type="checkbox"
                  name="forum"
                  value="10"
                  className="mr-2 mb-1"
                />
                Forum
              </label>
              <label className="d-block mb-3" htmlFor="additionalCourses">
                <input
                  id="additionalCourses"
                  type="checkbox"
                  name="additionalCourses"
                  value="11"
                  className="mr-2 mb-1"
                />
                Additional Courses
              </label>
            </div>
            <div className="form-group">
              <label className="d-block mb-1" htmlFor="comments">
                Any comments or suggestions?
              </label>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="10"
                placeholder="Enter your Comments here..."
                required
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </article>
      </main>
    </>
  );
};

export default App;
