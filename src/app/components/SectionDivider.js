"use client";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const breathe = keyframes`
  0% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.6; }
`;

const waveMotion = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background-color: var(--color-light);
`;

const Aura = styled.div`
  width: 56px;
  height: 56px;
  background: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
  animation: ${breathe} 3.5s ease-in-out infinite;
`;
const Wave = styled.div`
  flex: 1;
  height: 40px;
  overflow: hidden;
`;
const Svg = styled.svg`
  width: 100%;
  height: 50px;
  stroke: rgba(166, 209, 230, 0.6); /* var(--color-accent) + opacidad */
  stroke-width: 4;
  fill: none;
  filter: blur(2px);
`;



const Path = styled.path`
  animation: morphWave 3s ease-in-out infinite alternate;
  transform-origin: center;

  @keyframes morphWave {
    0% {
      d: path("M0,40 C100,60 300,20 400,40");
    }
    50% {
      d: path("M0,40 C100,20 300,60 400,40");
    }
    100% {
      d: path("M0,40 C100,40 300,40 400,40");
    }
  }
`;

export default function SectionDivider() {
    return (
        <Wrapper>
            <Wave>
                <Svg viewBox="0 0 400 80" preserveAspectRatio="none">
                    <Path d="M0,40 C100,60 300,20 400,40" />
                </Svg>
            </Wave>
            <Aura>
                <Image
                    src="/images/logo1.png"
                    alt="SOMA Core"
                    width={40}
                    height={40}
                />
            </Aura>
            <Wave>
                <Svg viewBox="0 0 400 80" preserveAspectRatio="none">
                    <Path d="M0,40 C100,60 300,20 400,40" />
                </Svg>
            </Wave>
        </Wrapper>
    );
}
