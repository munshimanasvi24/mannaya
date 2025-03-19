import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const Home = () => {
  const [showBanner, setShowBanner] = useState(false);

  // Color theme - gold and purple for royalty/celebration
  const colors = {
    primary: "#8E44AD", // Royal purple
    secondary: "#F1C40F", // Gold
    accent1: "#E74C3C", // Accent red
    accent2: "#3498DB", // Accent blue
    light: "#ECF0F1", // Light background
    dark: "#2C3E50", // Dark text
  };

  useEffect(() => {
    // Show banner with slight delay
    setTimeout(() => setShowBanner(true), 300);

    // Launch confetti
    const launchConfetti = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        colors: [
          colors.primary,
          colors.secondary,
          colors.accent1,
          colors.accent2,
        ],
        origin: { y: 0.6 },
      });
    };

    // Initial confetti burst
    launchConfetti();

    // Recurring confetti bursts
    const confettiInterval = setInterval(launchConfetti, 3000);

    return () => clearInterval(confettiInterval);
  }, []);

  return (
    <div
      className="hero-section position-relative overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      {/* Background with festive gradient */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          background: `linear-gradient(135deg, ${colors.light} 0%, #D7BDE2 100%)`,
          opacity: 0.9,
          zIndex: -1,
        }}
      />

      <Container className="py-5">
        {/* Birthday banner with animation */}
        <div
          className={`birthday-banner text-center mb-5 ${
            showBanner ? "show" : ""
          }`}
        >
          <h1
            className="display-2 fw-bold mb-0"
            style={{
              background: `linear-gradient(to right, ${colors.accent1}, ${colors.primary}, ${colors.accent2})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            ✨ Mannaya Turns 21 ✨
          </h1>
          <p className="lead mt-2" style={{ color: colors.dark }}>
            Let's celebrate this special milestone!
          </p>
        </div>

        {/* Navigation buttons */}
        <Row className="justify-content-center align-items-center gx-4 gy-4 mb-5">
          <Col xs={12} md={10} lg={8}>
            <div className="d-flex flex-wrap justify-content-between">
              {[
                { to: "/letter", label: "💌 Letter", color: colors.accent1 },
                { to: "/", label: "🏠 Home", color: colors.primary },
                {
                  to: "/gifts",
                  label: "🎁 Gifts",
                  color: colors.secondary,
                  textColor: colors.dark,
                },
                { to: "/wishes", label: "💝 Wishes", color: colors.accent2 },
                { to: "/song", label: "🎵 Song", color: "#2ECC71" },
              ].map(({ to, label, color, textColor }) => (
                <Button
                  key={to}
                  as={Link}
                  to={to}
                  size="lg"
                  className="nav-button shadow-lg rounded-pill px-4 py-2"
                  style={{
                    backgroundColor: color,
                    borderColor: color,
                    color: textColor || "white",
                    minWidth: "130px",
                  }}
                >
                  {label}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Birthday message card */}
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={10} lg={8}>
            <div
              className="birthday-message text-center p-5 rounded-lg shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)",
                borderLeft: `5px solid ${colors.primary}`,
                borderRight: `5px solid ${colors.secondary}`,
              }}
            >
              <h2 className="fw-bold" style={{ color: colors.primary }}>
                Happy 21st Birthday, Mannaya! 🎂
              </h2>
              <p className="mb-0 lead">
                Today marks an amazing milestone in your journey!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// CSS for animations and effects
const styles = `
.birthday-banner {
  transform: translateY(-20px);
  opacity: 0;
  transition: all 0.8s ease-out;
}

.birthday-banner.show {
  transform: translateY(0);
  opacity: 1;
}

.nav-button {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.nav-button:active {
  transform: translateY(1px);
}

/* Button animations */
.nav-button:nth-child(1) {
  animation: heartbeat 2.5s infinite;
}

.nav-button:nth-child(5) {
  animation: wiggle 3s infinite;
}

@keyframes heartbeat {
  0% { transform: scale(1); }
  5% { transform: scale(1.05); }
  10% { transform: scale(1); }
  15% { transform: scale(1.05); }
  20% { transform: scale(1); }
  100% { transform: scale(1); }
}

@keyframes wiggle {
  0% { transform: rotate(0deg); }
  2% { transform: rotate(2deg); }
  4% { transform: rotate(-2deg); }
  6% { transform: rotate(2deg); }
  8% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .d-flex.flex-wrap {
    justify-content: center !important;
    gap: 15px;
  }
  
  .nav-button {
    margin: 5px;
  }
}
`;

export default Home;
