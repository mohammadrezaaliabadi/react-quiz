import "./App.css";
import Layout from "../Layout/Layout";
import Login from "../components/Login/Login";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import useToken from "../hooks/useToken";

function App() {
  const { token, setToken } = useToken();
  console.log(token);
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="container">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/home">
              <Home authorized={false} />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
