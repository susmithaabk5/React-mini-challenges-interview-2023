import React from "react";
import Box from "ui-box";

const Button = (props) => {
  return (
    <Box
      // Makes it render a button html tag instead of a div
      is="button"
      // Some default styling that we can override
      cursor="pointer"
      color="white"
      backgroundColor="transparent"
      border="none"
      fontSize={16}
      {...props}
    ></Box>
  );
};

export default Button;
