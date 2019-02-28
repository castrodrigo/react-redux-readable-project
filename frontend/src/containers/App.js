import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { LoadingBar } from "react-redux-loading";
import { handleInitialData } from "../actions/shared";
import Home from "./Home";
import PostPage from "./PostPage";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <LoadingBar />
          {this.props.loading ? null : (
            <React.Fragment>
              <Route path="/" exact component={Home} />
              {/* <Route path="/:categpry/:id" component={Post} /> */}
              <Route path="/:id" component={PostPage} />
            </React.Fragment>
          )}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  loading: Object.entries(posts).length === 0 && posts.constructor === Object
});

export default connect(mapStateToProps)(App);
