// src/components/Footer.js
"use client";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 4rem 2rem 2rem;
  text-align: center;
`;

const FooterTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Phrase = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  color: #bbb;
  margin-bottom: 2rem;
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  a {
    color: var(--color-accent);
    font-size: 1.2rem;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Legal = styled.p`
  font-size: 0.85rem;
  color: #888;
  font-family: var(--font-body);
`;

export default function Footer() {
  return (
    <Wrapper>
      <FooterTitle>SOMA</FooterTitle>
      <Phrase>Built by humans. Enhanced by AI. Aligned with intention.</Phrase>
      <Socials>
        <a href="mailto:rvpacheco17@gmail.com">Email</a>
        <a href="https://instagram.com/tuinsta" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://github.com/turepo" target="_blank" rel="noreferrer">GitHub</a>
      </Socials>
      <Legal>© {new Date().getFullYear()} SOMA. All rights aligned.</Legal>
    </Wrapper>
  );
}
