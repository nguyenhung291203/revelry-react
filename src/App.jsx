import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Sidebar, Topbar } from "./components/commons";
import { Dashboard } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="admin-layout d-flex flex-column">
          <div className="d-flex flex-grow-1">
            <Sidebar />
            <main className="content flex-grow-1 p-3">
              <Topbar /> 
              <Routes>
                <Route path="/admin/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
