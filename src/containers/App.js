
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";


const App = (props) => {
    return (
      <main>
        <div>
          <Navigation />

          <Header />

          <div className="flex flex-row justify-center items-center gap-16 py-[45px] pt-[60px]">
            <Button title={"Sign up to continue"} padding={"px-16"} />{" "}
            <span className="text-custom-pink cursor-pointer hover:opacity-70">
              or sign in
            </span>
          </div>

          <Footer />
        </div>
      </main>
    );
}

export default App;
