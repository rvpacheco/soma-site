"use client";
import styled from "styled-components";
import ComparisonTable from "./ComparisonTable";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: var(--color-light);
  text-align: center;
`;

const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-dark);
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: var(--color-light);
`;

const Card = styled.div`
  background: white;
  border-radius: 24px;
  padding: 3rem 2rem;
  max-width: 340px;
  min-height: 500px;
  flex: 1;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  }
`;
const Header = styled.div`
  margin-bottom: 1.5rem;
`;

const Badge = styled.div`
  position: absolute;
  top: -16px;
  right: -16px;
  background-color: var(--color-accent);
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  border-radius: 999px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem;

  li {
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    color: #444;
    text-align: left;

    &::before {
      content: "✔";
      color: var(--color-accent);
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;
const RawButton = styled.a`
  background: var(--color-accent);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-weight: bold;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #89c6e2;
  }
`;


const CTAButton = styled(RawButton)`
  align-self: center;
  font-size: 0.95rem;
  padding: 0.8rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background-color: #89c6e2;
  }
`;
const PackageName = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`;

// 💬 Descripción corta del paquete
const Description = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

export default function Packages() {
  const { t } = useTranslation("common");

  return (
    <Section id="packages">
      <Title>{t("packagesTitle")}</Title>
      <Grid>
        {/* SITE EXPRESS */}
        <Card>
          <Header>
            <PackageName>{t("package1Name")}</PackageName>
            <Description>{t("package1Description")}</Description>
          </Header>
          <FeatureList>
            {t("package1Features", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </FeatureList>
          <CTAButton href="#contact">{t("startNow")}</CTAButton>
        </Card>

        {/* SITE PRO */}
        <Card>
          <Badge>{t("package2Badge")}</Badge>
          <Header>
            <PackageName>{t("package2Name")}</PackageName>
            <Description>{t("package2Description")}</Description>
          </Header>
          <FeatureList>
            {t("package2Features", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </FeatureList>
          <CTAButton href="#contact">{t("startNow")}</CTAButton>
        </Card>

        {/* AI WEBAPP */}
        <Card>
          <Badge>{t("package3Badge")}</Badge>
          <Header>
            <PackageName>{t("package3Name")}</PackageName>
            <Description>{t("package3Description")}</Description>
          </Header>
          <FeatureList>
            {t("package3Features", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </FeatureList>
          <CTAButton href="#contact">{t("startNow")}</CTAButton>
        </Card>
      </Grid>
      <ComparisonTable />
    </Section>
  );
}