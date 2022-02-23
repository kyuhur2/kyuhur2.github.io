import React from "react";
import { Row, Col } from "react-bootstrap";
import { Skill, Counter, Section } from "../components";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import about from "../data/about.json";

export class About extends React.Component {
  render() {
    return (
      <Section id="about" title="About Me">
        <Row>
          <Col md={2}>
            <Row>
              <Col md={12}>
                <div className="text-center mb-3">
                  <img
                    src={about.avatar}
                    alt="Kyu Hur"
                    style={{ width: "150px" }}
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={10} className="triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <Row>
                <Col md={8}>
                  <div dangerouslySetInnerHTML={{ __html: about.objective }} />
                  <div className="mt-3 mb-3">
                    {/* <Button variant="kd">Download CV</Button> */}
                    <a
                      href="https://github.com/kyuhur2"
                      className="btn btn-kd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Github
                    </a>
                  </div>
                </Col>
                <Col md={4}>
                  {about.skills.map((skill) => (
                    <Skill
                      key={skill.name}
                      title={skill.name}
                      percent={skill.confidence}
                      backgroundColor={skill.color}
                    />
                  ))}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          {about.statistics.map((statistic) => (
            <Counter
              key={statistic.title}
              className="col-md-4 col-sm-6"
              description={statistic.title}
              count={statistic.number}
              icon={[
                statistic.iconPrefix as IconPrefix,
                statistic.iconName as IconName,
              ]}
            />
          ))}
        </Row>
      </Section>
    );
  }
}

export default About;
