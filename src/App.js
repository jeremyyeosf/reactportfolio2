import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/AboutPage";
import Project from "./components/Project";

import TypingGameImage from "./assets/typinggame.png";
import AnimeSearchImage from "./assets/animesearch.png";
import CalculatorImage from "./assets/calculator.png";
import Footer from "./components/Footer";
import IntroPage from "./components/IntroPage";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: {},
            project: [
                {
                    projectTitle: "Anime Search",
                    projectImageUrl: AnimeSearchImage,
                    projectSourceCode:
                        "https://github.com/jeremyyeosf/d17AnimeDB.git",
                    appLink: "https://animesearch-4c7lhkg5b.vercel.app/",
                },
                {
                    projectTitle: "Typing Game",
                    projectImageUrl: TypingGameImage,
                    projectSourceCode:
                        "https://github.com/jeremyyeosf/typinggame",
                    appLink: "",
                },
                {
                    projectTitle: "Simple Calculator",
                    projectImageUrl: CalculatorImage,
                    projectSourceCode:
                        "https://github.com/jeremyyeosf/JScalculator.git",
                    appLink: "https://js-calculator-taupe.vercel.app/",
                },
            ],
        };
    }

    render() {
        return (
            <Router>
                {/* initially used Header component here but unsure how to put <Link> into Header component */}
                <div className="p-grid p-align-center header">
                    <div className="p-text-bold header-heading p-col-4 p-offset-1 footer-text centertext">
                        Jeremy Yeo
                    </div>
                    <div className="p-col-4 p-offset-2">
                        <nav className="p-text-bold link">
                            <Link className="link-hover" to="/">
                                Home
                            </Link>
                            &nbsp;<span>|</span>&nbsp;
                            <Link className="link-hover" to="/about">
                                About
                            </Link>
                            &nbsp;<span>|</span>&nbsp;
                            <Link className="link-hover" to="/projects">
                                Projects
                            </Link>
                        </nav>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route path="/about">
                            <AboutPage />
                        </Route>
                        <Route path="/projects">
                            <div className="p-grid project-header">
                                <div className="p-col-3"></div>
                                <div className="p-col-6 about-text">
                                    <h2>My Projects</h2>
                                </div>
                                <div className="p-col-3"></div>
                            </div>
                            <Project
                                projectTitle={
                                    this.state.project[0].projectTitle
                                }
                                projectImageUrl={
                                    this.state.project[0].projectImageUrl
                                }
                                projectSourceCode={
                                    this.state.project[0].projectSourceCode
                                }
                                appLink={this.state.project[0].appLink}
                            />
                            <Project
                                projectTitle={
                                    this.state.project[1].projectTitle
                                }
                                projectImageUrl={
                                    this.state.project[1].projectImageUrl
                                }
                                projectSourceCode={
                                    this.state.project[1].projectSourceCode
                                }
                            />
                            <Project
                                projectTitle={
                                    this.state.project[2].projectTitle
                                }
                                projectImageUrl={
                                    this.state.project[2].projectImageUrl
                                }
                                projectSourceCode={
                                    this.state.project[2].projectSourceCode
                                }
                                appLink={this.state.project[2].appLink}
                            />
                        </Route>
                        <Route path="/">
                            <IntroPage />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        );
    }
}