import { Themes } from "./components/Themes/Themes";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { NotFound } from "./components/NotFound/NotFound";
import { Theme } from "./components/Theme/Theme";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="theme/:theme" element={<Themes />} />
        <Route path="theme/:theme/:id" element={<Theme />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
