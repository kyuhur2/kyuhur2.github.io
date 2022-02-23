import React from "react";
import { Row, Col } from "react-bootstrap";
import { Section, Timeline } from "../components";
import e from "../data/education.json";

const education = e.education;

export class Education extends React.Component {
  render() {
    return (
      <Section id="education" title="Education">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {education.map((e) => (
                <Timeline
                  key={e.degree}
                  time={e.period}
                  title={e.school}
                  icon={["fas", "graduation-cap"]}
                >
                  <b>{e.degree}</b>
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

export default Education;
