import React, { useState } from 'react';
import { FaqData } from './Data-store/FaqData';
import faqImage from '../photos/faq.png';

export const FaqSection = () => {
    const [faqClicked, setFaqClicked] = useState(false);

    const toggleFaq = (index) => {
        if (faqClicked === index) {
            return setFaqClicked(null);
        } else {
            setFaqClicked(index);
        }
    }

    return (
        <>
            <svg className="faq_up_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                <path fill="#c4d5ff" fillOpacity="1" d="M0,192L1440,64L1440,320L0,320Z"></path>
            </svg>

            <section id="faq__section" className="section_bg section_default">
                <div className="container">
                    <h2 id="faq-head" className="section_title">Frequently Asked <span>Questions</span></h2>
                    <div className="row pt-4">

                        <div className="col-lg-6 col-md-6 col-sm-12 slideLeft">
                            <div className="faq__photo">
                                <img src={faqImage} alt="faq images" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 slideRight">
                            <div className="faq__content">
                                <div className="faq__accordion">
                                    {
                                        FaqData.map((item, index) => {
                                            const { question, answer } = item;
                                            return (
                                                <div className="faq__items" key={item.id}>
                                                    <p className={`faq__tabs ${faqClicked === index ? "active" : ""}`} onClick={() => toggleFaq(index)}>
                                                        {question}
                                                        <span>{faqClicked === index ? "-" : "+"}</span>
                                                    </p>

                                                    {faqClicked === index ?
                                                        (<div className="faq__data">
                                                            <article>
                                                                {answer}
                                                            </article>
                                                        </div>) : null
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
