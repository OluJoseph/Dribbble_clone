import { useState, useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

const App = (props) => {
  return (
    <main className={`main w-[100vw]`}>
      <div>
        <Navigation />

        <Header />

        <div className="flex flex-row justify-center items-center gap-4 sm:gap-16 py-[45px] pt-[60px] px-4">
          <Button title={"Sign up to continue"} padding={"px-16"} />{" "}
          <span className="w-max text-custom-pink cursor-pointer hover:opacity-70">
            or sign in
          </span>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default App;
