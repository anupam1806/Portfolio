import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Wanderly AI</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Wanderly AI: Your Travel Buddy, your personal 
              AI travel assistant
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cognizant</h4>
                <h5>2+ years · Gurugram</h5>
              </div>
              <h3>2023–Present</h3>
            </div>
            <p>
              Led the frontend development of a high-traffic web application used
              for international money transfers, focusing on real-time transaction
              tracking, multi-currency conversion, and KYC (Know Your Customer)
              compliance modules. The project involved migrating legacy JSP-based
              interfaces to a modern React.js ecosystem to improve performance
              and user retention.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Zapezzy</h5>
              </div>
              <h3>2022–22</h3>
            </div>
            <p>
              July 2022 – Nov 2022. Developed and maintained a full-stack web 
              application using React.js and Node.js for a startup focused on event 
              management.Implemented features such as user authentication, event
              creation and management, and real-time notifications.Collaborated
              with a small team to deliver the product within tight deadlines, resulting
              in a successful launch and positive user feedback.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sf Engineer</h4>
                <h5>Infogain</h5>
              </div>
              <h3>2013-16</h3>
            </div>
            <p>
              Software engineering across enterprise projects, contributing to
              design, development, and delivery of business applications.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
