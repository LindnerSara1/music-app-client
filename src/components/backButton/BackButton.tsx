import { useNavigate } from "react-router-dom";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { IconButton } from "@mui/material";
export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <IconButton
        onClick={() => {
          navigate("/Songs");
        }}
      >
        <ArrowCircleLeftIcon />
      </IconButton>
    </>
  );
};
