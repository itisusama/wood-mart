import React, { useRef, useEffect, useState } from "react";

function ReactProgressBar() {
  const experienceRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (experienceRef.current) {
        const { top, bottom } = experienceRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the element is in the viewport
        if (top < windowHeight && bottom >= 0) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={isInView ? "experience-section animate" : "experience-section"}
      id="about"
      ref={experienceRef}
      style={{
        fontFamily: 'Roboto, sans-serif',
        fontSize: '5px',
        fontWeight: 400,
        color: 'rgb(0, 0, 0)'
      }}
    >
      <div className="container">
        <div className="experience-items">
          <div className="experience-item col-md-12">
            <div className="experience-info">
              <p>BRAND</p>
              <p>78%</p>
            </div>
            <div className="progress-line" data-percent="90%">
              <span style={{ width: isInView ? "90%" : "0%" }}></span>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-info">
              <p>BRAND</p>
              <p>78%</p>
            </div>
            <div className="progress-line" data-percent="50%">
              <span style={{ width: isInView ? "50%" : "0%" }}></span>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-info">
              <p>ORIGINAL</p>
              <p>90%</p>
            </div>
            <div className="progress-line" data-percent="90%">
              <span style={{ width: isInView ? "90%" : "0%" }}></span>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-info">
              <p>ORIGINAL</p>
              <p>90%</p>
            </div>
            <div className="progress-line" data-percent="90%">
              <span style={{ width: isInView ? "90%" : "0%" }}></span>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-info">
              <p>EXPERIENCE</p>
              <p>90%</p>
            </div>
            <div className="progress-line" data-percent="90%">
              <span style={{ width: isInView ? "90%" : "0%" }}></span>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-info">
              <p>EXPERIENCE</p>
              <p>90%</p>
            </div>
            <div className="progress-line" data-percent="90%">
              <span style={{ width: isInView ? "90%" : "0%" }}></span>
            </div>
          </div>
          {/* Repeat the structure for other progress bars */}
        </div>
      </div>
    </section>
  );
}

export default ReactProgressBar;