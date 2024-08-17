import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { publicRoutes } from "./routes/routes.js";
import PublicRoutes from "./routes/publicRoutes/publicRoutes.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          {publicRoutes.map((item, index) => {
            const Component = item.component
            if (item.layout)
              return (
                <Route element={<Layout />} key={index}>
                  <Route
                    path={item.path}
                    element={
                      <Component />
                    }
                    key={index}
                  />
                  </Route>
              );
            return (
              <Route
                path={item.path}
                element={<Component />}
                key={index}
              />
            );
          })}{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
