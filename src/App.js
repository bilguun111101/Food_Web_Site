import "./App.css";
import All from "./components/All";
import PersistentDrawerLeft from "./components/Navbar/Navbar";
import { TopTittleProvider } from "./context";

function App() {
  return (
    <TopTittleProvider>
      <>
        <All />
      </>
    </TopTittleProvider>
  );
}

export default App;
