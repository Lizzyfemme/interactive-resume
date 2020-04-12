import React from "react";
import styled from "styled-components";

const EducationDiv = styled.div`
  & h2 {
    font-size: 14px;
    margin-top: 0px;
    margin-bottom: 7px;
  }
  & h3 {
    margin-top: 0px;
    font-size: 12px;
  }
  & h4 {
    font-size: 14px;
    margin-left: 5px;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: right;
    width: 100px;
  }
  & p {
    margin-top: 0px;
    font-size: 12px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 570px) {
    & h2 {
      font-size: 24px;
    }
    & h3 {
      font-size: 18px;
      margin-bottom: 0;
    }
    & h4 {
      font-size: 24px;
      width: auto;
    }
    & p {
      font-size: 18px;
      margin-top: 10px;
    }
  }
  @media screen and (min-width: 710px) {
    & h2 {
      font-size: 24px;
    }
    & h3 {
      font-size: 20px;
      margin-bottom: 0;
    }
    & h4 {
      font-size: 24px;
      width: auto;
    }
    & p {
      font-size: 20px;
      margin-top: 10px;
    }
  }
`;
const EdArticle = styled.article`
  font-family: main;
  padding-bottom: 10px;
  @media screen and (min-width: 710px) {
    padding-bottom: 15px;
  }
`;
const EdHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export default function Edcuation() {
  return (
    <EducationDiv>
      <h1>Education</h1>
      <EdArticle>
        <EdHeader>
          <h2>Lighthouse Labs</h2>
          <h4>Dec 2019</h4>
        </EdHeader>
        <h3>Diploma Web Development</h3>
      </EdArticle>
      <EdArticle>
        <EdHeader>
          <h2>British Columbia Institute of Technology</h2>
          <h4>April 2018</h4>
        </EdHeader>
        <h3>Certificate Applied Computer Information System</h3>
        <p>Courses: Tableau, MS Server, MS SQL</p>
      </EdArticle>
      <EdArticle>
        <EdHeader>
          <h2>Emily Carr University of Art and Design</h2>
          <h4>June 2006</h4>
        </EdHeader>
        <h3>BFA Major in Visual Arts</h3>
        <p>Courses: Web Design, Digital Photography, Digital Arts, Animation</p>
      </EdArticle>
    </EducationDiv>
  );
}
