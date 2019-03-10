import { BrowserRouter } from "react-router-dom";
import { shallow, mount, render } from "enzyme";
import { shape } from "prop-types";

const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {}
  }
};

const createContext = () => ({
  context: { router },
  childContextTypes: { router: shape({}) }
});

export function renderWrapper(wrapper) {
  return render(wrapper, createContext());
}

export function mountWrapper(wrapper) {
  return mount(wrapper, createContext());
}

export function shallowWrapper(wrapper) {
  return shallow(wrapper, createContext());
}
