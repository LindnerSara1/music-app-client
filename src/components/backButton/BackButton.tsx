import { useNavigate } from "react-router-dom";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ArrowCircleLeftIcon
      onClick={() => {
        navigate(-1);
      }}
    />
  );
};
