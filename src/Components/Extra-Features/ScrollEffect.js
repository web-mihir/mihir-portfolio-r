
import React from 'react';
import { fixedNav } from "../HeaderSection";
import { pageprogressScroll } from "../HeaderSection";
import { jumpBtnAppear } from '../FooterSection';


export const ScrollEffect = () => {
    const fadeOpacity = document.querySelectorAll('.fadeOpacity');
    const slideRight = document.querySelectorAll('.slideRight');
    const slideLeft = document.querySelectorAll('.slideLeft');
    const slideTop = document.querySelectorAll('.slideTop');
    const slideBottom = document.querySelectorAll('.slideBottom');

    const elementInView = (el, divident = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / divident);
    }

    const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return (elementTop > (window.innerHeight || document.documentElement.clientHeight));
    }

    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };
    const hideScrollElement = (element) => {
        element.classList.remove("scrolled");
    }

    fadeOpacity.forEach((el) => {
        if (elementInView(el, 1, 25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
    slideRight.forEach((el) => {
        if (elementInView(el, 1, 25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
    slideLeft.forEach((el) => {
        if (elementInView(el, 1, 25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
    slideTop.forEach((el) => {
        if (elementInView(el, 1, 25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
    slideBottom.forEach((el) => {
        if (elementInView(el, 1, 25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
    return (<div></div>)

}

window.onscroll = function () {
    fixedNav();
    ScrollEffect();
    pageprogressScroll();
    jumpBtnAppear();
}

