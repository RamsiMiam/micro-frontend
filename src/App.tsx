import Header from "./components/Header/Header.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";

import MainLayout from "./layouts/MainLayout/MainLayout.tsx";

import AppRouter from "./router/AppRouter";

function App() {
  return (
    <MainLayout
      header={<Header title="Micro Dashboard" />}
      sidebar={<Sidebar />}
    >
      <AppRouter />
    </MainLayout>
  );
}

export default App;