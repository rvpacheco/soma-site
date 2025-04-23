"use client";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const HeroSection = styled.section`
  padding: 6rem 2rem;
  background-color: var(--color-light);
  color: var(--color-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 160px;
`;

const Heading = styled.h1`
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subheading = styled.p`
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 1.25rem;
  color: var(--color-dark);
  max-width: 600px;
`;

const Button = styled.button`
  margin-top: 2rem;
  background: var(--color-accent);
  color: var(--color-dark);
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-family: var(--font-heading);
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #8bbfd8;
  }
`;

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <HeroSection>
      <Heading>{t("heroTitle")}</Heading>
      <Subheading>{t("heroSub")}</Subheading>
      <Button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
        {t("heroButton")}
      </Button>
    </HeroSection>
  );
}
