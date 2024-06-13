import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
    // You can add more theme customization here
  });