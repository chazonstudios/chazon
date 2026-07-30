"use strict";

/*==================================================
    CHAZON STUDIOS
    Main JavaScript File
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        ELEMENT REFERENCES
    =========================================*/

    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".main-nav a");



    /*=========================================
        MOBILE NAVIGATION
    =========================================*/

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("active");

            menuToggle.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

    }



    /*=========================================
        CLOSE MOBILE MENU
        AFTER CLICKING A LINK
    =========================================*/

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (!navigation.classList.contains("active")) return;

            navigation.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });



    /*=========================================
        STICKY HEADER
    =========================================*/

    function updateHeader() {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);



    /*=========================================
        SMOOTH SCROLL
        (For future internal links)
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });



    /*=========================================
        FOOTER YEAR
        (Future-proof)
    =========================================*/

    const yearElement = document.querySelector(".current-year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }



    /*=========================================
        PAGE LOADED
    =========================================*/

    document.body.classList.add("loaded");

});