import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
  marginRight: 24,
};

const UpArrowIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </SvgIcon>
);

const CollapseButton = (props) => (
  <UpArrowIcon style={iconStyles} onClick={props.onClick} />
);

CollapseButton.propTypes = {
  onClick: PropTypes.func
};

export default CollapseButton;
