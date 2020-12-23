import React from "react";
import "./App.css";
import AboutPage from "./components/AboutPage";
import Header from "./components/Header";
import Project from "./components/Project";

import TypingGameImage from "./assets/typinggame.png";
import AnimeSearchImage from "./assets/animesearch.png";
import CalculatorImage from "./assets/calculator.png";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

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
                    appLink: "",
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <Header />
                <AboutPage />
                {/* <ContactPage /> */}
                <h1>Projects</h1>
                <Project
                    projectTitle={this.state.project[0].projectTitle}
                    projectImageUrl={this.state.project[0].projectImageUrl}
                    projectSourceCode={this.state.project[0].projectSourceCode}
                    appLink={this.state.project[0].appLink}
                />
                <Project
                    projectTitle={this.state.project[1].projectTitle}
                    projectImageUrl={this.state.project[1].projectImageUrl}
                    projectSourceCode={this.state.project[1].projectSourceCode}
                    appLink={this.state.project[1].appLink}
                />
                <Project
                    projectTitle={this.state.project[2].projectTitle}
                    projectImageUrl={this.state.project[2].projectImageUrl}
                    projectSourceCode={this.state.project[2].projectSourceCode}
                    appLink={this.state.project[2].appLink}
                />
                <Footer />
            </div>
        );
    }
}
