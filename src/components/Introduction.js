import React, { Component } from 'react';
import styled from 'styled-components';

const Hero = styled.div`
  padding-top: 30px;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 28px;
  color: #A5ADB5;

  p {
    font-size: 1.00em;
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;

  }
`;

class Introduction extends React.Component {
  render() {
    return (
      <Hero>
      <p>
      Dr. Stephanie Fernandes is dedicated to providing chiropractic care with a difference.
      Using a technique only a select group of Chiropractors in Australia use, called ADVANCED BIO-STRUCTURAL CORRECTION (ABC)&#8482;. Since graduating in 2011, Dr. Fernandes worked and trained under the guidance of the Australasian Instructors of this technique for 18 months. Dr. Fernandes then
      moved to Blackwater, Queensland where she provided her chiropractic services for the next two and a half years. Now, Stepahnie is practising at 3 locations in Melbournes east and south eastern suburbs of Boronia, Cranbourne east and Dandenong.
      </p>
      </Hero>
    )
  }
}

export default Introduction;
