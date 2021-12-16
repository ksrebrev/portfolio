import React from "react";
import { Link } from "react-router-dom";

import CoverLogo from "../../assets/png/projects/avalog/avalog-cover-logo.png";
import Logo from "../../assets/png/projects/avalog/avalog-logo.png";
import Users from "../../assets/png/projects/avalog/users.png";
import CompetitiveAudit from "../../assets/png/projects/avalog/competitive-audit.png";
import Wireframes from "../../assets/png/projects/avalog/wireframes.png";
import UserFlows from "../../assets/png/projects/avalog/user-flows.png";
import UserInterface from "../../assets/png/projects/avalog/UI.png";
import Logotype from "../../assets/jpg/projects/avalog/logotype.jpg";
import Colors from "../../assets/jpg/projects/avalog/colors.jpg";
import Typography from "../../assets/jpg/projects/avalog/typography.jpg";

import { ReactComponent as ResearchIcon } from "../../assets/svg/icons/research.svg";
import { ReactComponent as DefineIcon } from "../../assets/svg/icons/define.svg";
import { ReactComponent as IterateIcon } from "../../assets/svg/icons/iterate.svg";
import { ReactComponent as PrototypeIcon } from "../../assets/svg/icons/prototype.svg";
import { ReactComponent as TestIcon } from "../../assets/svg/icons/test.svg";

import { ReactComponent as ProgressButton } from "../../assets/svg/button-progress.svg";

const Avalog = () => (
  <section className="project-wrapper">
    <div className="cover avalog">
      <div className="content">
        <Link to="/">
          <div className="back-button">Back to all projects</div>
        </Link>
        <div className="title">
          <img src={CoverLogo} alt="logo" />
          <h3>Avalog</h3>
        </div>
        <p className="text_small subtitle">Case study</p>
        <p className="text_small photo-author">photo by Krzysztof Kowalik</p>
      </div>
    </div>
    <div className="content body-wrapper">
      <div className="summary-wrapper">
        <div className="summary">
          <h4>Project summary</h4>
          <p>
            <i>Avalog</i> is a mobile application designed to help and educate.
            Working as a <strong>social platform</strong>, the application aims
            to <strong>improve the avalanche awarness</strong> of winter hikers
            and skiers. The app&#8217;s goal is to provide a{" "}
            <strong>quick to use reporting process</strong>, weather forecast
            and safety tips.
          </p>
          <p>
            Even though there are national avalanche safety organisations, the
            shared information is often insufficient and avalanche risk may grow
            in hours, even minutes, depending on the weather or human factors.{" "}
            <strong>
              Every data about the snow profile is important and the lack of
              information may be crucial
            </strong>
            .
          </p>
        </div>
        <img src={Logo} alt="Avalog" />
      </div>
      <h4>My role</h4>
      <p>
        Research, user interviews, competitive audit, user flows, prototyping,
        visual design, branding
      </p>
      <h4>The problem</h4>
      <p>
        The app aims to deliver as much snow profile data as possible - the more
        you know about the snow in the mountains, the better chance you have in
        extreme conditions.{" "}
        <strong>
          Users need a quick and easy to use flow to log any information
          they&#8217;ve encountered or analysed
        </strong>
        .
      </p>
      <p>
        The people who analyse the snow often write down any metrics in their
        notebooks or phone. Since it&#8217;s hard to do it out in the wild
        because of the falling snow, the wet conditions and the steepness, they
        usually write everything when they get home. That&#8217;s an issue,
        since snow conditions may rapidly change due to the change of the
        temperature, wind or snow coverage.
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
        <li>
          <TestIcon /> Test
        </li>
      </ul>
      <h4>The solution</h4>
      <p>
        Understanding what may cause an avalanche and how to test the snow were
        the first things I needed to learn. So I started my work on this project
        with a lot of research. With all the books I&#8217;ve read, hands down,
        the most thorough one is{" "}
        <strong>“Staying Alive in Avalanche Terrain”</strong> by Bruce Tremper.
        If you ever need to understand what factors can cause an avalanche and
        how to make ALL snowpack tests (including snow profiles) - this is a
        must read.
      </p>
      <p>
        Next - a lot of <strong>user interviews</strong>. I went to events where
        hikers and skiers gather and conducted interviews directly with anyone
        interested in avalanche safety. Some of the important questions were:
      </p>
      <div className="blockquote">
        <p>
          “What media are you following to measure avalanche safety? Are you
          using any apps?”
        </p>
        <p>
          ”Are you making stability tests when going backcountry? How often?”
        </p>
        <p>”What about snow profiles?”</p>
        <p>”Did you take any avalanche safety lessons?”</p>
        <p>
          ”Do you know anyone that you can rely on his avalanche safety
          advices?”
        </p>
        <p>
          ”Would you use an application to connect with people and their
          observations or tests of the snowpack?
        </p>
      </div>
      <p>
        The idea of the interviews was to understand is there a need of an
        avalanche safety application and also how many people know how to be
        safe in the mountains. Based on the answers of some questions, the users
        may be split into two important groups:
      </p>
      <img src={Users} alt="Users" />
      <p>
        This is important because a lot of users are going to use the
        application in read-only mode - not many people are aware of any
        avalanche safety measures while going up in the mountains. There
        aren&#8217;t a lot of experts, so there&#8217;s a possibility to extend
        the base functionality with <strong>subscription model</strong>. Since
        experts&#8217; snowpack tests and observations are based on their
        experience, users will value their input in the app.
      </p>
      <p>
        Afterwards, I made an <strong>competitive audit</strong> of any
        avalanche safety apps I&#8217;ve found on the app store. There were a
        lot of applications, although most of them were out of service (unknown
        reasons... probably old and not supported).
      </p>
      <img src={CompetitiveAudit} alt="Competitive audit" />
      <p>
        Based on the research and the user interviews, I talked with more
        experts and avalanche safety associations. I also showcased a{" "}
        <strong>low fidelity prototype</strong> (made in <i>Sketch</i> and{" "}
        <i>InVision</i>) of an idea how I envision the reporting flow in my head
        - some of the screens shared below:{" "}
      </p>
      <img src={Wireframes} alt="wireframes" />
      <p>
        With those visuals, we <strong>brainstormed</strong> on ideas about the
        reporting and I came up with the following user flows:
      </p>
      <img src={UserFlows} alt="User flows" />
      <p>
        Based on the user flows, I&#8217;ve created a new prototype covering the
        base functionality. It is currently under <strong>user testing</strong>{" "}
        - the goal is to improve the usability of the flows and to better the
        step process for adding a snow profile.
      </p>
      <img src={UserInterface} alt="User interface" />
      <h4>Bonus: Branding</h4>
      <img src={Logotype} alt="Logotype" />
      <img src={Colors} alt="Colors" />
      <img src={Typography} alt="Typography" />
    </div>
    <div className="next-project">
      <h2>Next project?</h2>
      <Link to="/projects/bring-me-home" className="button-go">
        <ProgressButton className="progress" />
        <span>Go</span>
      </Link>
    </div>
  </section>
);

export default Avalog;
