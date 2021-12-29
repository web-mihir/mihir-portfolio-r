import React, { useState, useEffect } from 'react';
import logo from "../photos/header-logo.png";


export const HeaderSection = () => {
    const [navToggle, setNavClass] = useState(false);

    const getTheme = () => {
        return JSON.parse(localStorage.getItem("theme")) || false;
    }
    const [theme, setTheme] = useState(getTheme());

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme])

    return (
        <header className="header__section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3 header__option">
                        <div className="header__logo">
                            <a href="index.html">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>

                        <div className="theme_toggle">
                            <label className="theme-toggler">
                                <input type="checkbox" id="theme-checkbox"
                                    onChange={() => setTheme(!theme)} checked={theme ? "true" : ""}
                                    className="theme-checkbox"
                                />
                                <div className="switch"></div>
                            </label>
                        </div>

                        <div className="header_nav_menu_btn">
                            <div className={`header__navBtn ${navToggle ? "active" : ""}`}
                                onClick={() => setNavClass(!navToggle)}>
                                <div className="bar"></div>
                            </div>
                        </div>
                    </div>

                    <nav className="col-md-12 col-lg-9 header__navbar">
                        <div className={`header__nav_menu ${navToggle ? "active" : ""}`}>
                            <ul className="header__nav_ul">
                                <li><a className="active" href="#hero__section">Home</a></li>
                                <li><a href="#about__section">About</a></li>
                                <li><a href="#skills__section">Skills</a></li>
                                <li><a href="#service__section">Services</a></li>
                                <li><a href="#portfolio__section">Portfolio</a></li>
                                <li><a href="#testimonials__section">Testimonials</a></li>
                                <li><a href="#faq__section">Faq</a></li>
                                <li><a href="#contact__section">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="pageProgressBar" id="pageProgress"></div>
        </header>
    );
}



export const pageprogressScroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("pageProgress").style.width = scrolled + "%";
}


export const fixedNav = () => {
    let headerSection = document.querySelector('.header__section');
    let headerHeight = headerSection.getBoundingClientRect().height;
    let windowHeight = window.pageYOffset;

    if (windowHeight >= headerHeight) {
        headerSection.classList.add('fixed_nav');
    } else {
        headerSection.classList.remove('fixed_nav');
    }
}