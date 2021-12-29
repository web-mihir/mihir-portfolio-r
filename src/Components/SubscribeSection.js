import React from 'react'

export const SubscribeSection = () => {
    return (
        <section id="sr_subscribe__section" className="section_default">
            <div className="container">
                <div className="row fadeOpacity">
                    <h2 className="subscribe_caption">Get Updates Any Time!</h2>
                    <div className="subscribe_data">
                        <span>Lets Subscribe Here <i className="fa fa-check-double"></i></span>
                        <form className="subscribe_form" action="" method="POST">
                            <input type="email" name="" id="subsCribe" placeholder="Enter Your Email Address Here..." />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
