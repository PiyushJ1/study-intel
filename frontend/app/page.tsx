"use client";

import DarkVeil from "@/styles/DarkVeil";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import WaitlistPopup from "../components/WaitlistPopup";

export default function HomePage() {
  const [isWaitlistPopupOpen, setIsWaitlistPopupOpen] = useState(false);

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isWaitlistPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isWaitlistPopupOpen]);

  const handleWaitlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWaitlistPopupOpen(true);
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className={styles.pageWrapper}>
        <header className={styles.navbar}>
          <div className={styles.navContainer}>
            <div className={styles.navLeft}>
              <Link href="/" className={styles.logo}>
                StudyIntel
              </Link>
            </div>

            {/* <nav className={styles.navCenter}>
              <a
                href="#features"
                onClick={(e) => handleSmoothScroll(e, "features")}
                className={styles.navLink}
              >
                Features
              </a>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className={styles.navLink}
              >
                About
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleSmoothScroll(e, "testimonials")}
                className={styles.navLink}
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className={styles.navLink}
              >
                Contact
              </a>
            </nav> */}

            <div className={styles.navRight}>
              <Link
                href="/signin"
                className={`${styles.signinButton} ${styles.disabled}`}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className={`${styles.signupButtonNav} ${styles.disabled}`}
              >
                Sign Up
              </Link>
              {/* <button
                onClick={handleWaitlistClick}
                className={styles.joinWaitlistButton}
              >
              Join Waitlist
              </button> */}
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className={styles.heroContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.mainTitle}>
              Start studying with confidence.
            </div>

            <h2 className={styles.subtitle}>
              Track your progress, visualise your habits, and <br /> get
              personalised insights — all powered by your own data.
            </h2>

            <div className={styles.ctaSection}>
              <Link href="/signup" className={styles.waitlistButton}>
                Get Started
              </Link>
              <button
                onClick={handleWaitlistClick}
                className={styles.secondaryButton}
              >
                Join Waitlist
              </button>

              <p className={styles.waitlistText}>
                The smarter way to study. Designed for UNSW students.
              </p>
            </div>
          </div>
        </main>

        <WaitlistPopup
          isOpen={isWaitlistPopupOpen}
          onClose={() => setIsWaitlistPopupOpen(false)}
        />

        <DarkVeil />
      </div>
    </>
  );
}
