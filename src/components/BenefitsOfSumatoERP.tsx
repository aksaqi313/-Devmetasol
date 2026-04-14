
const BenefitsOfSumatoERP = () => {
  // Styles as JavaScript object
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "60px 20px",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
    },
    headerSection: {
      textAlign: "center" as const,
      marginBottom: "60px",
      padding: "0 20px",
    },
    mainTitle: {
      color: "#1a365d",
      fontSize: "2.8rem",
      fontWeight: "700",
      marginBottom: "20px",
      lineHeight: "1.2",
    },
    mainDescription: {
      color: "#4a5568",
      fontSize: "1.2rem",
      lineHeight: "1.7",
      maxWidth: "900px",
      margin: "0 auto",
      padding: "0 10px",
    },
    benefitsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      gap: "30px",
      padding: "0 20px",
      maxWidth: "1200px",
      margin: "0 auto",
      flexWrap: "nowrap" as const, // एक ही लाइन में रखने के लिए
    },
    benefitCard: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "40px 35px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      border: "1px solid #e2e8f0",
      transition: "all 0.3s ease",
      position: "relative" as const,
      overflow: "hidden",
      flex: "1", // सभी कार्ड्स equal width लेंगे
      minWidth: "320px", // minimum width
      maxWidth: "380px", // maximum width
    },
    benefitCardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
    },
    cardHeader: {
      marginBottom: "25px",
      position: "relative" as const,
      paddingBottom: "15px",
    },
    benefitTitle: {
      color: "#2d3748",
      fontSize: "1.8rem",
      fontWeight: "600",
      margin: "0 0 15px 0",
      lineHeight: "1.3",
    },
    benefitDescription: {
      color: "#4a5568",
      fontSize: "1.05rem",
      lineHeight: "1.6",
      margin: "0",
    },
    // Decorative elements
    accentLine: {
      position: "absolute" as const,
      bottom: "0",
      left: "0",
      width: "60px",
      height: "4px",
      borderRadius: "2px",
    },
    productivityAccent: {
      background: "linear-gradient(90deg, #4299e1, #63b3ed)",
    },
    securityAccent: {
      background: "linear-gradient(90deg, #48bb78, #68d391)",
    },
    transparencyAccent: {
      background: "linear-gradient(90deg, #ed8936, #f6ad55)",
    },
    // Icon styles
    iconContainer: {
      marginBottom: "20px",
    },
    iconCircle: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "25px",
    },
    productivityIcon: {
      background: "linear-gradient(135deg, #4299e1 0%, #63b3ed 100%)",
    },
    securityIcon: {
      background: "linear-gradient(135deg, #48bb78 0%, #68d391 100%)",
    },
    transparencyIcon: {
      background: "linear-gradient(135deg, #ed8936 0%, #f6ad55 100%)",
    },
    iconText: {
      fontSize: "2rem",
      color: "white",
      fontWeight: "bold",
    },
    // Content wrapper
    contentWrapper: {
      position: "relative" as const,
      zIndex: "2",
    },
    // Background pattern
    pattern: {
      position: "absolute" as const,
      top: "0",
      right: "0",
      width: "150px",
      height: "150px",
      opacity: "0.05",
      zIndex: "1",
    },
  };

  const benefits = [
    {
      id: 1,
      title: "Improve Productivity",
      description:
        "Automating processes saves you time and cost while allowing you to focus on what matters.",
      icon: "⚡",
      accentColor: styles.productivityAccent,
      iconStyle: styles.productivityIcon,
    },
    {
      id: 2,
      title: "Data Security",
      description:
        "A reliable data management and storage solution to protect your business data against potential online threats.",
      icon: "🔒",
      accentColor: styles.securityAccent,
      iconStyle: styles.securityIcon,
    },
    {
      id: 3,
      title: "Bring Transparency",
      description:
        "KingTechSol ERP helps organize data and provide real-time insights that lead to operational transparency.",
      icon: "👁️",
      accentColor: styles.transparencyAccent,
      iconStyle: styles.transparencyIcon,
    },
  ];

  // SVG pattern for background
  const PatternSVG = () => (
    <svg
      style={styles.pattern}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20,20 Q40,0 60,20 T100,20 L80,40 Q60,60 40,40 T0,40 Z"
        fill="#4299e1"
      />
      <circle cx="70" cy="70" r="15" fill="#4299e1" />
      <rect x="20" y="70" width="30" height="20" rx="5" fill="#ed8936" />
    </svg>
  );

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <h1 style={styles.mainTitle}>Benefits of KingTechSol ERP</h1>
        <p style={styles.mainDescription}>
          Our custom-designed KingTechSol ERP delivers a real impact and enhances
          your business value and growth. Whether you need a solution for a
          small retail shop or need to manage a large-scale business, we offer
          customizable modules to fit your unique business needs.
        </p>
      </div>

      <div style={styles.benefitsContainer}>
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            style={styles.benefitCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                styles.benefitCardHover.transform;
              e.currentTarget.style.boxShadow =
                styles.benefitCardHover.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = styles.benefitCard.boxShadow;
            }}
          >
            <PatternSVG />
            <div style={styles.contentWrapper}>
              <div style={styles.iconContainer}>
                <div style={{ ...styles.iconCircle, ...benefit.iconStyle }}>
                  <span style={styles.iconText}>{benefit.icon}</span>
                </div>
              </div>

              <div style={styles.cardHeader}>
                <h2 style={styles.benefitTitle}>{benefit.title}</h2>
                <p style={styles.benefitDescription}>{benefit.description}</p>
                <div
                  style={{ ...styles.accentLine, ...benefit.accentColor }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsOfSumatoERP;
