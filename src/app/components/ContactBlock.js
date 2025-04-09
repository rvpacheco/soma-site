"use client";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  background-color: var(--color-light);
  padding: 6rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--color-dark);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-family: var(--font-body);
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 3rem;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: stretch;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-family: var(--font-body);
  font-size: 1rem;
  background: #fff;
  color: var(--color-dark);

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-family: var(--font-body);
  font-size: 1rem;
  background: #fff;
  color: var(--color-dark);
  resize: vertical;
  min-height: 140px;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const Submit = styled.button`
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 0.9rem 1.5rem;
  font-size: 1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #89c6e2;
  }
`;

const Sidebox = styled.div`
  flex: 1;
  background: #f7f6f3;
  border-radius: 16px;
  padding: 2rem;
  font-family: var(--font-body);
  color: #333;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SideText = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const BookButton = styled.a`
  background: var(--color-dark);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.3s ease;

  &:hover {
    background: #333;
  }
`;

export default function ContactBlock() {
  const { t } = useTranslation("common");

  return (
    <Section id="contact">
      <Title>{t("contactTitle")}</Title>
      <Subtitle>{t("contactSubtitle")}</Subtitle>
      <Layout>
        <Form action="https://formspree.io/f/mrbpoyng" method="POST">
          <Input type="text" name="name" placeholder={t("contactPlaceholderName")} required />
          <Input type="email" name="email" placeholder={t("contactPlaceholderEmail")} required />
          <TextArea name="message" placeholder={t("contactPlaceholderMessage")} />
          <Submit type="submit">{t("contactSubmit")}</Submit>
        </Form>
        <Sidebox>
          <SideText>{t("contactSideText")}</SideText>
          <BookButton
            href="https://calendly.com/rvpacheco17"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("contactSideButton")}
          </BookButton>
        </Sidebox>
      </Layout>
    </Section>
  );
}
