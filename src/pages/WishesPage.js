import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import the videos
import bestfriendVideo from "../pages/me.mp4"; // Adjust the path as needed
import ammuDidiVideo from "../pages/ammu_didi.mp4"; // Added new video

const videoData = [
  {
    title: "Poem Didi",
    src: require("../pages/poem_didi.mp4"),
    person: "From Didi",
    thumbnail: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    title: "Prabodha (1)",
    src: require("../pages/prabodh.mp4"),
    person: "From Prabodha",
    thumbnail: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    title: "Prabodha (2)",
    src: require("../pages/probodh_part_2.mp4"),
    person: "From Prabodha",
    thumbnail: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    title: "Sidhu",
    src: require("../pages/sidhu.mp4"),
    person: "From Sidhu",
    thumbnail: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    title: "Bestfriend", // New video title
    src: bestfriendVideo, // Use the imported video
    person: "From Your Bestfriend", // Customize the person name
    thumbnail: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    title: "Ammu Didi", // Added new video title
    src: ammuDidiVideo, // Use the imported video
    person: "From Ammu Didi", // Customize the person name
    thumbnail: "https://via.placeholder.com/150", // Placeholder image
  },
];

const styles = `
.birthday-section {
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  border-radius: 20px;
  padding: 3rem 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-family: 'Pacifico', cursive;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
}

.video-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px !important;
}

.video-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15) !important;
}

.card-title {
  font-size: 1.4rem;
  color: #ff6b6b;
}

.card-person {
  color: #777;
  font-style: italic;
}

.video-container {
  position: relative;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
}

.video-container video {
  transition: opacity 0.3s;
}

.video-container .play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;
}

.video-container:hover .play-overlay {
  opacity: 1;
}

.play-button {
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-button i {
  color: #ff6b6b;
  font-size: 30px;
  margin-left: 5px;
}

.confetti {
  position: relative;
  z-index: 0;
}

.confetti-piece {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ffd700;
  top: -20px;
  opacity: 0;
}

@keyframes confetti-fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

.glowing-border {
  border: 2px solid transparent;
  background-clip: padding-box;
  animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff6b6b, 0 0 20px #ff6b6b;
  }
  to {
    box-shadow: 0 0 10px #fff, 0 0 15px #ff87ab, 0 0 20px #ff87ab, 0 0 25px #ff87ab;
  }
}
`;

const WishesPage = () => {
  const [playingVideo, setPlayingVideo] = React.useState(null);

  const handleVideoPlay = (index) => {
    setPlayingVideo(index);
    const videoElement = document.getElementById(`video-${index}`);
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <div className="confetti">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            background: `hsl(${Math.random() * 360}, 100%, 50%)`,
            width: `${5 + Math.random() * 10}px`,
            height: `${5 + Math.random() * 10}px`,
            animation: `confetti-fall ${
              3 + Math.random() * 5
            }s linear infinite ${Math.random() * 5}s`,
            opacity: 1,
          }}
        />
      ))}

      <style>{styles}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />

      <Container
        fluid
        className="py-5"
        style={{ background: "linear-gradient(to bottom, #f9f9f9, #fff8f8)" }}
      >
        <Container className="birthday-section my-5">
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="text-center mb-5">
              <div className="d-inline-block position-relative mb-4">
                <h1 className="section-title display-3 mb-0">
                  <i className="fas fa-gift me-3"></i>
                  Birthday Wishes
                  <i className="fas fa-gift ms-3"></i>
                </h1>
                <div
                  className="position-absolute"
                  style={{ top: "-20px", right: "-30px" }}
                >
                  <span className="fs-1" role="img" aria-label="celebration">
                    🎂
                  </span>
                </div>
                <div
                  className="position-absolute"
                  style={{ bottom: "-10px", left: "-20px" }}
                >
                  <span className="fs-1" role="img" aria-label="celebration">
                    🎉
                  </span>
                </div>
              </div>
              <p className="lead text-white opacity-90">
                Special messages from your loved ones to brighten your special
                day!
              </p>
            </Col>
          </Row>

          <Row className="g-4 justify-content-center">
            {videoData.map((video, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <Card className="video-card h-100 shadow border-0 overflow-hidden">
                  <div className="video-container">
                    {video.thumbnail ? (
                      <>
                        <img
                          src={video.thumbnail}
                          alt={`${video.title} thumbnail`}
                          className="w-100"
                          style={{
                            display: playingVideo === index ? "none" : "block",
                          }}
                        />
                        <video
                          id={`video-${index}`}
                          className="w-100"
                          controls={playingVideo === index}
                          style={{
                            display: playingVideo === index ? "block" : "none",
                          }}
                          onEnded={() => setPlayingVideo(null)}
                        >
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </>
                    ) : (
                      <div className="ratio ratio-16x9">
                        <video
                          id={`video-${index}`}
                          controls
                          className="w-100 h-100"
                        >
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}

                    {video.thumbnail && playingVideo !== index && (
                      <div
                        className="play-overlay"
                        onClick={() => handleVideoPlay(index)}
                      >
                        <div className="play-button">
                          <i className="fas fa-play"></i>
                        </div>
                      </div>
                    )}
                  </div>

                  <Card.Body className="text-center py-4">
                    <Card.Title className="mb-2 fw-bold">
                      {video.title}
                    </Card.Title>
                    {video.person && (
                      <p className="card-person mb-0">{video.person}</p>
                    )}
                  </Card.Body>

                  <div className="card-footer bg-transparent border-0 text-center pb-3">
                    <button
                      className="btn btn-sm rounded-pill px-3 glowing-border"
                      style={{
                        background: "linear-gradient(45deg, #ff6b6b, #ff8e8e)",
                        color: "white",
                        border: "none",
                      }}
                      onClick={() => handleVideoPlay(index)}
                    >
                      <i className="fas fa-play me-2"></i> Play Message
                    </button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="mt-5 text-center">
            <Col>
              <p className="text-white">
                <span role="img" aria-label="sparkles">
                  ✨
                </span>{" "}
                Wishing you a wonderful birthday filled with joy and happiness!{" "}
                <span role="img" aria-label="sparkles">
                  ✨
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default WishesPage;
