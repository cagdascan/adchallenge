import React, { Component } from 'react';
import { connect } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DataTable from '../../components/DataTable';
import { fetchHotels } from "../../actions/hotels";
import './style.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchHotels();
  }

  render () {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar title="ADCHALLENGE" />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <DataTable />
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchHotels: () => dispatch(fetchHotels())
});

export default connect(null, mapDispatchToProps)(App);
