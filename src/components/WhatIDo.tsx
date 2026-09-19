import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillSections = [
  {
    title: "DEVOPS & CLOUD",
    description:
      "Designing and operating resilient cloud infrastructure with CI/CD automation, container orchestration, and production monitoring. I focus on reliable deployments, scaling, incident readiness, and cost-efficient AWS architecture.",
    tags: [
      "AWS",
      "EC2",
      "S3",
      "VPC",
      "IAM",
      "Route 53",
      "Docker",
      "Kubernetes",
      "Helm",
      "Terraform",
      "Ansible",
      "Jenkins",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "SOFTWARE ENGINEERING",
    description:
      "Building backend services and UI features using modern tools and clean engineering practices. I work across Python, JavaScript, React, Node.js, SQL, and automation workflows to create practical, scalable solutions.",
    tags: [
      "Python",
      "JavaScript",
      "Dart",
      "Node.js",
      "React.js",
      "Flutter",
      "SQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Jira",
      "CI/CD",
    ],
  },
] as const;

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {skillSections.map((section, index) => (
            <div
              key={section.title}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>

              <div className="what-content-in">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  {section.tags.map((tag) => (
                    <span key={tag} className="what-tags">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
