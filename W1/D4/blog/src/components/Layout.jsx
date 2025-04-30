import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="p-5">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
