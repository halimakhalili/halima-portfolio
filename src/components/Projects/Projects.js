import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="File Management System"
              description="A project for TeebAlhoor Company for handling and management of Files."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Task Management System"
              description="This Project is built in order to manage all the task for projects. It is used by TeebAlhoor Company"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TeebAlhoor ERP"
              description="Complete ERP system for TeebAlhoor Company. We Built this project with my great collegues in SmartFriqi Company."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Restaurant MIS"
              description="I built this project for a restaurant that is hosted locally. I use Larave, Vue, MySQL for this project."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Mohseni Foundation Website"
              description="I contributed to this project when I was working at code9ine company and I used WordPress, JavaScript, JQuery, Bootstrap, and MySQL for this project."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
