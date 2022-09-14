import "./App.css";
import All from "./components/All";
import PersistentDrawerLeft from "./components/Navbar/Navbar";
import { TopTittleProvider } from "./context";
import { OrderContextProvider } from "./orderContext";
import { SearchProvider } from "./searchContext";

function App() {
  return (
    <TopTittleProvider>
      <OrderContextProvider>
        <SearchProvider>
            <All />
        </SearchProvider>
      </OrderContextProvider>
    </TopTittleProvider>
  );
}

export default App;
