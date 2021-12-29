import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PortfolioWeb from "../photos/portfolio-modernWebDesign.jpg";
import PortfolioHotelHostel from "../photos/portfolio-hotel-hostel.jpg";
import PortfolioEcommerce from "../photos/portfolio-ecommerce.jpg";
import PortfolioBlog from "../photos/portfolio-blogDesign.jpg";
import { PortfolioData } from "./Data-store/PortfolioData";


export const PortfolioSection = () => {
    const [portfData, setPortfData] = useState(false);

    const responsiveCarusel = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const filterThis = (elem) => {
        let filterPortf = PortfolioData.filter((pItems) => {
            if (pItems.category === elem) {
                return pItems;
            }
            return false;
        });
        if (elem) {
            displayPortf(filterPortf);
            setPortfData(!portfData);
        }
    }

    const displayPortf = (portfData) => {
        const portfWrapper = document.getElementsByClassName('portf_wrapper');
        const mapPortf = portfData.map(item => {
            return `
                <section class="portf_modal_section">
                <div class="container">
                    <div class="portf_content row">
                        <div class="portf_modal_img col-md-7 col-sm-12">
                            ${item.img}
                        </div>
                        <div class="portf_info col-md-5 col-sm-12">
                            <h3>${item.title}</h3>
                            <p class="portf_desc">
                                ${item.desc1}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            `;
        });
        for (let i = 0; i < portfWrapper.length; i++) {
            portfWrapper[i].innerHTML = mapPortf.join("");
        }

    }


    return (
        <>
            <section id="portfolio__section" className="section_bg section_default">
                <div className="container">
                    <h2 id="portfolio_head" className="section_title">My <span>Portfolio</span></h2>
                    <h6 className="section_sub_title">Most Recent Works</h6>
                    <div className="row pt-4 justify-content-center portfolio_row">

                        <div className="col-md-12">
                            <Carousel showThumbs={false} className="portfolio__content" responsive={responsiveCarusel}>

                                <div className="portfolio__items">
                                    <div className="portfolio__items_pic">
                                        <img src={PortfolioWeb} alt="modern-website-design" />
                                    </div>
                                    <div className="portfolio__items_data">
                                        <h3>Portfolio Websites</h3>
                                        <p>Website adaptable to all devices, with ui components and animated interactions</p>

                                        <button onClick={() => filterThis("portfolio_modal")}>
                                            Demo
                                            <i className="fas fa-arrow-right"></i>
                                        </button>

                                    </div>
                                </div>

                                <div className="portfolio__items">
                                    <div className="portfolio__items_pic">
                                        <img src={PortfolioHotelHostel} alt="brand design" />
                                    </div>
                                    <div className="portfolio__items_data">
                                        <h3>Hotel & Hostel Websites</h3>
                                        <p>
                                            The term branding refers to the marketing practice of actively shaping a distinctive brand. Brand is
                                            the perception of the company in the eyes of the world.
                                        </p>

                                        <button onClick={() => filterThis("hh_modal")}>
                                            Demo
                                            <i className="fas fa-arrow-right"></i>
                                        </button>

                                    </div>
                                </div>

                                <div className="portfolio__items">
                                    <div className="portfolio__items_pic">
                                        <img src={PortfolioEcommerce} alt="online-store" />
                                    </div>
                                    <div className="portfolio__items_data">
                                        <h3>Ecommerce Websites</h3>
                                        <p>
                                            The online store is also a website, but with different functionalities, as it allows people to shop
                                            and make payments online. So whenever someone makes a purchase on the site without human
                                            interaction.
                                        </p>

                                        <button onClick={() => filterThis("ecommerce_modal")}>
                                            Demo
                                            <i className="fas fa-arrow-right"></i>
                                        </button>


                                    </div>
                                </div>

                                <div className="portfolio__items">
                                    <div className="portfolio__items_pic">
                                        <img src={PortfolioBlog} alt="" />
                                    </div>
                                    <div className="portfolio__items_data">
                                        <h3>Blog Websites</h3>
                                        <p>
                                            A good blog builds engagement with your target audience and establishes trust and credibility on the
                                            part of the brand or individual.
                                        </p>

                                        <button onClick={() => filterThis("blog_modal")}>
                                            Demo
                                            <i className="fas fa-arrow-right"></i>
                                        </button>


                                    </div>
                                </div>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            <div className={`portf_modal_box modal__box ${portfData ? "active" : ""}`}>
                <div className="portf_modal_inner modal__box_inner">
                    <button className="close_portfolio_modal modal_close" onClick={() => setPortfData(!portfData)}>&times;</button>
                    <div className="portf_wrapper modal__box_wrapper"></div>
                </div>
            </div>
        </>
    )
}
