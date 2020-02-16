import React from "react";
import styled from "styled-components";

const WorkHisDiv = styled.div`
  & h2 {
    margin-bottom: 0px;
    font-size: 20px;
  }
  & h3 {
    margin: 0;
    font-size: 16px;
  }
  & h4 {
    font-size: 12px;
    margin-top: 5px;
  }
  & p {
    font-size: 12px;
    margin-top: 0;
  }
`;
export default function WorkHistory() {
  return (
    <WorkHisDiv>
      <h1>Work History</h1>
      <h2>WorkForceLogiq</h2>
      <h3>Support Analyst</h3>
      <h4>Aug. 2016  to Sept. 2019</h4>
      <p>
        Provided technical support to clients and other team members.
        Implemented a troubleshooting wiki  and an automated case generating
        system that allowed for a 50% reduce of the workforce without
        sacrificing customer service. Headed the team that implemented
        regression testing for a scheduling and payroll software.
      </p>
      <h2>Loki Management System</h2>
      <h3>Support Analyst</h3>
      <h4>Mar. 2014  to Aug. 2016</h4>
      <p>
        Created environments and deployed software. Developed procedures that
        reduced upgrade times by 4 hours.
      </p>
      <h3>Tier 1 Customer Support Representative</h3>
      <h4>May 2012  to Apr. 2014</h4>
      <p>
        Resolved customer issues with scheduling and payroll software.
        Implemented an email response system that reduce case resolutions but 20
        minutes. Analyzed and wrote queries for SQL databases. Delivered end
        user training.
      </p>
      <h3>Internal Systems Specialist</h3>
      <h4>June 2011  to May 2012</h4>
      <p>
        Customized and upgraded Microsoft Dynamics CRM, and SharePoint created
        custom reports reducing searching for information by up to 30 minutes
        and making the information available internationally.
      </p>
    </WorkHisDiv>
  );
}
