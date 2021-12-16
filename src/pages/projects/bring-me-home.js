import React from "react";
import { Link } from "react-router-dom";

import CoverLogo from "../../assets/png/projects/bring-me-home/bring-me-home-cover-logo.png";
import Logo from "../../assets/png/projects/bring-me-home/bring-me-home-logo.png";
import EmpathyMap from "../../assets/png/projects/bring-me-home/empathy-map.png";
import Chart from "../../assets/png/projects/bring-me-home/chart.png";
import UserFlows from "../../assets/png/projects/bring-me-home/user-flows.png";
import UserInterface from "../../assets/jpg/projects/bring-me-home/bring-me-home-desktop.jpg";

import { ReactComponent as ResearchIcon } from "../../assets/svg/icons/research.svg";
import { ReactComponent as DefineIcon } from "../../assets/svg/icons/define.svg";
import { ReactComponent as IterateIcon } from "../../assets/svg/icons/iterate.svg";
import { ReactComponent as PrototypeIcon } from "../../assets/svg/icons/prototype.svg";

import { ReactComponent as ProgressButton } from "../../assets/svg/button-progress.svg";

const BringMeHome = () => (
  <section className="project-wrapper">
    <div className="cover bring-me-home">
      <div className="content">
        <Link to="/">
          <div className="back-button">Back to all projects</div>
        </Link>
        <div className="title">
          <img src={CoverLogo} alt="logo" />
          <h3>Bring me home</h3>
        </div>
        <p className="text_small subtitle">Case study</p>
        <p className="text_small photo-author">photo by Veronika Jorjobert</p>
      </div>
    </div>
    <div className="content body-wrapper">
      <div className="summary-wrapper">
        <div className="summary">
          <h4>Project summary</h4>
          <p>
            <i>Bring me home</i> is a web application designed for lost or found
            pets. It aims to work as a{" "}
            <strong>
              Social platform that lists all pets that are lost, found or the
              ones that need temporary/permanent home
            </strong>
            . The application&#8217;s goal is to give the users a quick way to
            publish a post or find a lost pet or one to adopt.
          </p>
        </div>
        <img src={Logo} alt="Bring me home" />
      </div>
      <h4>My role</h4>
      <p>Research, empathy mapping, user flows, visual design, branding</p>
      <h4>The problem</h4>
      <p>
        Most people use social platforms (such as{" "}
        <i>Facebook, Twitter or Instagram</i>) to inform about a lost or found
        pet. Since those platforms are intended just to socialize,{" "}
        <strong>they lack any filtering or categorization</strong>. Often the
        scenario is - a certain person need to join/follow many lost and found
        groups or hashtags and then post about the pet which makes the process
        slow and a bit frustrating.
      </p>
      <h4>Process</h4>
      <ul>
        <li>
          <ResearchIcon /> Research
        </li>
        <li>
          <DefineIcon /> Define
        </li>
        <li>
          <IterateIcon /> Iterate
        </li>
        <li>
          <PrototypeIcon /> Prototype
        </li>
      </ul>
      <h4>The solution</h4>
      <p>
        First and the most important thing was to understand how the users think
        and behave. With an initial reserach -{" "}
        <strong>
          talking with people who are adopting or actively helping
        </strong>
        , I was able to understand some of the present pain points. I&#8217;ve
        decided to dig deeper into the users&#8217; perspective and created an{" "}
        <strong>empathy map</strong> based on several people&#8217; words and
        thoughts:
      </p>
      <img src={EmpathyMap} alt="Empathy map" />
      <p>
        I went into several channels and groups dedicated to adoption or
        lost/found pets. Even though it was hard to scroll past many posts, I
        intended to go back several months just to be sure which are the most
        frequent posts:
      </p>
      <img src={Chart} alt="Chart" />
      <p>
        Based on the research, the aim is to deliver a{" "}
        <strong>quick to use filtering and categorisation list of pets</strong>.
        Most users know what they&#8217;re looking for so the app&#8217;s goal
        is to suggest the pets based on any user input. I&#8217;ve created an
        user flow diagram that describes the information architecture of listing
        and filtering:
      </p>
      <img src={UserFlows} alt="User flows" />
      <p>
        The base functionality for the app is to visualise an easy to filter
        feed of pets that need help. I&#8217;m sharing one of the{" "}
        <strong>high-fidelity screens</strong> for the app related to searching
        and feed:
      </p>
      <img src={UserInterface} alt="User interface" />
    </div>
    <div className="next-project">
      <h2>Next project?</h2>
      <Link to="/projects/reconnect" className="button-go">
        <ProgressButton className="progress" />
        <span>Go</span>
      </Link>
    </div>
  </section>
);

export default BringMeHome;
