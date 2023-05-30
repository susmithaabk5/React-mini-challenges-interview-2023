import React from "react";
import Box from "ui-box";

const SearchBar = ({ value, onChange }) => {
  return (
    <Box marginX={16} display="flex" alignItems="center" flexDirection="column">
      <Box is="p" color="white" marginRight={8}>
        Search:
      </Box>
      <Box
        is="input"
        type="text"
        backgroundColor="transparent"
        color="white"
        border="1px solid white"
        borderRadius={4}
        padding={4}
        height={30}
       value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default SearchBar;
