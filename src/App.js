import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default class App extends Component {
  pageSize = 10;
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Blog key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<Blog key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<Blog key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/health" element={<Blog key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<Blog key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<Blog key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<Blog key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
            <Route exact path="/general" element={<Blog key="general" pageSize={this.pageSize} country="us" category="general" />} />
            {/* <Route exact path="/" element={<Blog key="" pageSize={this.pageSize} country="us" category="general" />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
