import { Header } from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/global.scss";
import { ServiceSearch } from "./components/ServiceSearch";
import { AllServices } from "./components/AllServices";

export function App() {
  return (
    <>
      <Header />
      <ServiceSearch />
      <AllServices />
    </>
  );
}
