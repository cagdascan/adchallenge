import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchHotels } from "../../actions/hotels";

import { makeHotelsData, makeHotelsLoadingData } from "../../selectors/hotels";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from "material-ui/Table";

import Progress from "../Progress";
import DataRow from "./row";

class DataTable extends Component {
  componentWillMount() {
    this.props.fetchHotels();
  }

  renderRows(items) {
    if (items) {
      return items.map((item, idx) => {
        return [
          <DataRow key={idx} item={item} />,
          item.expanded && this.renderRows(item.children)
        ];
      });
    }
    return null;
  }

  render() {
    const { loading, hotels } = this.props;

    if (loading) {
      return <Progress />;
    }

    return (
      <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Expand/Collapse</TableHeaderColumn>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
            <TableHeaderColumn>City</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Delete</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderRows(hotels)}
        </TableBody>
      </Table>
    );
  }
}

DataTable.propTypes = {
  hotels: PropTypes.array,
  loading: PropTypes.bool
};

const mapDispatchToProps = dispatch => ({
  fetchHotels: () => dispatch(fetchHotels())
});

const mapStateToProps = createStructuredSelector({
  hotels: makeHotelsData(),
  loading: makeHotelsLoadingData()
});

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
