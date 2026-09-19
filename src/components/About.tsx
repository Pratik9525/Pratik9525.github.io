import "./styles/About.css";
import { FaAws, FaPython } from "react-icons/fa";
import {
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTerraform,
} from "react-icons/si";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h2 className="about-heading">About Me</h2>
        <p className="about-intro">
          I build secure, scalable, and high-performing cloud solutions.
        </p>
        <p className="para">
          I'm a <span className="about-experience">Software Engineer</span> with
          2+ years of experience in software development and DevOps, delivering
          cloud-native applications and automated deployment pipelines. My work
          spans AWS, Docker, Kubernetes, Helm, Jenkins, Terraform, Python,
          React.js, and Node.js, with a strong focus on system design,
          infrastructure automation, and performance optimization.
        </p>
        <div className="about-skills" aria-label="Core skills">
          <span className="skill-bubble">
            <FaPython aria-hidden="true" /> Python
          </span>
          <span className="skill-bubble">
            <SiNodedotjs aria-hidden="true" /> Node.js
          </span>
          <span className="skill-bubble">
            <SiReact aria-hidden="true" /> React
          </span>
          <span className="skill-bubble">
            <FaAws aria-hidden="true" /> AWS
          </span>
          <span className="skill-bubble">
            <SiDocker aria-hidden="true" /> Docker
          </span>
          <span className="skill-bubble">
            <SiKubernetes aria-hidden="true" /> Kubernetes
          </span>
          <span className="skill-bubble">
            <SiJenkins aria-hidden="true" /> Jenkins
          </span>
          <span className="skill-bubble">
            <SiTerraform aria-hidden="true" /> Terraform
          </span>
          <span className="skill-bubble">
            <SiPostgresql aria-hidden="true" /> PostgreSQL
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
