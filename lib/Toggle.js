import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Toggle extends Component {
  static propTypes = {
    render: PropTypes.func,
    onToggle: PropTypes.func
  };

  static defaultProps = {
    children: () => null,
    render: () => null,
    onToggle: () => {}
  };

  state = {
    on: false
  };

  toggle = () => {
    this.setState(
      prevState => {
        return { on: !prevState.on };
      },
      () => this.props.onToggle(this.state)
    );
  };

  getRenderProps() {
    const { onToggle } = this.props;

    return { onToggle, toggle: this.toggle, ...this.state };
  }

  render() {
    const { children, render } = this.props;
    const renderProps = this.getRenderProps();

    if (render) {
      return render(renderProps);
    }

    return children(renderProps);
  }
}

export default Toggle;