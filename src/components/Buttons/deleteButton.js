import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from 'material-ui/SvgIcon';
import { red500, red900 } from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
};

const DeleteIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
  </SvgIcon>
);

const DeleteButton = (props) => (
  <DeleteIcon style={iconStyles} color={red500} hoverColor={red900} onClick={props.onClick} />
);

DeleteButton.propTypes = {
  onClick: PropTypes.func
};

export default DeleteButton;
