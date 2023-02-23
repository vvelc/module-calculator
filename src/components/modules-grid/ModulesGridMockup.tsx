import { Box } from "@mui/material";
import React from "react";

type Props = {
    realScreenHeight: number;
    realScreenWidth: number;
};

export default function ModulesGridMockup({realScreenHeight, realScreenWidth}: Props) {
    return (
        <Box
            className="content__result-container__grid"
            //display={hideResult ? 'none' : 'block'}
            alignItems="center"
            //wrap="nowrap"
            //p={1}
            sx={{
                "& img": {
                    width: "100%",
                },
            }}
            mb={2}
        >
            <img
                src={`https://via.placeholder.com/${realScreenWidth}x${realScreenHeight}/404040`}
                alt=""
            />
        </Box>
    );
}
