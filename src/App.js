import "./App.css";
import All from "./components/All";
import PersistentDrawerLeft from "./components/Navbar/Navbar";
import { TopTittleProvider } from "./context";
import { OrderContextProvider } from "./orderContext";

function App() {
  return (
    <TopTittleProvider>
      <OrderContextProvider>
        <>
          <All />
        </>
      </OrderContextProvider>
    </TopTittleProvider>
  );
}

export default App;
