import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "../assets/css/teamSection.css"; // Custom CSS for Team Section

// Import images
import madhu from "../assets/img/team/madhu.jpg";
import hema from "../assets/img/team/hema.jpg";
import karthikeyan from "../assets/img/team/karthikeyan.jpg";
import divya from "../assets/img/team/divya1.png";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Madhu Balasubramanian",
      position: "Founder & Director",
      image: madhu,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/madhu-balasubramanian-16301335/",
      },
    },
    {
      name: "Hema Shunmugasundaram",
      position: "Co-founder & Director",
      image: hema,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/hema-shunmugasundaram-58461b3/",
      },
    },
    {
      name: "Karthikeyan Natesan",
      position: "Director - Product Strategy and Development",
      image: karthikeyan,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/karthikeyannatesan05feb1982/",
      },
    },
    {
      name: "Divyalaskhmi Natesan",
      position: "Consultant Software Engineer",
      image: divya,
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/divyalakshmi-natesan/",
      },
    },
  ];

  return (
    <section id="team" className="team section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Team</h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          {teamMembers.map((member, index) => (
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              key={index}
            >
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <img
                    src={member.image}
                    className="img-fluid"
                    alt={member.name}
                  />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.position}</span>
                  <p>{member.description}</p>
                  <div className="social">
                    <a href={member.socialLinks.linkedin}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
