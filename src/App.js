import "./App.css";

import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_BLOG_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Blog
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
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
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
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
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
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
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
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
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
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
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
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
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
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
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
