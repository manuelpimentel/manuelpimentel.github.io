// src/utils/analytics.ts
import ReactGA from "react-ga4";

const measurementId = "G-3V7D9LZQ3X";  // Replace with your Measurement ID

export const initializeAnalytics = () => {
  ReactGA.initialize(measurementId);
};

export const logPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};  

export const logButtonClick = (buttonName: string) => {
  ReactGA.event({
    category: "Button",
    action: "Click",
    label: buttonName,
  });
};