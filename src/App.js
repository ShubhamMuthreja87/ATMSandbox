import { Box, grid, Text } from "theme-ui";

export default function App() {
  const styles = {
    mainContainer: {
      backgroundColor: "#9e9e9e",
      height: "100vh",
      width: "100vw"
    }
  };
  return (
    <Box sx={styles.mainContainer}>
      <Text>Welcome to ATM Simulator</Text>
      <Box></Box>
    </Box>
  );
}
