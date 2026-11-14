import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const stats = [
    { number: "100+", label: "Digital Projects Successfully Delivered" },
    { number: "25+", label: "Industries Catered" },
    { number: "94+", label: "Client Satisfaction Rate" },
    { number: "15+", label: "Years of Expertise" },
  ];

  return (
    <div style={styles.container}>
      {/* Main Header Section */}
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>Why Choose Devmetasol?</h1>

        <div style={styles.descriptionSection}>
          <p style={styles.description}>
            Devmetasol provides dedicated full-stack expertise to deliver dynamic, 
            secure, and scalable enterprise solutions. Our team is committed to 
            delivering exceptional results precisely tailored to your business 
            requirements. We believe that well-designed, optimized custom digital 
            solutions are instrumental in accelerating market growth and establishing 
            competitive advantage in today's digital landscape.
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <hr style={styles.divider} />

      {/* Get Started Button Section */}
      <div style={styles.getStartedSection}>
        <Link to="/contact" style={styles.getStartedBtn}>
          Get Started with Us
        </Link>
      </div>

      {/* Divider Line */}
      <hr style={styles.divider} />

      {/* Mission Statement */}
      <div style={styles.missionSection}>
        <p style={styles.missionText}>
          We deliver technology-driven solutions that transform businesses and drive measurable results.
        </p>
      </div>

      {/* Empowering Section */}
      <div style={styles.empoweringSection}>
        <h2 style={styles.empoweringTitle}>
          Empowering Your Digital Transformation Journey
        </h2>
      </div>

      {/* Stats Grid */}
      <div style={styles.statsContainer}>
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statItem}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
    color: "#333",
  },
  header: {
      textAlign: "center" as const,
    marginBottom: "40px",
  },
  mainTitle: {
    fontSize: "2.8rem",
    fontWeight: "800",
    marginBottom: "30px",
    color: "#1a1a1a",
    lineHeight: "1.2",
  },
  descriptionSection: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    color: "#555",
      textAlign: "center" as const,
    margin: "0",
  },
  divider: {
    border: "none",
    borderTop: "2px solid #e0e0e0",
    margin: "40px auto",
    width: "100%",
    maxWidth: "900px",
  },
  getStartedSection: {
      textAlign: "center" as const,
    margin: "40px 0",
  },
  getStartedBtn: {
    background: "linear-gradient(135deg, #4a90e2 0%, #357ae8 100%)",
    color: "white",
    border: "none",
    padding: "18px 50px",
    fontSize: "1.3rem",
    fontWeight: "700",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0 4px 15px rgba(74, 144, 226, 0.2)",
  },
  missionSection: {
      textAlign: "center" as const,
    margin: "50px 0 40px",
  },
  missionText: {
    fontSize: "1.4rem",
    fontWeight: "600",
    color: "#4a90e2",
    margin: "0",
      textAlign: "center" as const,
  },
  empoweringSection: {
      textAlign: "center" as const,
    marginBottom: "60px",
  },
  empoweringTitle: {
    fontSize: "2.2rem",
    fontWeight: "700",
    color: "#1a1a1a",
    lineHeight: "1.3",
    margin: "0",
  },
  statsContainer: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "30px",
      textAlign: "center" as const,
  },
  statItem: {
    padding: "30px 20px",
    background: "linear-gradient(145deg, #ffffff, #f5f7fa)",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s ease",
    border: "1px solid rgba(74, 144, 226, 0.1)",
  },
  statNumber: {
    fontSize: "3.2rem",
    fontWeight: "800",
    color: "#4a90e2",
    marginBottom: "15px",
    lineHeight: "1",
  },
  statLabel: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#555",
    lineHeight: "1.5",
  },
};


export default WhyChooseUs;
