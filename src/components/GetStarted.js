import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 Here

const GetStarted = () => {
  const navigate = useNavigate(); // 👈 Here too

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "0",
        padding: "20px",
        backgroundImage: "url('https://media.istockphoto.com/id/696503668/video/little-boy-running-at-backyard.jpg?s=640x640&k=20&c=oLJAyIYMmc-6o0ds1mRV7jZjmH0c9okp6bdx4V9_7ow=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        color: "#000", // Changed text color to black
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1
          style={{
            fontSize: "3rem",
            color: "#E0E0E0",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          Welcome to SnehAm
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#E0E0E0",
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          Take the first step today. You're not alone, and we're here every step
          of the way.
        </p>
      </header>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "10px",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            lineHeight: "1.8",
            color: "#000",
          }}
        >
          At <strong>SnehAm</strong>, we believe in the power of connection,
          empathy, and support. This platform is your safe space—whether you're
          navigating challenges or seeking peace, we’re here to walk alongside
          you.
        </p>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "20px",
            color: "#000",
          }}
        >
          How to Get Started
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "20px",
              borderRadius: "8px",
              color: "#000",
            }}
          >
            <strong>Create Your Profile:</strong> Personalize your experience by
            sharing a little about yourself.
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "20px",
              borderRadius: "8px",
              color: "#000",
            }}
          >
            <strong>Discover the Features:</strong> Explore journaling spaces,
            mood trackers, and guided healing tools.
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "20px",
              borderRadius: "8px",
              color: "#000",
            }}
          >
            <strong>Find Support:</strong> Connect with a community or access
            professional guidance tailored to your needs.
          </div>
        </div>
      </section>

      <footer style={{ textAlign: "center", marginTop: "40px", padding: "20px" }}>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#E0E0E0",
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          "Every journey begins with a single step, and here, you're never
          walking alone."
        </p>

        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "15px 30px",
            border: "none",
            borderRadius: "6px",
            fontSize: "1.2rem",
            cursor: "pointer",
            marginTop: "20px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          onClick={() => navigate("/signup")} // Updated to navigate to signup page
        >
          Get Started Now
        </button>
      </footer>
    </div>
  );
};

export default GetStarted;
