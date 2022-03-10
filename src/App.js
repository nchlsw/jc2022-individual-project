import { Box, Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import ContentCard from "./components/contentCard";

function App() {
  return (
    <Box paddingX="16">
      <Center>
        <ContentCard></ContentCard>
      </Center>
    </Box>
  );
}

export default App;
