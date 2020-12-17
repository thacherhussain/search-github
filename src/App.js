import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./custom.scss";
import RepoState from "./context/RepoState"
import Layout from "./components/Layout"
import Home from "./pages/Home"

const App = () => {
  return (
    <RepoState>
      <BrowserRouter>
        <Layout>
          <Home />
        </Layout>
      </BrowserRouter>
    </RepoState>
  )
}

export default App
