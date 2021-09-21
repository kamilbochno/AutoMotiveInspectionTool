import React from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import '../../pages/LoggedIn/Dashboard.css';
import Vehicles from '../../pages/VehiclesPage/VehicleList/Vehicles';
import IdleTimerContainer from '../../pages/LoggedIn/components/IdleTimerContainer';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import VehiclesDashboard from '../../pages/LoggedIn/Dashboard';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <IdleTimerContainer/>
      <GridContainer>
        <GridItem>
          <Card>
            <Vehicles/>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
