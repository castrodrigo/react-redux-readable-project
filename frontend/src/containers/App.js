import React from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import PostPage from "./Post/Page";
import PostNew from "./Post/New";
import PostEdit from "./Post/Edit";

class App extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  render() {
    return this.props.loading ? (
      <LoadingBar />
    ) : (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/new" component={PostNew} />
          <Route path="/edit/:id" component={PostEdit} />
          <Route path="/:category" exact component={Dashboard} />
          <Route path="/:category/:id" component={PostPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  loading:
    Object.entries(categories).length === 0 && categories.constructor === Object
});

const mapDispatchToProps = dispatch => ({
  loadInitialData: () => dispatch(handleInitialData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
