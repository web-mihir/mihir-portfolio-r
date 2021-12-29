import React from 'react';

export const FooterSection = () => {

    return (
        <>
            <svg className="footer_up_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path fillOpacity="1"
                    d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,208C960,203,1056,117,1152,106.7C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
            <footer id="footer__section">
                <div className="container">

                    <div className="footer_item">
                        <h3>Follow Me Here</h3>
                        <div className="footer_follow_icon">
                            <a href="/" className="squire_link_btn"><i className="fab fa-facebook"></i></a>
                            <a href="/" className="squire_link_btn"><i className="fab fa-twitter"></i></a>
                            <a href="/" className="squire_link_btn"><i className="fab fa-instagram"></i></a>
                            <a href="/" className="squire_link_btn"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    <div className="copyRightText">
                        <span>
                            Copyright &copy; Portfolio <br /> Created By samiran17
                        </span>
                    </div>
                </div>
            </footer>
            <span id="jump-button" className="jump-btn" onClick={jumpTop}>
                <button><i className="fas fa-arrow-up"></i></button>
            </span>
        </>
    )
}

export const jumpBtnAppear = () => {
    let jumpBtn = document.querySelector(".jump-btn");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        jumpBtn.style.bottom = "0px";
    } else {
        jumpBtn.style.bottom = "-500px";
    };
}

const jumpTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
