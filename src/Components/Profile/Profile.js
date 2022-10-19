import React from 'react'
import './style.css'
import '../../index.css'
import styled from 'styled-components'
const Creative=styled.div`height: 500px;
background: url('images/creative/about-bg.jpg');
background-size: cover;
background-position: center;
background-attachment: fixed`
  


const Profile = () => {
  return (
  <>  <div className="profile_skills">
  <div className="container">
      <div className="profile">
          <h2 className="profile-title"><span>My </span>Profile</h2>
          <ul className="profile-list">
              <li className="profile-item">
                  <span>Name</span>
                  Hamza Nabil
              </li>
              <li className="profile-item">
                  <span>Birthday</span>
                  21/1/1996
              </li>
              <li className="profile-item">
                  <span>Address</span>
                  Ain shams
              </li>
              <li className="profile-item">
                  <span>Phone</span>
                  4444 5555 6666
              </li>
              <li className="profile-item">
                  <span>Email</span>
                  hamza@hamza.com
              </li>
              <li className="profile-item">
                  <span>Website</span>
                  <span className="web">www.google.com</span>
              </li>
          </ul>
      </div>
      
      <div className="skills">
          <h2 className="skills-title">Some <span>skills</span></h2>
          <p className="skills-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
          </p>
          <div className="bar">
              <span className="title">Bootstrap</span>
              <span className="perc">100%</span>
              <div className="parent">
                  <span className="sp1"></span>
              </div>
          </div>
          
          <div className="bar">
              <span className="title">CSS3</span>
              <span className="perc">90%</span>
              <div className="parent">
                  <span className="sp2"></span>
              </div>
          </div>
          
          <div className="bar">
              <span className="title">Photoshop</span>
              <span className="perc">80%</span>
              <div className="parent">
                  <span className="sp3"></span>
              </div>
          </div>
      </div>
      
  </div>
</div>


<Creative>
  <div className="container">
      <div className="creative-info">
          <h2 className="info-title"><span>This is</span> Me</h2>
          <h4 className="info-dir">Creative Director</h4>
          <p className="info-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </p>
          <p className="info-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </p>
      </div>
  </div>
</Creative></>
  )
}

export default Profile
