import { Stack } from "@mui/material";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { StateProvider } from "./contexts/StateProvider";

function App() {
  return (
    <StateProvider>
      <Stack justifyContent={"space-between"}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Stack>
    </StateProvider>
  );
}

export default App;
