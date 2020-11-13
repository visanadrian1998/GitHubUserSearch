import React from "react";
import Svg, { Path } from "react-native-svg";

const Sun = (props) => {
  return (
    <Svg height={24} width={24} {...props}>
      <Path
        d="M12 0L8 4H3v5l-3 3 3 3v6h6l3 3 3-3h6v-6l3-3-3-3V4h-5l-4-4z"
        fill="#f39c12"
      />
      <Path d="M21 11.936a9 9 0 11-18 0 9 9 0 0118 0z" fill="#f1c40f" />
    </Svg>
  );
};

export default Sun;
