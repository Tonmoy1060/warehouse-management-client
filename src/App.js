import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Registration from "./pages/Login/Registration/Registration";
import Footer from "./shared/Footer/Footer";

import Header from "./shared/Header/Header";
import NotFound from "./shared/NotFound/NotFound";
import ServiceDetail from "./pages/Home/ServiceDetail/ServiceDetail";

import ManageInventory from "./pages/ManageInventory/ManageInventory";
import RequireAuth from "./shared/RequireAuth/RequireAuth";
import AddItem from "./pages/AddItems/AddItem";

function App() {
  return (
    <div>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/items/:itemId"
            element={<RequireAuth>
              <ServiceDetail></ServiceDetail>
            </RequireAuth>}
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/manageItems"
            element={<ManageInventory></ManageInventory>}
          ></Route>
          <Route path='/addItems' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>}>
        </Route>
        {/* <Route path='/deleteservice' element={
          <RequireAuth>
            <DeleteService></DeleteService>
          </RequireAuth>}>
        </Route> */}
          <Route
            path="/register"
            element={<Registration></Registration>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
