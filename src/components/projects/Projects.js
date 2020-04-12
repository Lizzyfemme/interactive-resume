import React from "react";
import styled from "styled-components";
import { dark, highlight } from "../../styles/colors";

const ProjectList = styled.ul`
  width: 80vw;
  padding: 0;
  margin: auto;
  font-family: main;

  li {
    display: flex;
    padding-top: 10px;
    h1 {
      margin: 0px;
      font-family: main_bold;
      font-size: 30px;
    }
    h2 {
      margin: 0;
      font-size: 20px;
      margin-botton: 5px;
    }
    img {
      padding-right: 10px;
    }
    button {
      width: 100px;
      height: 25px;
      background-color: ${dark};
      color: ${highlight};
      font-family: main_bold;
      border-radius: 15px;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
`;

export default function Projects() {
  return (
    <ProjectList>
      <li>
        <img
          alt="Communiqué screenshot"
          src={require("./images/communique.png")}
        />
        <div>
          <header>
            <h1>Communiqué</h1>
            <h2>March 2020</h2>
          </header>
          <p>
            This is a messaging app created to learn about Angular and
            TypeScript. Some of the features include: user authentication,
            authorization, and pagination.
          </p>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Lizzyfemme/communique"
          >
            <button>code</button>
          </a>
        </div>
      </li>

      <li>
        <img
          alt="Plantastic screenshot"
          src={require("./images/plantastic.png")}
        />
        <div>
          <header>
            <h1>Plantastic</h1>
            <h2>December 2019</h2>
          </header>
          <p>
            Plantastic is an app, created with React and Rails, that integrates
            with hardware to automatically water plants.
          </p>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Lizzyfemme/plantastic"
          >
            <button>code</button>
          </a>
        </div>
      </li>

      <li>
        <img alt="Jungle screenshot" src={require("./images/jungle.png")} />
        <div>
          <header>
            <h1>Jungle</h1>
            <h2>November 2019</h2>
          </header>
          <p>
            A mini e-commerce application with funny products built with Rails
            4.2 for purpose of learning Rails. The stack includes, PostgreSQL,
            Stripe, RSpec, Poltergeist/Capybara, Boostrap.
          </p>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Lizzyfemme/jungle"
          >
            <button>code</button>
          </a>
        </div>
      </li>

      <li>
        <img
          alt="interview_scheduler screenshot"
          src={require("./images/interview_scheduler.png")}
        />
        <div>
          <header>
            <h1>Interview Scheduler</h1>
            <h2>November 2019</h2>
          </header>
          <p>
            An app for creating interviews. The stack includes axios,
            classnames, normalize.css, react, react-dom, react-scripts, jest,
            cypress.
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Lizzyfemme/Interview_scheduler"
          >
            <button>code</button>
          </a>
        </div>
      </li>

      <li>
        <img
          alt="interview_scheduler screenshot"
          src={require("./images/hungry_people.png")}
        />
        <div>
          <header>
            <h1>Hungry People</h1>
            <h2>October 2019</h2>
          </header>
          <p>
            Food pickup app using Twillo to send SMS message to customer cell
            phones. The stack includes Node, Express, Postgres and Twillio.
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Lizzyfemme/Interview_scheduler"
          >
            <button>code</button>
          </a>
        </div>
      </li>

      <li>
        <img
          alt="interview_scheduler screenshot"
          src={require("./images/tweeter.png")}
        />
        <div>
          <header>
            <h1>Tweeter</h1>
            <h2>October 2019</h2>
          </header>
          <p>
            A chat app much like twitter. The stack includes Express, Node,
            body-parser, chance and md5.
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Lizzyfemme/Interview_scheduler"
          >
            <button>code</button>
          </a>
        </div>
      </li>

      <li>
        <img
          alt="interview_scheduler screenshot"
          src={require("./images/tiny_app.png")}
        />
        <div>
          <header>
            <h1>Tiny App</h1>
            <h2>September 2019</h2>
          </header>
          <p>
            A URL Shortener. The stack includes Node.js, Express, EJS, bcrypt,
            body-parser and cookie-session.
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Lizzyfemme/Interview_scheduler"
          >
            <button>code</button>
          </a>
        </div>
      </li>
    </ProjectList>
  );
}
