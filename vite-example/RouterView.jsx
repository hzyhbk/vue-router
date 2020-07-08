import { React, createElement, Fragment } from "es-react";
import RouterContext from "./RouterContext";

function isComponent(cpt) {
  return typeof cpt === "function";
}

class RouterView extends React.Component {
  router = null;
  unlisten = () => {};

  constructor(props) {
    super(props);
    this.router = props.router;
    this.state = {
      currentRoute: this.router.currentRoute,
    };
    this.unlisten = this.router.history.listen((route) => {
      this.setState({ currentRoute: route });
    });
    this.renderRoute = this.renderRoute.bind(this);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  renderRoute(matched) {
    if (!matched || matched.length === 0) {
      return null;
    }
    let cpt = matched[0].component;
    if (cpt) {
      if (!isComponent(cpt)) {
        return null;
      }
    } else {
      cpt = Fragment;
    }

    const props = {
      children: this.renderRoute(matched.slice(1)),
    };

    if (matched[0].component) {
      Object.assign(props, {
        currentRoute: this.state.currentRoute,
        router: this.router,
      });
    }

    return createElement(cpt, props);
  }

  render() {
    const { currentRoute } = this.state;
    return (
      <RouterContext.Provider
        value={{
          currentRoute,
          router: this.router,
        }}
      >
        {this.renderRoute(currentRoute.matched)}
      </RouterContext.Provider>
    );
  }
}

export default RouterView;
