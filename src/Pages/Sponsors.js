import React, { useContext, useEffect, useState } from "react";
import { NavigationBar } from "../components/PageNavbar";
import Construction from "../components/Construction";
import { Ring } from "react-awesome-spinners";

function Sponsors() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center my-5">
        <Ring />
        <h3>Loading</h3>
      </div>
    );
  }
  return (
    <div>
      <NavigationBar color={true} page={"sponsors"} />
      <section className="m-5">
        <Construction />
      </section>
    </div>
  );
}

export default Sponsors;
