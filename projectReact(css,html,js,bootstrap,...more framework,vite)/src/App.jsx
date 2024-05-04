import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../pages/Layout";
import PropertyLists from "../pages/PropertyLists";
import About from "../pages/about";
import Login from "../pages/login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="PropertyLists" element={<PropertyLists />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
