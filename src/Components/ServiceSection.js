import React, { useState } from 'react';
import PricingImg from '../photos/pricing-photo1.svg';

export const ServiceSection = () => {
    const [serviceState, setServiceState] = useState();

    // for Open Price Modal Box
    const [priceModalOpen, setPriceModalOpen] = useState();

    // For pricing inner function 
    const [priceTab, setPriceTabs] = useState("standard");

    const openServiceTabs = (index) => {
        if (serviceState === index) {
            return setServiceState(null);
        } else {
            setServiceState(index);
        }
    }

    const openPriceModal = (e) => {
        setPriceModalOpen(e);
    }

    const closePriceModal = () => {
        setPriceModalOpen(null);
    }

    return (
        <>
            <section id="service__section" className="section_bg section_default">
                <div className="container">
                    <div className="row justify-content-center pt-4 slideTop">

                        <div className="col-md-6 col-lg-5 service_info">
                            <h2 id="service_head" className="section_title">My <span>Services</span></h2>
                            <h6 className="section_sub_title">Services which i Offer</h6>
                            <article className="service_desc">
                                <p>
                                    Here i provide all of these services. All works done by me with
                                    patience and good working knowledge. In the future the client may not faces any problem
                                    or any hassle because i will support 24/7 any time. To me, work is worth more than money fact.
                                    If the client is happy with my work then that is my goal. If you have any doubt
                                    in your mind then please vist my portfolio section and lookup my project for clearing
                                    confusing. After that if you
                                    wanna get one of these service from me then contact with me. So Before
                                    place these services client must be submit their requirment on mail in
                                    contact section.
                                </p>

                                <div className="pricing_btn">
                                    <button className="open_price_modal" onClick={() => openPriceModal("priceM")}>Pricing Plan<i
                                        className="fas fa-hand-holding-usd"></i></button>
                                </div>

                                <div className="service_desc_footer">
                                    <span><i className="fas fa-laptop"></i> Responsive Design</span>
                                    <span><i className="far fa-clock"></i> 24/7 Support</span>
                                </div>
                            </article>
                        </div>

                        <div className="col-md-6 col-lg-7 service_output">
                            <div className="row">
                                <div className="col-md-12 col-lg-6 col-sm-12">
                                    <div className="service_card">
                                        <div className={`service_card_body ${serviceState === 1 ? "active" : ""}`}>
                                            <i className="fas fa-code"></i>
                                            <b>01</b>
                                            <h3>
                                                Web Development
                                                <span></span>
                                            </h3>
                                            <p className="service__content">
                                                Web site will be adaptable to all devices such as mobile,
                                                tablet, laptop or desktop. It will make with beautiful color varrietion and
                                                beautifull animation.
                                                There is a difference between web design and web development. Web design is about making the user
                                                attractive and here development means making the website dynamic. A dynamic website has some logic
                                                like any information or content
                                                can be deleted or add dynamically and the data can be sent to the database and
                                                the data can be retrieved from there. And this development work is done in the backend.
                                            </p>
                                            <div className="service_content_readmore" onClick={() => openServiceTabs(1)}>
                                                <i className="far fa-hand-pointer"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-6 col-sm-12">
                                    <div className="service_card">
                                        <div className={`service_card_body ${serviceState === 2 ? "active" : ""}`}>
                                            <i className="far fa-chart-bar"></i>
                                            <b>02</b>
                                            <h3>
                                                Seo Marketing
                                                <span></span>
                                            </h3>
                                            <p className="service__content">
                                                Nowadays, everyone may have heard that Search Engine Optimization (SEO) is a very important topic
                                                for
                                                a website. Because Google can't recognize new websites.
                                                So no one will find your website on Google. So new websites are introduced to Google by some
                                                SEO tools and knowledge after that if someone search your domain name on Google, it will be come
                                                up in
                                                the
                                                search results.
                                            </p>
                                            <div className="service_content_readmore" onClick={() => openServiceTabs(2)}>
                                                <i className="far fa-hand-pointer"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-6 col-sm-12">
                                    <div className="service_card">
                                        <div className={`service_card_body ${serviceState === 3 ? "active" : ""}`}>
                                            <i className="fab fa-wordpress-simple"></i>
                                            <b>03</b>
                                            <h3>Wordpress Devlopment
                                                <span></span>
                                            </h3>
                                            <p className="service__content">
                                                Wordpress is the most popular CMS for building web site.It takes less time to build a website with
                                                wordPress and it is much easier to create a dynamic site.
                                                And it is possible to build any design by customizing the theme. nowadays Many people love to
                                                websites
                                                which is build with wordpress.That's why i also help them by creating websites of their choice.
                                            </p>
                                            <div className="service_content_readmore" onClick={() => openServiceTabs(3)}>
                                                <i className="far fa-hand-pointer"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-lg-6 col-sm-12">
                                    <div className="service_card">
                                        <div className={`service_card_body ${serviceState === 4 ? "active" : ""}`}>
                                            <i className="fas fa-database"></i>
                                            <b>04</b>
                                            <h3>Database Management
                                                <span></span>
                                            </h3>
                                            <p className="service__content">
                                                A database is an organized collection of data, generally stored and accessed electronically from a
                                                computer system. Where databases are more complex they are often developed using formal design and
                                                modeling techniques.
                                            </p>
                                            <div className="service_content_readmore" onClick={() => openServiceTabs(4)}>
                                                <i className="far fa-hand-pointer"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className={`pricing__modal modal__box ${priceModalOpen === "priceM" ? "active" : ""}`}>
                <div className="pricing_modal_inner modal__box_inner">
                    <button className="close_price_modal modal_close" onClick={closePriceModal}>&times;</button>
                    <div className="pricing_modal_wrap modal__box_wrapper">
                        <div className="container">
                            <h2 className="section_title">Pricing</h2>
                            <h6 className="section_sub_title">Pricing Plan</h6>

                            <div className="row pt-5">
                                <div className="col-md-6 pt-4 pb-3">
                                    <div className="pricing_photo">
                                        <img src={PricingImg} alt="" />
                                    </div>
                                </div>

                                <div className="col-md-6 pt-4 pb-3">
                                    <div className="pricing__tabs">
                                        <div className={`pricing_tab_item ${priceTab === "basic" ? "active" : ""}`} onClick={() => setPriceTabs("basic")} >
                                            <h3>Basic</h3>
                                        </div>
                                        <div className={`pricing_tab_item ${priceTab === "standard" ? "active" : ""}`} onClick={() => setPriceTabs("standard")}>
                                            <h3>Standard</h3>
                                        </div>
                                        <div className={`pricing_tab_item ${priceTab === "premium" ? "active" : ""}`} onClick={() => setPriceTabs("premium")}>
                                            <h3>Premium</h3>
                                        </div>
                                    </div>
                                    <div className="pricing__all_content">
                                        <div className={`pricing__content ${priceTab === "basic" ? "active" : ""}`}>
                                            <div className="pricing__content_data">
                                                <h3>Basic</h3>
                                                <span>
                                                    35$
                                                    <i>Starting From</i>
                                                </span>
                                                <ul>
                                                    <li><i className="far fa-check-square"></i>1 Page/Landing Page</li>
                                                    <li><i className="far fa-check-square"></i><strike>Design Customization</strike></li>
                                                    <li><i className="far fa-check-square"></i>Content Upload</li>
                                                    <li><i className="far fa-check-square"></i>Responsive Design</li>
                                                    <li><i className="far fa-check-square"></i>3 Plugins/Extension</li>
                                                    <li><i className="far fa-check-square"></i><strike>E-Commerce Functionality</strike></li>
                                                    <li><i className="far fa-check-square"></i>24/7 free support</li>
                                                </ul>
                                                <a href="/">
                                                    <span>Discover</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className={`pricing__content ${priceTab === "standard" ? "active" : ""}`}>
                                            <div className="pricing__content_data">
                                                <h3>Standard</h3>
                                                <span>
                                                    70$
                                                    <i>Starting From</i>
                                                </span>
                                                <ul>
                                                    <li><i className="far fa-check-square"></i>05 Page</li>
                                                    <li><i className="far fa-check-square"></i>Design Customization</li>
                                                    <li><i className="far fa-check-square"></i>Content Upload</li>
                                                    <li><i className="far fa-check-square"></i>Responsive Design</li>
                                                    <li><i className="far fa-check-square"></i>5 Plugins/Extension</li>
                                                    <li><i className="far fa-check-square"></i><strike>E-Commerce Functionality</strike></li>
                                                    <li><i className="far fa-check-square"></i>24/7 free support</li>
                                                </ul>
                                                <a href="/"><span>Discover</span></a>
                                            </div>

                                        </div>

                                        <div className={`pricing__content ${priceTab === "premium" ? "active" : ""}`}>
                                            <div className="pricing__content_data">
                                                <h3>Premium</h3>
                                                <span>
                                                    200$
                                                    <i>Starting From</i>
                                                </span>
                                                <ul>
                                                    <li><i className="far fa-check-square"></i>10 Page</li>
                                                    <li><i className="far fa-check-square"></i>Design Customization</li>
                                                    <li><i className="far fa-check-square"></i>Content Upload</li>
                                                    <li><i className="far fa-check-square"></i>Responsive Design</li>
                                                    <li><i className="far fa-check-square"></i>7 Plugins/Extension</li>
                                                    <li><i className="far fa-check-square"></i>E-Commerce Functionality</li>
                                                    <li><i className="far fa-check-square"></i>24/7 free support</li>
                                                </ul>
                                                <a href="/"><span>Discover</span></a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
