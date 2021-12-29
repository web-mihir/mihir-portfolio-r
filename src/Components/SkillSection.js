import React, { useState } from 'react';
import { PersonalInfo } from "./Data-store/SkillsData";
import { WorkData } from "./Data-store/SkillsData";
import { EducationInfo } from "./Data-store/SkillsData";


export const SkillSection = () => {

    const [qualificState, setQualificToggleState] = useState(2);
    const [skillState, setSkillToggle] = useState(1);

    const toggleTab = (index) => {
        setQualificToggleState(index);
    }

    const skillTabs = (ind) => {
        setSkillToggle(ind);
    }

    return (
        <section id="skills__section" className="section_bg section_default">
            <div className="container">
                <h2 id="skill_head" className="section_title">Profesional <span>Skills</span></h2>
                <h6 className="section_sub_title">My Resume & Technical Level</h6>
                <div className="row pt-4">
                    {/* Qualification Section Start  */}
                    <div className="col-sm-12 col-md-7 col-lg-6">

                        <div className="qualification__section slideLeft">
                            {/*  <div className="container">  */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="qualification__body">
                                        {/* Qualification Section Header Start  */}
                                        <div className="qualification__headers">
                                            <div className={qualificState === 1 ? "qualification__head active" : "qualification__head"} onClick={() => toggleTab(1)} data-id="education">
                                                <div className="qualification__corner">
                                                    <div></div>
                                                </div>
                                                <i className="fas fa-user-graduate"></i>
                                                <h3>Education</h3>
                                            </div>

                                            <div className={qualificState === 2 ? "qualification__head active" : "qualification__head"} onClick={() => toggleTab(2)} data-id="work">
                                                <div className="qualification__corner">
                                                    <div></div>
                                                </div>
                                                <i className="fas fa-briefcase"></i>
                                                <h3>Work</h3>
                                                <div className="qualification__corner_2">
                                                    <div></div>
                                                </div>
                                            </div>

                                            <div className={qualificState === 3 ? "qualification__head active" : "qualification__head"} onClick={() => toggleTab(3)} data-id="info">
                                                <div className="qualification__corner">
                                                    <div></div>
                                                </div>
                                                <i className="fas fa-info-circle"></i>
                                                <h3>Info</h3>
                                            </div>
                                        </div>
                                        {/* <!-- Qualification Section Header End -->

                                                <!-- Qualification Content Start --> */}
                                        <div className="qualification__content">

                                            <div className={qualificState === 1 ? "qualification__panel  active" : "qualification__panel"} id="education">

                                                <div className="row">
                                                    {
                                                        EducationInfo.map((items, index) => {
                                                            const { instName, degree, period } = items;
                                                            return (
                                                                <div className="col-md-12" key={index}>
                                                                    <div className="qualification__panel__data">
                                                                        <div className="qualification__panel__text">
                                                                            <h4><i className="fas fa-certificate"></i>{degree}</h4>
                                                                            <p><i className="fas fa-university"></i>{instName}</p>
                                                                            <span><i className="far fa-calendar-alt"></i>{period}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>

                                            </div>

                                            <div className={qualificState === 2 ? "qualification__panel  active" : "qualification__panel"} id="work">

                                                <div className="row">

                                                    <div className="col-md-12">

                                                        <div className="qualification__panel__data">
                                                            <div className="qualification__panel__text">
                                                                <h4><i className="fas fa-user-tie"></i>Freelance Web Developer</h4>
                                                                <p><i className="fas fa-building"></i>At Fiverr</p>
                                                                <span><i className="far fa-calendar-alt"></i>2020 - Running</span>
                                                                <article>
                                                                    <ul>
                                                                        {
                                                                            WorkData.map((item, index) => {
                                                                                const { data } = item;
                                                                                return (
                                                                                    <li key={index}>{data}</li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </article>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div className={qualificState === 3 ? "qualification__panel  active" : "qualification__panel"} id="info">

                                                <div className="row">

                                                    <div className="col-md-12">

                                                        <div className="qualification__panel__data">
                                                            <div className="qualification__panel__text">
                                                                <h4><i className="fas fa-info"></i>Personal Information :</h4>
                                                                <legend>
                                                                    {
                                                                        PersonalInfo.map((items, i) => {
                                                                            const { name, age, dob, village, district, state, country,
                                                                                nationally, pinCode, phone, email } = items;
                                                                            return (

                                                                                <ul className="qualification_personal_info_ul" key={i}>
                                                                                    <li>
                                                                                        <span className="p_label">Name :</span>
                                                                                        <span className="p_info">{name}</span>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span className="p_label">Age :</span>
                                                                                        <span className="p_info">{age}</span>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span className="p_label">DOB :</span>
                                                                                        <span className="p_info">{dob}</span>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span className="p_label">Address :</span>
                                                                                        <span className="p_info">
                                                                                            <span className="p_vill">Vill- {village},<br /></span>
                                                                                            <span className="p_dist">Dist- {district},<br /></span>
                                                                                            <span className="p_state">State- {state},<br /></span>
                                                                                            <span className="p_country">Country- {country}.<br /></span>
                                                                                            <span className="p_pin">Pin- {pinCode}</span>
                                                                                        </span>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span className="p_label">Nationality :</span>
                                                                                        <span className="p_info">{nationally}.</span>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span className="p_label">Phone :</span>
                                                                                        <span className="p_info">
                                                                                            {phone}
                                                                                        </span>
                                                                                    </li>
                                                                                    <li>
                                                                                        <span className="p_label">Email :</span>
                                                                                        <span className="p_info">
                                                                                            {email}
                                                                                        </span>
                                                                                    </li>
                                                                                </ul>

                                                                            )
                                                                        })
                                                                    }

                                                                </legend>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                        {/* <!-- Qualification Content End --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- </div> --> */}
                        </div>

                    </div>
                    {/* <!-- Qualification Section End -->
                        <!-- Skill Section Start --> */}
                    <div className="col-sm-12 col-md-5 col-lg-6">
                        <div className="skills__bars slideRight">
                            <div className="skills__accordion">
                                {/* <!-- Frontend skills Start --> */}
                                <div className={skillState === 1 ? "skills__content active" : "skills__content"}>
                                    <div className="skills__header" onClick={() => skillTabs(1)}>
                                        <span>{ }</span>
                                        <div className="skills__header__text">
                                            <h3>Frontend Development</h3>
                                            <span>More Than 4 Years</span>
                                        </div>
                                        <i className="fas fa-chevron-down"></i>
                                    </div>
                                    <div className="skills__list">
                                        <div className="skills__list_items fadeOpacity">
                                            <div className="progress-title">Html-5 & Css-3</div>
                                            <div className="progress html5">
                                                <div className="progress-bar ht" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                                    aria-valuemax="90" style={{ width: '90%' }}>
                                                    <div className="progress-value">90%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skills__list_items fadeOpacity">
                                            <div className="progress-title">Javascript</div>
                                            <div className="progress javascript">
                                                <div className="progress-bar js" role="progressbar" aria-valuenow="65" aria-valuemin="0"
                                                    aria-valuemax="100" style={{ width: '65%' }}>
                                                    <div className="progress-value">65%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skills__list_items fadeOpacity">
                                            <div className="progress-title">jquery</div>
                                            <div className="progress jquery">
                                                <div className="progress-bar jq" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                                    aria-valuemax="100" style={{ width: '90%' }}>
                                                    <div className="progress-value">90%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skills__list_items fadeOpacity">
                                            <div className="progress-title">Bootstrap</div>
                                            <div className="progress bootstrap">
                                                <div className="progress-bar bs" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                                                    aria-valuemax="100" style={{ width: '95%' }}>
                                                    <div className="progress-value">95%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skills__list_items fadeOpacity">
                                            <div className="progress-title">React</div>
                                            <div className="progress react">
                                                <div className="progress-bar rt" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                                    aria-valuemax="100" style={{ width: '80%' }}>
                                                    <div className="progress-value">80%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Frontend skills End -->
                                    <!-- Backend Skills Start --> */}
                                <div className={skillState === 2 ? "skills__content active" : "skills__content"}>
                                    <div className="skills__header" onClick={() => skillTabs(2)}>
                                        <span>{ }</span>
                                        <div className="skills__header__text">
                                            <h3>Backend Development</h3>
                                            <span>More Than 2 Years</span>
                                        </div>
                                        <i className="fas fa-chevron-down"></i>
                                    </div>
                                    <div className="skills__list">
                                        <div className="skills__list_items fadeOpacity">
                                            <div className="progress-title">Wordpress</div>
                                            <div className="progress wpss">
                                                <div className="progress-bar wp" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                                    aria-valuemax="100" style={{ width: '90%' }}>
                                                    <div className="progress-value">90%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skills__list_items fadeOpacity">
                                            <div className="progress-title">NodeJS</div>
                                            <div className="progress nodeJs">
                                                <div className="progress-bar NJ" role="progressbar" aria-valuenow="85" aria-valuemin="0"
                                                    aria-valuemax="100" style={{ width: '85%' }}>
                                                    <div className="progress-value">85%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skills__list_items fadeOpacity">
                                            <div className="progress-title">Firebase</div>
                                            <div className="progress firebase">
                                                <div className="progress-bar frb" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                                                    aria-valuemax="100" style={{ width: '50%' }}>
                                                    <div className="progress-value">50%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skills__list_items fadeOpacity">
                                            <div className="progress-title">Python</div>
                                            <div className="progress python ">
                                                <div className="progress-bar py" role="progressbar" aria-valuenow="55" aria-valuemin="0"
                                                    aria-valuemax="100" style={{ width: '55%' }}>
                                                    <div className="progress-value">55%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skills__list_items fadeOpacity">
                                            <div className="progress-title">Php</div>
                                            <div className="progress php">
                                                <div className="progress-bar p_h_p" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                                    aria-valuemax="100" style={{ width: '60%' }}>
                                                    <div className="progress-value">60%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Backend Skills End --> */}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Skill Section End --> */}
                </div>
            </div>
        </section>

    )
}
