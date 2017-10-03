import React, { Component } from 'react';
import styled from 'styled-components';

const ListSection = styled.div`
  padding-top: 30px;
  padding-left: 28px;
  padding-right: 28px;
  padding-bottom: 28px;
  color: #A5ADB5;
  text-align: left;

  p {
    font-size: 0.975em;
  }

  & li {
  list-style: disc;
  font-family: 'Museo-Sans-300';
  color: #A5ADB5;
  padding-left: 10px;
  font-size: 0.975em;
  text-align: left;
}
`;

class Abc extends React.Component {
  render() {
    return (
      <ListSection>
      <p>
      ABC is a manual hands on style of Chiropractic that is used to diagnose and treat structural bio-mechanical problems of the spine. Anterior Vertebral Syndrome (AVS) is used to describe the layers of biomechanical compensations the body and spine hold onto to cope with the many injuries and traumas it goes through. Eventually resulting in a forward slumped posture, aches, pains and general body stiffness.
      By focusing on the primary problems Dr. Fernandes is able to address the resulting secondary conditions.
      <br/><br/>
      Associated secondary conditions with AVS include:
      </p>

      <ul>
        <li>Poor posture </li>
        <li>Headaches & Migraines</li>
        <li> Neck and shoulder pains</li>
        <li>Mid and lower back pain</li>
        <li>Hip, leg and knee pains</li>
        <li>Breathing issues</li>
        <li>Fatigue</li>
        <li>Muscle tension and spasm</li>
        <li>Disc herniations</li>
        <li>Pinched nerves</li>
        <li>Strength issues</li>
        <li>Digestive issues</li>
      <li>Sinus conditions</li>
      </ul>
      <p>
       <h4>What does treatment involve?</h4>

      During your consult Dr. Fernandes will examine your spine and body to rule out any red flags.
      Then assess the spinal injuries that your body cant self correct. The adjustment involves meningeal stretches and specific corrective adjustments to the spine, pelvis, hips, knees, feet and ribs. Most people feel an upright change in posture following the ABCTM adjustment.

      Treatment Schedules will be tailored specifically to the health goals you would like to achieve.
      Dr. Fernandes will give you her recommendations and collaborate a schedule with you.
      Additional advice will be given on better ways Sit, Sleep and Stand to facilitate the treatment progress.
      </p>

      <h4>FEES</h4>
      <ul>
        <li>Initial consult 1 hour : $100</li>
        <li>Pensioner/Under 18 rate: $90</li>
        <li>Subsequent on-going care 20 min: $50</li>
        <li>Pensioner/Under 18 rate : $45</li>
        <li>Endo-Nasal consult + adjustment 30 min : $70</li>
      </ul>
      </ListSection>


    )
  }
}

export default Abc;
