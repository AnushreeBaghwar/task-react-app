import { useInput } from "@mui/core";
import { styled } from "@mui/material/styles";
import React from "react";
const StyledInputElement = styled("input")`
  width: 15rem;
  height: 1rem;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-style: italic;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 20px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  //   &:hover {
  //     background: #eaeef3;
  //     border-color: #e5e8ec;
  //   }

  &:focus {
    outline: none;
    width: 25rem;
    transition: width 200ms ease-out;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props, ref);

  return (
    <div {...getRootProps()}>
      <StyledInputElement {...props} {...getInputProps()} />
    </div>
  );
});
export default CustomInput;
