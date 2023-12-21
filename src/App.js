import { Route, Routes } from "react-router-dom"; 
import './App.css';
import CreateProject from "./pages/projectPages/create";
import DisplayProjects from "./pages/projectPages/display";
import UploadFiles from "./pages/projectPages/uploadFiles";
import EditTranscript from "./pages/projectPages/editTransript";
import WidgetConfiguration from "./pages/widgetPages";
import AccountPage from "./pages/accountPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateProject/>}/>
        <Route path="/display-project" element={<DisplayProjects/>}/>
        <Route path="/project/upload/:projectName" element={<UploadFiles/>}/>
        <Route path="/project/transcript/:projectName/:fileId" element={<EditTranscript/>}/>
        <Route path="/widget-configuration" element={<WidgetConfiguration/>}/>
        <Route path="/account" element={<AccountPage/>}/>
      </Routes>
    </>
  );
}

export default App;
