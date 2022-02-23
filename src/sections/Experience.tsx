import React from "react";
import { Row, Col } from "react-bootstrap";
import { Section, Timeline } from "../components";
import e from "../data/experience.json";

const experience = e.experience;

export class Experience extends React.Component {
  render() {
    return (
      <Section id="experience" title="Experience">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experience.map((e) => (
                <Timeline
                  key={e.company}
                  time={e.period}
                  title={e.title}
                  icon={["fas", "briefcase"]}
                  left="-7px"
                >
                  <b>{e.company}</b>
                  <div dangerouslySetInnerHTML={{ __html: e.description }} />
                  <div dangerouslySetInnerHTML={{ __html: e.link }} />
                </Timeline>
              ))}

              <span className="line" />
            </div>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Experience;
