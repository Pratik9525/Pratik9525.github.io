import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
const projects = [
  {
    title: "Cloud-Native Document Processing & DevOps Platform",
    category: "Cloud Architecture & DevOps",
    dates: "07/2025 – 10/2026",
    tools: "AWS, Terraform, Jenkins, Docker, ECS Fargate, Redis, PostgreSQL, S3, Prometheus, Grafana",
    highlights: [
      "Architected a cloud-native document processing platform on AWS using ECS Fargate, Application Load Balancer, S3, RDS PostgreSQL, ElastiCache Redis, ECR and IAM, separating API and asynchronous worker workloads for independent scaling and fault isolation.",
      "Designed an end-to-end Jenkins CI/CD pipeline integrating automated testing, SonarQube quality gates, Docker image builds, Trivy vulnerability scanning, ECR publishing, Terraform deployment, database migrations and post-deployment smoke tests across Dev, QA and Production.",
      "Provisioned multi-environment AWS infrastructure using reusable Terraform modules for VPC, private/public subnets, ECS services, ALB, RDS, Redis, S3, IAM and security groups, enabling consistent and repeatable environment provisioning.",
      "Implemented asynchronous document processing using Redis-backed BullMQ workers with retry policies, failed-job handling and independent worker scaling, preventing CPU-intensive processing workloads from impacting API availability.",
      "Implemented secure configuration and secrets management using AWS Secrets Manager and IAM least-privilege roles, eliminating hardcoded credentials from application source code and container images.",
      "Implemented application and infrastructure observability using Prometheus, Grafana and CloudWatch, monitoring API latency, error rates, ECS resource utilization, queue depth, worker failures and database health for proactive incident detection.",
      "Configured ECS autoscaling for API and worker workloads using CPU/memory utilization and asynchronous queue backlog as scaling signals, improving resource utilization during variable document-processing workloads.",
    ],
  },
  {
    title: "High-Traffic Banking Application (My eXp)",
    category: "Banking Infrastructure & DevOps",
    dates: "03/2024 – 07/2026",
    tools: "Git, Jenkins, Ansible, Linux, Shell Scripting, Python, Docker, Kubernetes, Helm, Terraform, AWS (EC2, S3, VPC, IAM, CloudWatch, SNS), Prometheus, Grafana",
    highlights: [
      "Automated infrastructure provisioning and built a multi-stage Jenkins CI/CD pipeline for a high-traffic banking application, improving deployment speed and system reliability.",
      "Managed source control (Git) and automated server provisioning with Ansible; containerized apps with Docker and deployed on Kubernetes (EKS) via Helm, with auto-scaling and self-healing for zero-downtime releases.",
      "Provisioned secure AWS infrastructure (EC2, S3, VPC, IAM, Route 53) with Terraform (IaC), including a public/private subnet architecture with NAT/Internet Gateways for network segmentation.",
      "Implemented monitoring and alerting using Prometheus, CloudWatch, and SNS, and designed Grafana dashboards to visualize application health and resource utilization.",
      "Enforced security using Kubernetes Secrets, ConfigMaps, and IAM RBAC; developed Python/Shell automation scripts for deployment and operational tasks.",
    ],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating],
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={project.title} aria-hidden={index !== currentIndex}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-dates">{project.dates}</p>
                        <ul className="carousel-highlights">
                          {project.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools used</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                aria-pressed={index === currentIndex}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
