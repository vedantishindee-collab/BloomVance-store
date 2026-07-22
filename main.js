// ================================
// BloomVance - Main Script
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Sticky Navbar on Scroll
    // ===========================
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "15px 8%";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.10)";
            navbar.style.background = "rgba(255,255,255,0.98)";
        } else {
            navbar.style.padding = "20px 8%";
            navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.05)";
            navbar.style.background = "rgba(255,255,255,.95)";
        }
    });

    // ===========================
    // Scroll Reveal Animation
    // ===========================
    const revealElements = document.querySelectorAll(
        ".hero-content, .hero-image, .card, .about, .features div, .newsletter, foot
