import React from "react";
import Typed from "typed.js";

export default class extends React.Component {
  rootElement = React.createRef();

  componentDidMount() {
    const { style, typedRef, stopped, className, ...typedOptions } = this.props;

    this.constructTyped(typedOptions);

    if (stopped) {
      this.typed.stop();
    }
  }

  constructTyped(options = {}) {
    const { style, typedRef, stopped, className, ...typedOptions } = this.props;

    if (this.typed) {
      this.typed.destroy();
    }

    this.typed = new Typed(
      this.rootElement.current,
      Object.assign(typedOptions, options)
    );

    if (this.props.typedRef) {
      this.props.typedRef(this.typed);
    }

    this.typed.reConstruct = (opts) => {
      this.constructTyped(opts);
    };
  }

  shouldComponentUpdate(nextProps) {
    if (this.props !== nextProps) {
      const {
        style,
        typedRef,
        stopped,
        className,
        ...typedOptions
      } = nextProps;

      this.typed.options = Object.assign(this.typed.options, typedOptions);
      const reConstructed = !Object.keys(nextProps).every((key) => {
        if (!this.props[key] && nextProps[key]) {
          this.constructTyped(nextProps);
          return false;
        }
        if (this.typed[key]) {
          this.typed[key] = nextProps[key];
        }
        return true;
      });
      if (
        !reConstructed &&
        this.props.strings.length !== nextProps.strings.length
      ) {
        this.constructTyped(nextProps);
      }
      return true;
    }
    return false;
  }

  render() {
    const { style, className, children } = this.props;

    let child = <span ref={this.rootElement} />;

    if (children) {
      child = React.cloneElement(children, {
        ref: this.rootElement,
      });
    }

    return (
      <span style={style} className={className}>
        {child}
      </span>
    );
  }
}
