import React, { useState } from "react";

export const ContactSection = () => {
    const [status, setStatus] = useState("Sent Message");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, textArea } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: textArea.value,
        };
        let response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Sending..");
        let result = await response.json();
        alert(result.status);
    };


    return (
        <section id="contact__section" className="section_bg section_default">

            <div className="container">
                <h2 id="cnt-head" className="section_title">Have Some <span>Question?</span></h2>
                <h6 className="section_sub_title">drop here your valuable messege</h6>
                <div className="row pt-4 slideTop">

                    <div className="col-md-4">
                        <div className="contact_info">
                            <div className="contact_map">
                                <iframe title="myLocation"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14301.269630984258!2d89.43628542432684!3d26.34859388397842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2fef2bb8aaf97%3A0x2dcac78d05f98057!2z4KaW4Ka-4KaX4Kec4Ka-4Kas4Ka-4Kec4Ka_LCDgppXgp4vgpprgpqzgpr_gprngpr7gprAsIOCmquCmtuCnjeCmmuCmv-CmruCmrOCmmeCnjeCmlywg4Kat4Ka-4Kaw4Kak!5e0!3m2!1sbn!2sbd!4v1628693836005!5m2!1sbn!2sbd"
                                    allowFullScreen="" loading="fast"></iframe>
                            </div>
                            <div className="contact_text">
                                <label>Info :</label>
                                <ul>
                                    <li><i className="fa fa-map"></i>Khagrabari, Coochbehar, WB-736179</li>
                                    <li><i className="fa fa-envelope"></i>samirankumarroy24@gmail.com</li>
                                    <li><i className="fa fa-phone"></i>+91-8016249231</li>
                                </ul>
                                <p>Feel Free To Knock Me</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 contact_main">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="fname"><span>*</span>Your Name:</label>
                                <div className="f-ctl">
                                    <input type="text" className="form-control" id="name" placeholder="What Is Your Name?"
                                        required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="email"><span>*</span>Your Email:</label>
                                <div className="f-ctl">
                                    <input type="email" className="form-control" id="email"
                                        placeholder="What Is Your Email Address?" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="comment"><span>*</span>Leave a Comment:</label>
                                <div className="f-ctl">
                                    <textarea name="message" className="form-control" id="textArea" rows="5"
                                        placeholder="Your Questions....." required></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <button id="submit_btn" className="btn"><i className="fas fa-paper-plane"></i>{status}</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </section>
    )
}
