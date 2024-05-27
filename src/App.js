import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./Routes";
import DefaultPage from "./Components/Default/DefaultPage";
import { Fragment } from "react";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((item) => {
            const Page = item.page;
            const Layout = item.isShowHeader ? DefaultPage : Fragment;
            return (
              <Route
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
