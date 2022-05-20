import React, { Component } from "react";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import DropDownMenu from "../components/DropDownMenu/DropDownMenu";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItemHover: false,
      popupMenu: "",
    };
  }

  handleDisplayPopup = (e) => {
    this.setState({ menuItemHover: true });
    this.setState({ popupMenu: e.target.textContent });
  };

  handleCollapsePopup = (e) => {
    this.setState({ menuItemHover: true });
  };

  render() {
    return (
      <main>
        <div>
          <Navigation
            handleDisplayPopup={this.handleDisplayPopup.bind(this)}
            handleCollapsePopup={this.handleCollapsePopup.bind(this)}
          />
          
          {this.state.menuItemHover && (
            <DropDownMenu heading={this.state.popupMenu} />
          )}

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
}

export default App;
