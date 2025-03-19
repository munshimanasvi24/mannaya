import { Container, Row, Col, Card } from "react-bootstrap";

const videoData = [
  {
    title: "Poem Didi",
    src: require("../pages/poem_didi.mp4"),
  },
  {
    title: "Prabodha (1)",
    src: require("../pages/prabodh.mp4"),
  },
  {
    title: "Prabodha (2)",
    src: require("../pages/probodh_part_2.mp4"),
  },
  {
    title: "Sidhu",
    src: require("../pages/sidhu.mp4"),
  },
];

const Feedback = () => {
  return (
    <Container className="my-5 py-5">
      <h1 className="display-4 text-center mb-5">🎥 Birthday Wishes</h1>
      <Row className="g-4">
        {videoData.map((video, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="video-card h-100 shadow border-0 rounded-4 overflow-hidden">
              <div className="ratio ratio-16x9">
                <video controls className="w-100 h-100">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{video.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Feedback;
