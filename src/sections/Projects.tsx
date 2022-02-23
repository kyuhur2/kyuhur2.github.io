import React from "react";
import { Section, ProjectBox } from "../components";
import { Row, Col } from "react-bootstrap";
import ProjectConfig from "../data/projects.json";
import PublicationConfig from "../data/publications.json";

const projects = ProjectConfig.projects;
const publications = PublicationConfig.publications;

const Pulse = require("react-reveal/Pulse");

export class Projects extends React.Component {
  render() {
    return (
      <Section id="projects" title="Projects &amp; Publications">
        <h3>Projects</h3>
        <Row>
          {projects.map((proj) => (
            <Col md={4} key={proj.title}>
              <Pulse delay={proj.delay}>
                <ProjectBox
                  title={proj.title}
                  backgroundColor={proj.backgroundColor}
                >
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{ __html: proj.content }}
                  />
                  <div dangerouslySetInnerHTML={{ __html: proj.link }} />
                </ProjectBox>
              </Pulse>
            </Col>
          ))}
        </Row>
        <h3>Publications (Selected)</h3>
        <Row>
          {publications.map((pub) => (
            <Col md={4} key={pub.title}>
              <Pulse delay={pub.delay}>
                <ProjectBox
                  title={pub.title}
                  backgroundColor={pub.backgroundColor}
                >
                  <div
                    className="mb-0"
                    dangerouslySetInnerHTML={{ __html: pub.content }}
                  />
                  <div dangerouslySetInnerHTML={{ __html: pub.link }} />
                </ProjectBox>
              </Pulse>
            </Col>
          ))}
        </Row>
        <Row>
          <Col md={12}>
            <div className="mt-3 text-center">
              <div
                className="mb-0"
                dangerouslySetInnerHTML={{
                  __html: ProjectConfig.customContent,
                }}
              />
            </div>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Projects;
