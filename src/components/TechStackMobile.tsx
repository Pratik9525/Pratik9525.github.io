const techLogos = [
  { src: "/images/java.png", alt: "Java" },
  { src: "/images/springboot.png", alt: "Spring Boot" },
  { src: "/images/React.png", alt: "React" },
  { src: "/images/javascript.webp", alt: "JavaScript" },
  { src: "/images/typescript.webp", alt: "TypeScript" },
  { src: "/images/node.webp", alt: "Node.js" },
  { src: "/images/express.webp", alt: "Express" },
  { src: "/images/mongo.webp", alt: "MongoDB" },
  { src: "/images/mysql.webp", alt: "MySQL" },
  { src: "/images/docker.png", alt: "Docker" },
  { src: "/images/Kubernetes1.png", alt: "Kubernetes" },
  { src: "/images/Ansible.png", alt: "Ansible" },
  { src: "/images/aws.png", alt: "AWS" },
  { src: "/images/DataDog.png", alt: "DataDog" },
  { src: "/images/Firebase.png", alt: "Firebase" },
  { src: "/images/Flutter.png", alt: "Flutter" },
  { src: "/images/Grafana.png", alt: "Grafana" },
  { src: "/images/HELM.png", alt: "Helm" },
  { src: "/images/helm1.png", alt: "Helm" },
  { src: "/images/jenkins.png", alt: "Jenkins" },
  { src: "/images/Terraform.png", alt: "Terraform" },
  { src: "/images/Prometheus.png", alt: "Prometheus" },
  { src: "/images/python.png", alt: "Python" },
];

const TechStackMobile = () => {
  return (
    <section className="techstack-mobile" id="techstack" aria-label="Tech stack">
      <h2>My Tech Stack</h2>
      <div className="techstack-grid">
        {techLogos.map((logo) => (
          <div className="techstack-item" key={logo.alt}>
            <img src={logo.src} alt={logo.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackMobile;
