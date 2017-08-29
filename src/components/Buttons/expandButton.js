import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
  marginRight: 24,
};

const DownArrowIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
  </SvgIcon>
);

const ExpandButton = (props) => (
  <DownArrowIcon style={iconStyles} onClick={props.onClick} />
);

ExpandButton.propTypes = {
  onClick: PropTypes.func
};

export default ExpandButton;
