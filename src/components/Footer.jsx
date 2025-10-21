function Footer({ name, slogan, className = "" }) {
  return (
    <footer 
      className={className}
      style={{
        background: "linear-gradient(135deg, #3a0a54ff, #003049)",
        color: "white",
        padding: "2rem",
        textAlign: "center",
        width: "100%",
        marginTop: "auto"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h3 
          style={{
            fontSize: "2rem",
            marginBottom: "0.5rem",
            fontWeight: "700",
            letterSpacing: "-0.5px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
          }}
        >
          {name}
        </h3>
        <p 
          style={{
            fontSize: "1.1rem",
            opacity: "0.9",
            fontWeight: "300",
            letterSpacing: "0.5px",
            marginBottom: "1rem",
            color: "#e69c24",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)"
          }}
        >
          {slogan}
        </p>
        <p 
          style={{
            fontSize: "0.9rem",
            opacity: "0.7",
            marginTop: "1rem",
            paddingTop: "1rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)"
          }}
        >
        </p>
      </div>
    </footer>
  );
}

export default Footer;