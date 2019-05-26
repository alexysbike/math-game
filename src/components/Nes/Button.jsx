import React from 'react';
import PropTypes from 'prop-types';
import clx from 'classnames';

const variantMap = {
  primary: 'is-primary', success: 'is-success', warning: 'is-warning', error: 'is-error', disabled: 'is-disabled',
};

const Button = ({
  component: Component = 'button', variant, className, ...props
}) => {
  const additionalClass = !variant || !variantMap[variant] ? undefined : variantMap[variant];
  const finalClassNames = clx('nes-btn', additionalClass, className);
  return (
    <Component className={finalClassNames} type="button" {...props} />
  );
};

Button.propTypes = {
  component: PropTypes.node,
  variant: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  component: 'button',
  variant: null,
  className: null,
};

export default Button;
