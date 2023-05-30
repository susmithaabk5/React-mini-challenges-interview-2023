import React, { useState } from "react";
import Box from "ui-box";
import Button from "../core/Button";

const ReportingDrawerGroup = ({ groupName, items, onSelectReport }) => {
  const [expanded, setExpanded] = useState(false);
debugger
  const buttonClick = () => {
    debugger;
    if (expanded) {
      setExpanded(!expanded);
    } else {
      setExpanded(!expanded);
    }
  };

  return (
    <Box width={300} padding={8}>
      <Button onClick={buttonClick} margin={4}>
        {groupName}
      </Button>

      {expanded && (
        <Box marginLeft={16} paddingY={8}>
          {items.map((item) => (
            <Box
              onClick={() => onSelectReport(item)}
              cursor="pointer"
              padding={8}
              key={item.name || item}
              color="white"
            >
              {item.name || item}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ReportingDrawerGroup;
