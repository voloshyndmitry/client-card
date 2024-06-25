import { Stack } from "@mui/material";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { StateProvider } from "../contexts/StateProvider";
import "./_reset.css";
import UserDetails from "./UserDetails/UserDetails";

function App() {
  return (
    <StateProvider>
      <Stack justifyContent={"space-between"}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Stack>
      <UserDetails />
    </StateProvider>
  );
}

export default App;
