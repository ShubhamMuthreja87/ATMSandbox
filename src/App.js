import { Box, grid, Text } from "theme-ui";

export default function App() {
  const styles = {
    mainContainer: {
      backgroundColor: "#9e9e9e",
      height: "100vh",
      width: "100vw"
    },
    headingBox :{
         textAlign:"center",
         display:"block"
    },
    mainHeading:{
        color:"#fff",
       fontSize :"40Px"
    }
  };
  return (
    <Box sx={styles.mainContainer}>
        <Box sx={styles.headingBox}>
      <Text sx={styles.mainHeading}>Welcome to ATM Simulator</Text>
      </Box>
      <Box></Box>
    </Box>
  );
}
