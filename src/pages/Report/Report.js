import React from "react";
import "./Report.css";
import { Designer } from "@grapecity/activereports-react";

function Report() {
  return (
    <div id="designer-host">
      <Designer report={{ id: "report.rdlx-json", displayName: "my report" }} />
    </div>
  );
}

export default Report;
