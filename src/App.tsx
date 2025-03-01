import { Box, Heading } from "@chakra-ui/react";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <Box p={5}>
      <Heading mb={5}>Class Management</Heading>
      <AddStudent />
    </Box>
  );
}

export default App;
