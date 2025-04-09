"use client";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  padding: 8rem 2rem;
  background-color: var(--color-light);
  color: var(--color-dark);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-family: var(--font-body);
  font-size: 1.125rem;
  line-height: 1.8;
  color: #333;
  white-space: pre-line;
`;

export default function About() {
  const { t } = useTranslation("common");

  return (
    <Section id="about">
      <Heading>{t("aboutTitle")}</Heading>
      <Text>{t("aboutText")}</Text>
    </Section>
  );
}
