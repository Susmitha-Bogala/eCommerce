import logo from "./logo.svg";
import "./App.css";

import Inc from "./Inc";
import Dec from "./Dec";
import { Provider } from "react-redux";
import FinalStore from "./redux/store";
import UserList from "./userList";
import Login from "./login";

function App() {
  return (
    <Provider store={FinalStore}>
      <div>
        <Inc />
        <Login />
        <Dec />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
