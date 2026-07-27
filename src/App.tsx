import Header from "./components/Header/Header.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx"

import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";

function App() {
  return (
    <MainLayout
      header={<Header title="Micro Dashboard" />}
      sidebar={<Sidebar />}
    >
      <Dashboard />
    </MainLayout>);
}

export default App;