// Home.jsx

import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
/*import ProjectCard from './ProjectCard'; // Assuming you have a ProjectCard component
import { projects } from '../data/projects'; // Importing project data*/

// Styled components
const Container = styled.div`
`;

const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const SubHeading = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const AboutMeSection = styled.div`
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ContactInfo = styled.div`
  font-size: 18px;
`;

function Home() {
    return (
        <Container>
            <Header />
            <Heading>Ryadh Farouzi</Heading>
            <SubHeading>

            </SubHeading>
            {/*<ProjectsContainer>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ProjectsContainer>*/}
            <AboutMeSection>
                <h2>About Me</h2>
                <p>
                    I'm a mobile and web developer fueled by a passion for coding, fitness, and self-improvement.
                    By diving deep into lines of code, I try to bring to life innovative apps and websites that cater to the worlds of gym enthusiasts and those on a journey of self-betterment.
                    In parallel, I share my insights and experiences in these domains through my YouTube channel, where I inspire others to join me on the path to personal growth.
                    My goal is to redefine the digital landscape and empower individuals to thrive in both body and mind.                </p>
            </AboutMeSection>
            <ContactInfo>
                <h2>Contact Information</h2>
                <p>Email: example@example.com</p>
                <p>Phone: 123-456-7890</p>
                <p>Social Media: Insert links to your social media profiles</p>
            </ContactInfo>
        </Container>
    );
}

export default Home;
