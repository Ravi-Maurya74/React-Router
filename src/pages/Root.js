import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

export default function RootLayout() {
  return (
    <div>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
}
