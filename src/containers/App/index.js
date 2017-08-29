import React from "react";
import AppBar from "material-ui/AppBar";
import DataTable from "../../components/DataTable";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const App = () =>
  <div>
    <MuiThemeProvider>
      <AppBar title="ADCHALLENGE" showMenuIconButton={false} />
    </MuiThemeProvider>
    <MuiThemeProvider>
      <DataTable />
    </MuiThemeProvider>
  </div>;

export default App;
