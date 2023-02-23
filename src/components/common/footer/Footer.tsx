import React from "react";

import {
    Box,
    Container,
    Typography,
    Link
} from "@mui/material"

type Props = {};

export default function Footer({}: Props) {
    return (
        <Box
            className="footer"
            bgcolor={(theme) => theme.palette.divider}
            sx={{ flexShrink: 0 }}
            mt={3}
            //mt={(theme) => `max(${theme.spacing(3)}, auto)`}
        >
            <Container maxWidth="lg">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                >
                    <Typography variant="body1">
                        Made with ❤️ by{" "}
                        <Link
                            color="inherit"
                            fontWeight="bold"
                            href="https://github.com/vvelc"
                        >
                            vvelc
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
