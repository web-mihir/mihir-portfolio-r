import React from 'react';
import Typewriter from "typewriter-effect";
import heroMan from "../photos/heroImages3.png";


export const HeroSection = () => {
    return (
        <section id="hero__section" className="section_bg">
            <div className="container">
                <div className="row">
                    <div className="hero__column col-md-12">

                        <img src={heroMan} alt="banarMan" />

                        <div className="hero__data" >

                            <div className="hero__data_heading">
                                <span>Welcome To My World________</span>
                                <h1>Hi, I'm <b>Samiran</b></h1>
                            </div>

                            <div className="hero__data_info">
                                <h3 id="typWriterH3">
                                    <Typewriter
                                        options={
                                            {
                                                strings: ['Web Developer', 'Seo Expert', 'Graphics Designer'],
                                                autoStart: true,
                                                loop: true,
                                                delay: 100
                                            }
                                        }
                                    />
                                </h3>

                                <span>
                                    A Freelance Web Developer
                                    <b>Specialized</b>
                                    <br />
                                    In Both Frontend & Backend.
                                </span>
                            </div>

                            <div className="hero__data_btn">
                                <div className="hero__data_btn_one">
                                    <a href="/">Hire Me</a>
                                </div>
                                <div className="hero__data_btn_two">
                                    <a href="#portfolio__section"><span> Recent Works</span></a>
                                </div>
                            </div>

                            <div className="hero__data_social">
                                <a className="squire_link_btn" href="/"><i className="fab fa-github-square"></i></a>
                                <a className="squire_link_btn" href="/"><i className="fab fa-linkedin"></i></a>
                                <a className="squire_link_btn" href="/"><i className="fab fa-dribbble-square"></i></a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}