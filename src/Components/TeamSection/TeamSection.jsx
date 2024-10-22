import React, { useEffect, useState } from 'react' ;
import { Col, Container, Row } from 'react-bootstrap';
import SectionHeader from '../SectionHeader/SectionHeader';


import "./TeamSection.css"

import Leena from "../../assets/img/team/leena.jpg"
import Dinesh from "../../assets/img/team/dinesh.jpg"
import Rakesh from "../../assets/img/team/rakesh.jpg"
import Rahul from "../../assets/img/team/rahul.jpg"
import Charishma from "../../assets/img/team/charishma.jpg"
import TeamCard from '../TeamCard/TeamCard';

function TeamSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className='team-section'>
      <SectionHeader header="Our Team"  scrollPosition={scrollPosition} />
      <Row className='members-row-one'>
        <Col lg="5">
            <TeamCard 
            quote="Take the first step today <br /> In the stairs to Reach the Cloud" 
            image={Rahul} title="Rahul Kothuri" 
            designation="AWS Cloud Club Captain"
            connect="https://www.linkedin.com/in/rahul-kothuri-565717186/" />
        </Col>
      </Row>
      <Row className='members-row-two'>
        <Col lg="3" className='left-member' >
            <TeamCard 
            quote="The infrastructure of the future is being built by technology, with the architect, AWS cloud." 
            image={Rakesh} title="Rakesh V"  
            designation="Technology Lead"
            connect="https://www.linkedin.com/in/rakeshvalasala/"/>
        </Col>
        <Col lg="3" className='right-member' >
            <TeamCard quote="Scale Your Dreams with AI, <br /> Fuel Your Ambitions with AWS. <br />" 
            image={Dinesh} title="Sai Dinesh" 
            designation="Cloud Lead"
            connect="https://www.linkedin.com/in/saidineshd/"/>
        </Col>

        <Col lg="3" className='right-member' >
            <TeamCard quote="Just keep on increasing your FullStack. At one point, you will Reach the Cloud" 
            image={Leena} 
            title="Leena G" 
            designation="Event Management Lead"
            connect="https://www.linkedin.com/in/leena-geepalem/"/>
        </Col>

        <Col lg="3"  className='right-member'>
            <TeamCard quote="Cloud connects servers, while a Community connects people. <br />" 
            image={Charishma} title="Charishma R" 
            designation="Certification Helper"
            connect="https://www.linkedin.com/in/charishma-reddy-65b685290/"/>
        </Col>

      </Row>

    </Container>
  );
}


export default TeamSection ;
