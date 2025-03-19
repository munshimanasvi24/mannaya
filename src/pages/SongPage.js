import React from "react";

// Simple Card component with vibrant styling and image support
const Card = ({ children, className, bgColor }) => (
  <div
    className={`border-2 rounded-lg p-4 shadow-lg ${className}`}
    style={{
      backgroundColor: bgColor || "#fff",
      borderColor: "#ff66b2",
      boxShadow: "0 6px 12px rgba(255, 102, 178, 0.2)",
    }}
  >
    {children}
  </div>
);

const CardContent = ({ children }) => <div className="p-2">{children}</div>;

// Songs Data with colorful themes and image URLs
const songs = [
  {
    title: "When Emma Falls in Love",
    artist: "Taylor Swift",
    url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    description: "I think this is how you are in every relationship.",
    emoji: "💞",
    bgColor: "#ffecf2", // Light pink
    buttonColor: "#ff66b2", // Bright pink
    imageUrl: "https://i.ytimg.com/vi/CwmGwU_8mZ0/maxresdefault.jpg", // TTPD album cover
  },
  {
    title: "Where You Lead, I Will Follow",
    artist: "Carole King",
    url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    description: "The perfect song for our unbreakable bond.",
    emoji: "🤝",
    bgColor: "#e6f7ff", // Light blue
    buttonColor: "#3399ff", // Bright blue
    imageUrl:
      "https://br.web.img3.acsta.net/pictures/20/10/10/02/41/1339917.jpg", // Tapestry album cover
  },
  {
    title: "Bootnike",
    artist: "Akshay Kumar",
    url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    description: "Our friendship is literally incomplete without this song.",
    emoji: "🎵",
    bgColor: "#f0fff0", // Light green
    buttonColor: "#66cc66", // Bright green
    imageUrl: "https://i.ytimg.com/vi/X1y_sUO41t0/maxresdefault.jpg", // Placeholder for movie soundtrack
  },
  {
    title: "It's Nice to Have a Friend",
    artist: "Taylor Swift",
    url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    description: "Our current situation.",
    emoji: "🫂",
    bgColor: "#fff5e6", // Light orange
    buttonColor: "#ff9933", // Bright orange
    imageUrl:
      "https://tse1.mm.bing.net/th?id=OIP.W0cwKB7DxbcLqUMOA_rU2QHaHa&pid=Api&P=0&h=220", // Lover album cover
  },
];

// Colorful Song Cards Component with Album Covers
const SongCards = () => {
  return (
    <div style={{ margin: "30px 0", padding: "10px" }}>
      {/* Colorful Header */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2
          style={{
            fontSize: "36px",
            color: "#ff1a8c",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Our Friendship Playlist
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <span style={{ fontSize: "24px" }}>🎧</span>
          <span style={{ fontSize: "24px" }}>🎵</span>
          <span style={{ fontSize: "24px" }}>🎶</span>
        </div>
      </div>

      {/* Card Grid with proper alignment */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {songs.map((song, index) => (
          <Card key={index} bgColor={song.bgColor}>
            <CardContent>
              {/* Album Cover Image */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "15px",
                }}
              >
                <img
                  src={song.imageUrl}
                  alt={`${song.title} by ${song.artist}`}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  }}
                />
              </div>

              {/* Song Header with Emoji */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#990066",
                    margin: "0",
                  }}
                >
                  {song.title}
                </h2>
                <span style={{ fontSize: "24px" }}>{song.emoji}</span>
              </div>

              {/* Artist name with italic styling */}
              <p
                style={{
                  fontSize: "16px",
                  color: "#666",
                  fontStyle: "italic",
                  marginTop: "5px",
                  marginBottom: "10px",
                }}
              >
                by {song.artist}
              </p>

              {/* Colorful Divider */}
              <div
                style={{
                  height: "3px",
                  background:
                    "linear-gradient(to right, #ff66b2, #3399ff, #66cc66, #ff9933)",
                  margin: "15px 0",
                }}
              ></div>

              {/* Description Box */}
              <div
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  borderRadius: "8px",
                  marginBottom: "15px",
                  borderLeft: `4px solid ${song.buttonColor}`,
                }}
              >
                <p style={{ margin: "0", color: "#333" }}>{song.description}</p>
              </div>

              {/* Button with Song-specific Color */}
              <a
                href={song.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  backgroundColor: song.buttonColor,
                  color: "white",
                  borderRadius: "20px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Listen on YouTube 🎵
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Decoration */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "30px 0",
        }}
      >
        <div
          style={{
            height: "2px",
            background:
              "linear-gradient(to right, transparent, #ff66b2, transparent)",
            flex: "1",
          }}
        ></div>
        <div style={{ padding: "0 15px", fontSize: "24px" }}>🎼</div>
        <div
          style={{
            height: "2px",
            background:
              "linear-gradient(to right, transparent, #ff66b2, transparent)",
            flex: "1",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SongCards;
