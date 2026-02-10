import { createTheme } from "@mantine/core";

const theme = createTheme({
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
  colors: {
    brand: [
      "#f8fafc",
      "#e2e8f0",
      "#cbd5e1",
      "#94a3b8",
      "#64748b",
      "#475569",
      "#334155",
      "#1e293b",
      "#0f172a",
      "#020617",
    ],
  },
  fontFamily: 'Georgia, "Times New Roman", Times, serif',
  headings: {
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
  },
  defaultRadius: "sm",
});

export default theme;
