import "./App.css";
import Layout from "../Layout/Layout";
import Login from "../components/Login/Login";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import useToken from "../hooks/useToken";
import Result from "../components/Result/Result";

function App() {
  const { token, setToken } = useToken();
  if (token == null) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
