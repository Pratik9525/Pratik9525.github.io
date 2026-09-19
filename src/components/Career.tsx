import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CentraLogic Consultancy Pvt. Ltd</h4>
                <div className="career-company-date">
                  <h5>Software Engineer</h5>
                  <span className="career-date">07/2024 - Present</span>
                </div>
              </div>
            </div>
            <p>
              Managed and maintained secure, scalable, and highly available AWS
              infrastructure with a focus on cost optimization and performance
              tuning. Provisioned and managed EC2, S3, VPC, IAM, ALB, Auto
              Scaling Groups, RDS, and Route 53 while building CI/CD pipelines
              with Jenkins and automating deployments using Ansible and
              Terraform. Implemented Docker and Kubernetes workflows to improve
              scalability, reliability, and delivery speed across production
              workloads.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cognizant Technology Solutions India Pvt. Ltd</h4>
                <div className="career-company-date">
                  <h5>Trainee Engineer</h5>
                  <span className="career-date">03/2024 - 09/2024</span>
                </div>
              </div>
            </div>
            <p>
              Worked closely with development teams to integrate and deploy
              cloud-based services while automating CI/CD pipelines across
              multiple repositories using Jenkins, Python, and Groovy. Built the
              Jira Sync Tool and RTT Time Tracker to improve team productivity,
              reporting accuracy, and project tracking efficiency. Managed AWS
              infrastructure and Prometheus + Grafana monitoring to improve
              observability, uptime, and operational visibility.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cerence inc</h4>
                <div className="career-company-date">
                  <h5>Software Engineer Intern</h5>
                  <span className="career-date">01/2023 - 07/2023</span>
                </div>
              </div>
            </div>
            <p>
              Designed robust, scalable software solutions and contributed to
              feature development with a focus on user experience and bug
              prevention. Documented and analyzed defects, collaborated with
              Jira workflows, and improved quality through rigorous testing and
              issue tracking during product development cycles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
