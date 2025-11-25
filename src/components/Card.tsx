import { Box } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <Box backgroundColor="gray.700" borderRadius="25px" padding="15px">
      { children }
    </Box>
  );
};
