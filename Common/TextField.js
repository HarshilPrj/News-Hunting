import React from "react";
import PropTypes from "prop-types";
import "../styles/TextField.css";

const TextField = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-TextField--primary"
    : "storybook-TextField--secondary";
  return (
    <input
      type="text"
      className={[
        "storybook-TextField",
        `storybook-TextField--${size}`,
        mode,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    ></input>
  );
};

export default TextField;

TextField.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

TextField.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
