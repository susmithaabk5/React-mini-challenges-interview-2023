import React, { useEffect, useState } from "react";
import Box from "ui-box";
import { fetchReports } from "./fetch-reports";
import ReportingDrawer from "./reporting-drawer";

const Reporting = () => {
  // stores name of report
  const [selectedReport, setSelectedReport] = useState(null);
  const [serverReports, setServerReports] = useState([]);

  useEffect(() => {
    async function getData() {
      const reports = await fetchReports();

      setServerReports(reports);
    }

    getData();
  }, []);

  return (
    <Box display="flex">
      <ReportingDrawer
        reports={serverReports}
        onSelectReport={setSelectedReport}
      />

      <Box flex={1} marginX={20}>
        <h2>Selected Report:</h2>
        {selectedReport ?? "No reports selected."}
      </Box>
    </Box>
  );
};

export default Reporting;
