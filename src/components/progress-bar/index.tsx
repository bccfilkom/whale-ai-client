"use client";
import { AppProgressBar } from "next-nprogress-bar";

const ProgressBar = () => {
  return (
    <AppProgressBar
      height="4px"
      color="#256BED"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default ProgressBar;
