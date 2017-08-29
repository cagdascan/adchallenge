import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TableRow, TableRowColumn } from "material-ui/Table";

import DeleteButton from "../Buttons/deleteButton";
import ExpandButton from "../Buttons/expandButton";
import CollapseButton from "../Buttons/collapseButton";
import { expandElement, collapseElement, deleteElement } from "../../actions/hotels";

class DataRow extends Component {
  handleCollapse(id) {
    this.props.collapseElement(id);
  }

  handleExpand(id) {
    this.props.expandElement(id);
  }

  handleDelete(id) {
    this.props.deleteElement(id);
  }

  render() {
    const { item: { ID, Phone, City, Name, expanded, children } } = this.props;

    return (
      <TableRow hoverable>
        <TableRowColumn>
          {children && !expanded && <ExpandButton onClick={() => this.handleExpand(ID)} />}
          {children && expanded && <CollapseButton onClick={() => this.handleCollapse(ID)} />}
        </TableRowColumn>
        <TableRowColumn>
          {ID}
        </TableRowColumn>
        <TableRowColumn>
          {Phone}
        </TableRowColumn>
        <TableRowColumn>
          {City}
        </TableRowColumn>
        <TableRowColumn>
          {Name}
        </TableRowColumn>
        <TableRowColumn>
          <DeleteButton onClick={() => this.handleDelete(ID)} />
        </TableRowColumn>
      </TableRow>
    );
  }
}

DataRow.propTypes = {
  item: PropTypes.object,
  expandElement: PropTypes.func,
  collapseElement: PropTypes.func,
  deleteElement: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  expandElement: (id) => dispatch(expandElement(id)),
  collapseElement: (id) => dispatch(collapseElement(id)),
  deleteElement: (id) => dispatch(deleteElement(id))
});

export default connect(null, mapDispatchToProps)(DataRow);
