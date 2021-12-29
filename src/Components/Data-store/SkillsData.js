// My Education Data Start ....
export const EducationInfo = [
    {
        id: 1,
        instName: <a href="http://coochbeharcollege.org.in/index.aspx" rel="noreferrer" target="_blank">Coochbehar College</a>,
        degree: "Bachelor Of Business Administration (BBA)",
        period: "01/09/2021 - Running"
    },
    {
        id: 2,
        instName: <a rel="noreferrer" href="https://schools.org.in/koch-bihar/19031700101/cooch-behar-rambhola-high-school.html" target="_blank">Coochbehar Ram Bhola High School.</a>,
        degree: "Higher Secondary (HS)",
        period: "01/05/2018 - 01/06/2020"
    },
    {
        id: 3,
        instName: <a rel="noreferrer" href="https://www.facebook.com/mtvidyapith/" target="_blank">Mowamari Vidyapith High School, Coochbehar.</a>,
        degree: "Madhyamik (MP)",
        period: "01/01/2015 - 01/06/2017"
    }
];
// My Education Data End ....


// My Works Details Start..
export const WorkData = [
    {
        data: `Planned website development, converting mockups into usable web presence with
        HTML, JavaScript, AJAX and JSON coding.`
    },
    {
        data: `Provided front-end website development using WordPress, Hubspot and other editing
        software.`
    },
    {
        data: `Implemented Google-based SEO and ad campaigns to meet budget specifications.`
    },
    {
        data: `Designed, implemented and monitored web pages, plugins and functionality for
        continuous improvement.`
    },
    {
        data: `Pulled from PHP, SQL, JavaScript and other back-end library knowledge to bolster
        programming resources.`
    },
    {
        data: `Built and styled new mobile-friendly websites, transitioning legacy presentations
        to simultaneous easy-to-use versions.`
    },
    {
        data: `Coded websites using HTML, CSS, JavaScript and jQuery languages.`
    }
];
// My Works Details End..


// Personal Details Data Generate Start.....
const currentDate = new Date().getFullYear();
const myAge = {
    dob: 2000,
    func: function (current) {
        return (current - this.dob);
    }
}

export const PersonalInfo = [
    {
        id: 1,
        name: "Samiran Kumar Roy",
        age: `${myAge.func(currentDate)}`,
        dob: "17/04/2000",
        village: "Khagrabari",
        district: "Coochbehar",
        state: "West Bengal",
        country: "India",
        nationally: "Indian",
        pinCode: 736179,
        phone: "+91-8016249231",
        email: "samirankumarroy24@gmail.com"
    }
];
// Personal Details Data Generate End.....