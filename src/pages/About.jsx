import React from 'react';
import { FaChalkboardTeacher, FaGraduationCap, FaAward, FaUsers } from 'react-icons/fa';
import teamMembers from '../data/team.js'; // Create this data file
import '../styles/About.css';
import { FaLinkedIn, FaTwitter } from 'react-icons/fa6'; 
const About = () => {
  const stats = [
    { value: '10,000+', label: 'Students Enrolled', icon: <FaUsers /> },
    { value: '50+', label: 'Expert Instructors', icon: <FaChalkboardTeacher /> },
    { value: '100+', label: 'Courses Available', icon: <FaGraduationCap /> },
    { value: '95%', label: 'Satisfaction Rate', icon: <FaAward /> }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Empowering Learners Worldwide</h1>
          <p className="lead-text">
            EduZone is revolutionizing education through accessible, high-quality online learning experiences 
            designed for real-world success.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <div className="mission-grid">
              <div className="mission-card">
                <h3>Accessibility</h3>
                <p>Breaking barriers to make world-class education available to everyone, regardless of location or background.</p>
              </div>
              <div className="mission-card">
                <h3>Excellence</h3>
                <p>Curated content taught by industry leaders and academic experts.</p>
              </div>
              <div className="mission-card">
                <h3>Impact</h3>
                <p>Practical skills that translate directly to career advancement and personal growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Leadership</h2>
          <p className="section-subtitle">
            Passionate educators and industry professionals driving innovation in learning.
          </p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="social-links">
                    {member.linkedin && <a href={member.linkedin} aria-label={`${member.name} LinkedIn`}><FaLinkedIn /></a>}
                    {member.twitter && <a href={member.twitter} aria-label={`${member.name} Twitter`}><FaTwitter /></a>}
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Transform Your Learning Journey?</h2>
          <div className="cta-buttons">
            <button className="btn btn-primary">Explore Courses</button>
            <button className="btn btn-secondary">Become an Instructor</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;