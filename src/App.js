import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 10;

  state = {
    progress: 0,
  };

  setProgress = (progress)  => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Blog
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <Blog
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country="us"
                  category="business"
                />
              } 
            />
            <Route
              exact
              path="/entertainment"
              element={
                <Blog
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <Blog
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <Blog
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <Blog
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <Blog
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  country="us"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <Blog
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            {/* <Route exact path="/" element={<Blog setProgress={this.setProgress}  key="" pageSize={this.pageSize} country="us" category="general" />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
