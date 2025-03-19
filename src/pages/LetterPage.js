import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Animations
const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const PageBackground = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #e0e8ff 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
`;

const ConfettiPiece = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color};
  top: -20px;
  left: ${(props) => props.left}%;
  opacity: 0.8;
  z-index: 1;
  border-radius: ${(props) => (props.type === "circle" ? "50%" : "0")};
  animation: ${(props) => float} ${(props) => props.duration}s ease-in-out
    infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const LetterWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 650px;
  width: 100%;
  animation: ${float} 1s ease-out;
`;

const EnvelopeFlap = styled.div`
  width: 100%;
  height: 70px;
  background: #ffb347;
  position: absolute;
  top: -35px;
  left: 0;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  z-index: 2;
  transform-origin: top;
  transform: scaleY(0.2);
  opacity: 0.9;
  transition: all 0.3s ease;

  ${LetterWrapper}:hover & {
    transform: scaleY(0.4) translateY(-10px);
  }
`;

const LetterContainer = styled.div`
  background: linear-gradient(to bottom right, #fff 0%, #fffaf0 100%);
  padding: 50px 40px;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  font-family: "Georgia", serif;
  line-height: 1.8;
  color: #2c3e50;
  position: relative;
  text-align: left;
  transition: all 0.3s ease;
  overflow: hidden;
`;

const Ribbon = styled.div`
  position: absolute;
  top: -10px;
  left: 40px;
  width: 30px;
  height: 100px;
  background: linear-gradient(to right, #f78ca0 0%, #f9748f 100%);
  transform: rotate(-35deg);
  z-index: 0;
  opacity: 0.5;
`;

const DecorationDiv = styled.div`
  position: absolute;
  ${(props) => props.position || "top: 20px; left: 30px;"}
  font-size: ${(props) => props.size || "24px"};
  opacity: ${(props) => props.opacity || 0.6};
  transform: rotate(${(props) => props.rotate || "0deg"});
  z-index: 1;
  animation: ${float} ${(props) => props.duration || 3}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
`;

const PhotoCorner = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background: ${(props) => props.color || "#f9f9f9"};
  top: ${(props) => props.top || "auto"};
  bottom: ${(props) => props.bottom || "auto"};
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  border-radius: ${(props) => props.borderRadius || "0"};
  z-index: 1;
`;

const Stamp = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 70px;
  background: linear-gradient(to bottom, #f78ca0 0%, #f9748f 100%);
  border-radius: 5px;
  border: 2px dashed rgba(255, 255, 255, 0.5);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: ${float} 3s ease-in-out infinite;
`;

const MainEmoji = styled.div`
  font-size: 60px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.2));
  animation: ${float} 3s ease-in-out infinite;
`;

const LetterHeader = styled.div`
  font-size: 28px;
  font-weight: bold;
  font-family: "Brush Script MT", cursive;
  background: linear-gradient(45deg, #8e44ad, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 30px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 3px;
    background: linear-gradient(to right, #8e44ad, #9b59b6, #8e44ad);
    margin: 10px auto 0;
    border-radius: 2px;
  }
`;

const LetterBody = styled.p`
  font-size: 18px;
  text-align: justify;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};

  strong {
    color: #8e44ad;
  }

  em {
    font-style: italic;
    color: #d35400;
  }
`;

const HighlightSpan = styled.span`
  background: linear-gradient(
    180deg,
    transparent 70%,
    rgba(255, 195, 170, 0.5) 30%
  );
  padding: 0 3px;
`;

const EmojiAccent = styled.span`
  font-size: 22px;
  display: inline-block;
  margin: 0 5px;
  vertical-align: middle;
  animation: ${float} 1.5s infinite;
`;

const LetterSignature = styled.div`
  font-weight: bold;
  font-size: 24px;
  text-align: right;
  font-family: "Brush Script MT", cursive;
  background: linear-gradient(45deg, #d35400, #e67e22);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 40px;
  position: relative;
  z-index: 2;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: 1.2s;

  &::before {
    content: "♥";
    position: absolute;
    right: 120px;
    bottom: 10px;
    color: rgba(231, 76, 60, 0.6);
    font-size: 32px;
    animation: ${float} 1.5s infinite;
  }
`;

const Polaroid = styled.div`
  position: absolute;
  bottom: 40px;
  right: -20px;
  width: 120px;
  height: 140px;
  background: #fff;
  transform: rotate(15deg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 3;
  padding: 10px 10px 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "Best Friends";
    position: absolute;
    bottom: 10px;
    text-align: center;
    width: 100%;
    left: 0;
    font-size: 12px;
    font-family: "Indie Flower", cursive;
    color: #555;
  }
`;

const PolaroidImage = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const createConfetti = (count) => {
  const pieces = [];
  const colors = [
    "#f94144",
    "#f3722c",
    "#f8961e",
    "#f9c74f",
    "#90be6d",
    "#43aa8b",
    "#577590",
  ];

  for (let i = 0; i < count; i++) {
    const piece = {
      id: i,
      left: Math.random() * 100,
      size: 5 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
      type: Math.random() > 0.5 ? "circle" : "square",
    };
    pieces.push(piece);
  }

  return pieces;
};

const Letter = () => {
  const [confetti, setConfetti] = useState([]);
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setConfetti(createConfetti(40));

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PageBackground>
      {confetti.map((piece) => (
        <ConfettiPiece
          key={piece.id}
          left={piece.left}
          size={piece.size}
          color={piece.color}
          duration={piece.duration}
          delay={piece.delay}
          type={piece.type}
        />
      ))}

      <LetterWrapper>
        <EnvelopeFlap />
        <LetterContainer>
          <Ribbon />

          <DecorationDiv
            position={{ top: "20px", left: "20px" }}
            size="20px"
            opacity="0.7"
            rotate="10deg"
            duration="4"
          >
            ✨
          </DecorationDiv>
          <DecorationDiv
            position={{ bottom: "30px", left: "40px" }}
            size="22px"
            opacity="0.6"
            rotate="-5deg"
            duration="5"
            delay="0.5"
          >
            🎁
          </DecorationDiv>
          <DecorationDiv
            position={{ top: "60px", right: "80px" }}
            size="18px"
            opacity="0.8"
            rotate="15deg"
            duration="3.5"
            delay="0.2"
          >
            💫
          </DecorationDiv>

          <PhotoCorner
            color="#f8f9fa"
            top="10px"
            left="10px"
            borderRadius="0 0 100% 0"
          />
          <PhotoCorner
            color="#f8f9fa"
            top="10px"
            right="10px"
            borderRadius="0 0 0 100%"
          />
          <PhotoCorner
            color="#f8f9fa"
            bottom="10px"
            left="10px"
            borderRadius="0 100% 0 0"
          />
          <PhotoCorner
            color="#f8f9fa"
            bottom="10px"
            right="10px"
            borderRadius="100% 0 0 0"
          />

          <Stamp>💖</Stamp>
          <MainEmoji>📜</MainEmoji>

          <LetterHeader>Dear Soulmate,</LetterHeader>

          <LetterBody delay="0.3s">
            <EmojiAccent>🤔</EmojiAccent> You must be thinking, why did I make a
            website for you out of all things? Well, it's because we have this
            tradition of writing letters to each other, and this time, I wanted
            to do something <HighlightSpan>different</HighlightSpan>. All the
            other gifts were <em>materialistic</em>, but I wanted to create
            something <strong>thoughtful</strong> - something that took hours of
            effort. <EmojiAccent>❤️</EmojiAccent> I love it when someone spends
            their time making something meaningful.
          </LetterBody>

          <LetterBody delay="0.5s">
            I know life has been <HighlightSpan>chaotic</HighlightSpan> lately,
            but I truly believe it's all for the best. I have this{" "}
            <em>strong feeling</em> that you're going to have an amazing career
            ahead - filled with <EmojiAccent>✨</EmojiAccent> success, love, and
            wealth. Thank you for always being there and listening to all my
            endless rants. The best part of my day is coming home and just
            venting to you - it's honestly so therapeutic.{" "}
            <EmojiAccent>🥹</EmojiAccent>
          </LetterBody>

          <LetterBody delay="0.7s">
            We're going to meet many new people, but I hope we stay{" "}
            <strong>constant</strong>. And please,{" "}
            <HighlightSpan>thodi kum smoking kar 🚭</HighlightSpan> - I want you
            in my life forever. I truly feel we're soulmates because it
            literally took us just <em>one day</em> to decide we'd be best
            friends for life. That's the fastest decision I've ever made!{" "}
            <EmojiAccent>😂</EmojiAccent>
          </LetterBody>

          <LetterBody delay="0.9s">
            I know for a fact that no man will ever be my best friend because I
            already have the most amazing one. <EmojiAccent>🫂</EmojiAccent> I
            love how <HighlightSpan>seriously</HighlightSpan> we take our
            friendship - without even realizing the efforts we put in. We value
            our bond more than any relationship, and when I see others'
            friendships, they seem so... normal in comparison.
          </LetterBody>

          <LetterBody delay="1.1s">
            Anyway, thanks for being the <strong>highlight</strong> of my life.
            I hope one day, we turn this dosti into rishtedaari, with our kids
            playing together -{" "}
            <HighlightSpan>putting it out there already!</HighlightSpan>{" "}
            <EmojiAccent>😆</EmojiAccent> <EmojiAccent>👶🏻</EmojiAccent>
          </LetterBody>

          <LetterSignature>
            Forever Yours,
            <br />
            [Your Name]
          </LetterSignature>

          <Polaroid>
            <PolaroidImage>🌟</PolaroidImage>
          </Polaroid>
        </LetterContainer>
      </LetterWrapper>
    </PageBackground>
  );
};

export default Letter;
