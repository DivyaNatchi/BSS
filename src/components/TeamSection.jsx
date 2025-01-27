import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "../assets/css/teamSection.css"; // Custom CSS for Team Section

// Import images
import teamImage1 from "../assets/img/team/team-1.jpg";
import teamImage2 from "../assets/img/team/team-2.jpg";
import teamImage3 from "../assets/img/team/team-3.jpg";
import teamImage4 from "../assets/img/team/team-4.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Walter White",
      position: "Chief Executive Officer",
      description:
        "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
      image: teamImage1, // Use imported image
      socialLinks: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sarah Jhonson",
      position: "Product Manager",
      description:
        "Aut maiores voluptates amet et quis praesentium qui senda para",
      image: teamImage2,
      socialLinks: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "William Anderson",
      position: "CTO",
      description:
        "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
      image: teamImage3,
      socialLinks: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Amanda Jepson",
      position: "Accountant",
      description:
        "Dolorum tempora officiis odit laborum officiis et et accusamus",
      image: teamImage4,
      socialLinks: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section id="team" className="team section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
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
                    <a href={member.socialLinks.twitter}>
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href={member.socialLinks.facebook}>
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href={member.socialLinks.instagram}>
                      <i className="bi bi-instagram"></i>
                    </a>
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
