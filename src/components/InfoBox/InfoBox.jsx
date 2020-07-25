import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
import CountUp from "react-countup";

function InfoBox({ title, cases, total, classTitle, active, ...props }) {
  if (!total) {
    return (
      <Card
        onClick={props.onClick}
        className={`infoBox ${active && "infoBox-selected"} ${classTitle}`}
      >
        <CardContent>
          <Typography
            className="infoBox-title"
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography className={`infoBox-cases ${classTitle}`}>
            <h2>
              <CountUp start={0} end={0} duration={2.5} />
            </h2>
          </Typography>
          <Typography className="infoBox-total" color="textSecondary">
            <CountUp start={0} end={0} duration={2.5} /> Total
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox-selected"} ${classTitle}`}
    >
      <CardContent>
        <Typography
          className="infoBox-title"
          color="textSecondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography className={`infoBox-cases ${classTitle}`}>
          <h2>
            +<CountUp start={0} end={cases} duration={2.5} separator="." />
          </h2>
        </Typography>
        <Typography className="infoBox-total" color="textSecondary">
          <CountUp start={0} end={total} duration={2.5} separator="." /> Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
