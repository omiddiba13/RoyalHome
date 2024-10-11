import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../pages/Layout";
import PropertyLists from "../pages/PropertyLists";
import About from "../pages/about";
import User from "../pages/userPages/user";
import Login from "../pages/userPages/login";
import SignUp from "../pages/userPages/SignUp";
import { Properties } from "../pages/Properties";
import { PropertiesPages } from "../pages/PropertiesPages";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="PropertyLists" element={<PropertyLists />} />
					<Route path="about" element={<About />} />
					<Route path="*" element={<Error />} />
					<Route path="/Properties" element={<Properties />}></Route>
					<Route
						path="Properties/:PropertiesID"
						element={<PropertiesPages />}></Route>
					<Route path="User" element={<User />}>
						<Route path="login" element={<Login />} />
						<Route path="SignUp" element={<SignUp />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
