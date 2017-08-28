import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  makeHierarchicalHotelsData,
  makeHotelsLoadingData
} from "../../selectors/hotels";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

import Progress from "../Progress";
import Row from "./row";
import './style.css';

class DataTable extends Component {
  render() {
    const { loading, hotels } = this.props;

    if (loading) {
      return <Progress />;
    }

    const rows = hotels.map((item, idx) => {
      return (
        <Row 
          item={item}
          key={idx}
        />
      );
    });

    return (
      <table>
        <thead>  
          <tr>
            <td>ID</td>
            <td>Phone</td>
            <td>City</td>
            <td>Name</td>
          </tr>
        </thead>
        {rows}
      </table>
    );
  }
}

DataTable.propTypes = {
  hotels: PropTypes.array,
  loading: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  hotels: makeHierarchicalHotelsData(),
  loading: makeHotelsLoadingData()
});

export default connect(mapStateToProps)(DataTable);
