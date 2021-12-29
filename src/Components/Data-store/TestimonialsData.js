import team1 from './Testimonials-Photos/team1.png';
import team2 from './Testimonials-Photos/team2.png';
import team3 from './Testimonials-Photos/team3.png';

export const TestimData = [
    {
        id: 1,
        name: "Sribash Roy",
        title: "Frontend Developer",
        img: <img src={team1} alt="team 1"/>,
        link1: <a className="squire_link_btn" href="/"><i className="fab fa-facebook-square"></i></a>,
        link2: <a className="squire_link_btn" href="/"><i className="fab fa-twitter-square"></i></a>,
        link3: <a className="squire_link_btn" href="/"><i className="fab fa-linkedin"></i></a>,
        link4: <a className="squire_link_btn" href="/"><i className="fab fa-github-square"></i></a>
    },
    {
        id: 2,
        name: "Pooja",
        title: "SEO Expert",
        img: <img src={team2} alt="team 2"/>,
        link1: <a className="squire_link_btn" href="/"><i className="fab fa-facebook-square"></i></a>,
        link2: <a className="squire_link_btn" href="/"><i className="fab fa-twitter-square"></i></a>,
        link3: <a className="squire_link_btn" href="/"><i className="fab fa-linkedin"></i></a>,
        link4: <a className="squire_link_btn" href="/"><i className="fab fa-github-square"></i></a>
    },
    {
        id: 3,
        name: "Rinki",
        title: "Graphics Designer",
        img: <img src={team3} alt="team 3"/>,
        link1: <a className="squire_link_btn" href="/"><i className="fab fa-facebook-square"></i></a>,
        link2: <a className="squire_link_btn" href="/"><i className="fab fa-twitter-square"></i></a>,
        link3: <a className="squire_link_btn" href="/"><i className="fab fa-linkedin"></i></a>,
        link4: <a className="squire_link_btn" href="/"><i className="fab fa-github-square"></i></a>
    }
]