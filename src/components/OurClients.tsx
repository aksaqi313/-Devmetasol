import { useEffect, useRef } from "react";
import hussainReharLogo from "../assets/hussain-rehar.avif";
import ittifaqLogo from "../assets/ittifaq.avif";
import cmdSonsLogo from "../assets/CMD-Sons.avif";
import appselecLogo from "../assets/appselec.avif";

const OurClients = () => {
  // Styles as JavaScript object
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "40px 20px 60px",
      minHeight: "auto",
      textAlign: "center" as const,
    },
    headerSection: {
      marginBottom: "30px",
    },
    mainTitle: {
      color: "#1a365d",
      fontSize: "3rem",
      fontWeight: "800",
      marginBottom: "20px",
      lineHeight: "1.2",
      letterSpacing: "1px",
    },
    subtitle: {
      color: "#4a5568",
      fontSize: "1.2rem",
      lineHeight: "1.6",
      maxWidth: "600px",
      margin: "0 auto 40px",
    },
    // Auto-scrolling container
    scrollContainer: {
      position: "relative" as const,
      width: "100%",
      overflow: "hidden",
      borderRadius: "15px",
      marginTop: "30px",
    },
    scrollContent: {
      display: "flex",
      alignItems: "center",
      gap: "80px",
      willChange: "transform",
    },
    logoItem: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
      minWidth: "200px",
      padding: "20px 30px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 3px 10px rgba(0, 0, 0, 0.08)",
      transition: "all 0.3s ease",
      border: "1px solid #e2e8f0",
    },
    logoItemHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.12)",
    },
    logoSubtitle: {
      fontSize: "1rem",
      color: "#718096",
      fontWeight: "500",
      marginTop: "10px",
    },
    // Gradient overlays for smooth edges
    gradientLeft: {
      position: "absolute" as const,
      left: "0",
      top: "0",
      width: "100px",
      height: "100%",
      background: "linear-gradient(90deg, #ffffff 0%, transparent 100%)",
      zIndex: "10",
      pointerEvents: "none" as const,
    },
    gradientRight: {
      position: "absolute" as const,
      right: "0",
      top: "0",
      width: "100px",
      height: "100%",
      background: "linear-gradient(90deg, transparent 0%, #ffffff 100%)",
      zIndex: "10",
      pointerEvents: "none" as const,
    },
  };

  // Clients with logo images from assets
  const clients = [
    {
      id: 1,
      name: "HUSSAIN REHAR",
      subtitle: "",
      description: "",
      logo: hussainReharLogo,
    },
    {
      id: 2,
      name: "ITIFAQ",
      subtitle: "MINING",
      description: "",
      logo: ittifaqLogo,
    },
    {
      id: 3,
      name: "CMD SONS",
      subtitle: "",
      description: "",
      logo: cmdSonsLogo,
    },
    {
      id: 4,
      name: "APPSELEC",
      subtitle: "",
      description: "",
      logo: appselecLogo,
    },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  const scrollContentRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 1; // Pixels per frame

  useEffect(() => {
    const scrollContent = scrollContentRef.current;
    if (!scrollContent) return;

    const scrollWidth = scrollContent.scrollWidth / 2;
    let scrollPosition = 0;

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset position when scrolled through half (duplicated content)
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0;
      }

      if (scrollContent) {
        scrollContent.style.transform = `translateX(-${scrollPosition}px)`;
      }

      animationRef.current = requestAnimationFrame(animate) as unknown as number;
    };

    animationRef.current = requestAnimationFrame(animate) as unknown as number;

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <h1 style={styles.mainTitle}>Our Clients</h1>
        <p style={styles.subtitle}>
          Trusted by industry leaders and innovative companies worldwide
        </p>
      </div>

      <div style={styles.scrollContainer}>
        <div style={styles.gradientLeft}></div>
        <div style={styles.gradientRight}></div>

        <div ref={scrollContentRef} style={styles.scrollContent}>
          {duplicatedClients.map((client, index) => {
            return (
              <div
                key={`${client.id}-${index}`}
                style={styles.logoItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    styles.logoItemHover.transform;
                  e.currentTarget.style.boxShadow =
                    styles.logoItemHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = styles.logoItem.boxShadow;
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{
                    maxWidth: "180px",
                    maxHeight: "120px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    marginBottom: client.subtitle ? "10px" : "0",
                  }}
                />
                {client.subtitle && (
                  <div style={styles.logoSubtitle}>{client.subtitle}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
