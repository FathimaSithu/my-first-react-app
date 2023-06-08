import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HomePage from "../pages/homepage";
import DummyPage from "./dummypage";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: "home",
    };
  }
  handleMenuSelect = (value) => {
    console.log(value);
    this.setState({
      currentSelected: value,
    });
  };
   getPage(){
const{
    currentSelected
}=this.state;
switch(currentSelected){
case 'home':
    return <HomePage/>
    case 'contacts':
    return <DummyPage  key="contacts" name="contacts"/>
    case 'settings':
        return <DummyPage key="settings" name="settings"/>
        case 'logout':
            return <DummyPage  key="logout" name="logout"/>
            default:
                break;
}
  }
  render() {
    return (
      <div className="app">
        <Header onMenuSelect={this.handleMenuSelect} />
        <div className="app-body">
         {this.getPage()}
        </div>
        <Footer />
      </div>
    );
  }
}
export default MyApp;
