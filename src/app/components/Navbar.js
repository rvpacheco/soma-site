"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import i18n from "@/i18n";


const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--color-light);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  height: 100px;
`;

const LogoImage = styled.div`
  width: 130px;
  height: 130px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
  }
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-dark);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: var(--color-accent);
  }
`;

const CTA = styled.a`
  background: var(--color-accent);
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #89c6e2;
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    z-index: 110;
  }

  span {
    display: block;
    width: 24px;
    height: 3px;
    background: var(--color-dark);
    margin-bottom: 5px;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  right: 0;
  width: 100%;
  background: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 99;
  border-top: 1px solid #eee;

  a {
    font-size: 1.1rem;
    font-family: var(--font-body);
    color: var(--color-dark);
    text-decoration: none;

    &:hover {
      color: var(--color-accent);
    }
  }
`;
const FlagButton = styled.button`
  background: transparent;
  border: ${(props) => (props.active ? "2px solid var(--color-accent)" : "1px solid #ccc")};
  border-radius: 8px;
  padding: 4px;
  cursor: pointer;
  transition: border 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: var(--color-accent);
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;


const FlagSwitcher = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const MobileFlagSwitcher = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    top: 1.8rem;
    right: 3.5rem;
    z-index: 120;
    margin-right: 10px;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  const handleLanguageChange = (lang) => {
    if (lang !== currentLang) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <>
      <Nav>
        <Link href="/" passHref legacyBehavior>
          <LogoImage>
            <Image
              src="/images/somalogodefinitivo.png"
              alt="SOMA logo"
              fill
              priority
            />
          </LogoImage>
        </Link>

        <Links>
          <li><NavLink href="#about">About</NavLink></li>
          <li><NavLink href="#projects">Projects</NavLink></li>
          <li><NavLink href="#contact">Contact</NavLink></li>
          <FlagSwitcher>
            <FlagButton title="Switch to English"
              onClick={() => handleLanguageChange("en")}
              active={currentLang === "en"}
              aria-label="Switch to English"
            >
              <Image src="/images/Flag_of_the_United_States_(Pantone).svg" alt="English" width={24} height={24} />
            </FlagButton>
            <FlagButton title="Switch to Spanish"
              onClick={() => handleLanguageChange("es")}
              active={currentLang === "es"}
              aria-label="Switch to Spanish"
            >
              <Image src="/images/Bandera_de_España.svg" alt="Español" width={24} height={24} />
            </FlagButton>
          </FlagSwitcher>

          <li><CTA href="#contact">Start a Project</CTA></li>
        </Links>

        <Hamburger onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <MobileFlagSwitcher>
          <FlagButton onClick={() => handleLanguageChange("en")} active={currentLang === "en"}>
            <Image src="/images/Flag_of_the_United_States_(Pantone).svg" alt="English" width={24} height={24} />
          </FlagButton>
          <FlagButton onClick={() => handleLanguageChange("es")} active={currentLang === "es"}>
            <Image src="/images/Bandera_de_España.svg" alt="Español" width={24} height={24} />
          </FlagButton>
        </MobileFlagSwitcher>
      </Nav>

      <AnimatePresence>
        {open && (
          <MobileMenu
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <CTA href="#contact" style={{ marginTop: "1rem" }}>Start a Project</CTA>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}
