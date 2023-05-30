import React, { useState,useEffect } from "react";
import Box from "ui-box";
import SearchBar from "../core/SearchBar";
import ReportingDrawerGroup from "./reporting-drawer-group";


const ReportingDrawer = ({ reports, onSelectReport }) => {
  const [filteredReports, setFilteredReports] = useState(reports);

  const onChange = (event) => {
    debugger
    const userInput = event.target.value.toLowerCase();
  
    const filteredData = Object.fromEntries(
      Object.entries(reports).filter(([groupName]) => {
        return groupName.toLowerCase().includes(userInput);
      })
    );
  
    setFilteredReports(filteredData);
  };
  
  
  useEffect(() => {
    setFilteredReports(reports); // Display all reports initially
  }, [reports]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      background="linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)"
      minHeight={500}
    >
      <SearchBar onChange={onChange} />
      {Object.entries(filteredReports).map(([groupName, items]) => {
        return (
          <ReportingDrawerGroup
            key={groupName}
            groupName={groupName}
            items={items}
            onSelectReport={onSelectReport}
          />
        );
      })}
    </Box>
  );
};

export default ReportingDrawer;
