import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { TestimData } from './Data-store/TestimonialsData';

export const Testimonials = () => {

    return (
        <section id="testimonials__section" className="section_bg section_default">
            <div className="container">
                <h2 className="section_title">My <span>Team</span></h2>
                <h6 className="section_sub_title">Meet With My Brilliant Team Members</h6>
                <div className="row pt-4 slideBottom">
                    <div className="col-md-12">
                        <div className="testimonials__body">

                            <Carousel className="testimonials__slider"
                                infiniteLoop={true}
                                autoPlay={true}
                                interval={7000}
                                swipeable={true}
                                emulateTouch={true}
                                showThumbs={false}
                            >
                                {
                                    TestimData.map((item) => {
                                        const { name, title, img, link1, link2, link3, link4 } = item;

                                        return (
                                            <div className="testimonials__slide" key={item.id}>
                                                <div className="testimonials__person_photo">
                                                    {img}
                                                </div>
                                                <div className="testimonials__person_info">
                                                    <h4>{name}</h4>
                                                    <span>{title}</span>
                                                    <div className="testimonials__person_social">
                                                        {link1}
                                                        {link2}
                                                        {link3}
                                                        {link4}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
