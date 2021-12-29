import React from 'react';
import aboutPhoto from "../photos/AboutMe.png";
import cvLetter from "../assets/samiran-resume.pdf";

export const AboutSection = () => {
    return (
        <section id="about__section" className="section_bg section_default">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
                <path fillOpacity="1"
                    d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,245.3C672,235,768,181,864,165.3C960,149,1056,171,1152,154.7C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
            </svg>

            <div className="container pt-5">
                <h2 id="about_head" className="slideLeft section_title">Why You Hire Me For <span>Project</span></h2>
                <h6 className="section_sub_title">Let's introduce To MySelf</h6>
                <div className="row pt-4">
                    {/* <!--About Section Picture Start--> */}
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="about__photo slideLeft" id="about-pic">
                            <img src={aboutPhoto} alt="skr" id="aboutPhoto" />
                        </div>
                    </div>
                    {/* <!--About Section Picture End-->
          <!--About Section Description Start--> */}
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className=" about__describe slideRight">
                            <div className="about__describe_text">
                                <p>
                                    Hi There, I'm <b>Mihir Roy</b>, Professionl Web Developer.
                                    <br />
                                    <br />
                                    As a Web developer, with extensive knowledge and years of experience, working in web technologies
                                    and
                                    Ui
                                    / Ux
                                    design, delivering quality work.
                                </p>
                                <div className="about__describe_text_countdown">
                                    <div className="about__describe_text_countdown_items">
                                        <span>3+</span>
                                        <span>Years <br /> Experience</span>
                                    </div>
                                    <div className="about__describe_text_countdown_items">
                                        <span>20+</span>
                                        <span>Completed <br /> Project</span>
                                    </div>
                                    <div className="about__describe_text_countdown_items">
                                        <span>5</span>
                                        <span>Companies <br /> Worked</span>
                                    </div>
                                </div>
                            </div>
                            <div className="about__describe__cv">
                                <a download="" href={cvLetter} target="_blank" rel="noopener noreferrer"><i className="fas fa-download"></i>Download
                                    CV</a>
                            </div>
                            <div className="about__describe_scroll">
                                <a href="#skills__section">Scroll Down To Explore</a>
                                <div className="about__describe_scroll_box">
                                    <div className="about__describe_scroll_box_line"></div>
                                    <div className="about__describe_scroll_box_arrow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
