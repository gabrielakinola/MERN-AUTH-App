import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // console.log(process.env.REACT_APP_API_KEY);
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
