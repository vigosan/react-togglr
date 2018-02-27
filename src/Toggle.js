import { Component } from 'react';
import PropTypes from 'prop-types';

class Toggle extends Component {
  static propTypes = {
    children: PropTypes.func,
    defaultOn: PropTypes.bool,
    render: PropTypes.func,
    onToggle: PropTypes.func
  };

  static defaultProps = {
    children: () => null,
    defaultOn: false,
    onToggle: () => {},
    render: () => null
  };

  state = {
    on: this.props.defaultOn
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
