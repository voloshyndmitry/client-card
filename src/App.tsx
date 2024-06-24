import { Stack } from "@mui/material";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <Stack justifyContent={"space-between"}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Stack>
  );
}

export default App;
