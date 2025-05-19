// src/components/Projects.js
"use client";
import styled from "styled-components";

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: var(--color-light);
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  text-align: center;
  color: var(--color-dark);
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const ProjectName = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
`;

const Description = styled.p`
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 1rem;
  flex: 1;
`;

const Link = styled.a`
  align-self: flex-start;
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Projects() {
  return (
    <Section id="projects">
      <Title>Selected Works</Title>
      <Grid>

        <Card>
          <Image src="/gitloot.png" alt="Gitloot Project" />
          <Info>
            <ProjectName>Gitloot</ProjectName>
            <Description>
              Subscription app for home meal delivery using JavaScript, Python, Flask, and React.
            </Description>
            <Link href="https://github.com/4GeeksAcademy/jTorres-proyecto-final" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </Link>
          </Info>
        </Card>

        <Card>
          <Image src="/illegalz.png" alt="Illegalz Project" />
          <Info>
            <ProjectName>Illegalz</ProjectName>
            <Description>
              Web app where users can send a tip to a DJ via PayPal or Apple Pay to request a song.
            </Description>
            <Link href="https://www.illegalz.com/" target="_blank" rel="noopener noreferrer">
              View Online
            </Link>
          </Info>
        </Card>

        <Card>
          <Image src="/crashpath.png" alt="CrashPath Project" />
          <Info>
            <ProjectName>CrashPath App</ProjectName>
            <Description>
              Platform to book training spaces, sync schedules with Google Calendar and manage availability.
            </Description>
            <Link href="https://www.crashpath.lat/" target="_blank" rel="noopener noreferrer">
              View Online
            </Link>
          </Info>
        </Card>

        <Card>
          <Image src="/kosh.png" alt="Kosh Project" />
          <Info>
            <ProjectName>Kosh</ProjectName>
            <Description>
              AI-powered e-commerce platform for custom jewelry with intelligent ring design assistant.
            </Description>
            <Link href="https://kosh-front.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Online
            </Link>
          </Info>
        </Card>

        

      </Grid>
    </Section>
  );
}
