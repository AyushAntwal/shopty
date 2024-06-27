import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
    palette: {
    },
    typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "0.75rem",
                    boxShadow: "0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1)",
                    "& .MuiOutlinedInput-input": {
                        padding: "0.5rem",
                        borderRadius: "0.75rem",
                    },
                },
                inputAdornedStart: {
                    scaleX: 0.75,
                }
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0.75rem",
                },

            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: '#f6f6f6',
                    backdropFilter: 'blur(10px)',
                    borderRadius: "0.5rem",
                    boxShadow: "0 0.5rem 0.5rem 0.25rem rgba(0, 0, 0, 0.1)",
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    }
                },
            },
        }
    },

});