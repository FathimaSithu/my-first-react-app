import React from "react";
// import ListItem from "./listitem";
import Tools from "../components/tools";
import SimpleList from "../list/simplelist";
import { MyContext,MyNewContext } from "./mycontext";
import Justinfo from "./justinfo";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      activeState: "all",
      showLabel:true
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("/data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }
  handleRefresh() {
    console.log('Refresh');
    fetch('/data2.json')
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      this.setState({
        data:data
      });
    })

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.message !== this.state.message) {
      this.setState({
        message: "message",
      });
    }
  }

  onListChange = (evt) => {
    console.log(evt.target.value);
    const value = evt.target.value;

    this.setState({
      activeState: value,
    });
  };
  handleDelete = (item) => {
    console.log("delete", item);
    const newList = this.state.data.filter((element) => element.id !== item.id);
    this.setState({
      data: newList,
    });
  };
  handleLabelClick = (arg) => {
    this.setState({
      activeState: arg,
    });
  };
  handleShowLabel = (evt) => {
this.setState({
showLabel:evt.target.checked
});
  };

  render() {
    const { data, activeState } = this.state;
    const newList = data.filter((item) => {
      if (activeState === "all") {
        return true;
      }
      if (activeState === "active") {
        return item.isActive === true;
      }
      if (activeState === "nonactive") {
        return item.isActive === false;
      }
      return false;
    });
    return (
      <div>
        <div>
          <input checked ={this.state.showLabel} onChange={this.handleShowLabel} type="checkbox"></input>Show label
        </div>
        <MyNewContext.Provider value = {100}>
        <MyContext.Provider value = {this.state.showLabel}>
      <Tools labelValue={activeState} onAction={this.onListChange}>
        <SimpleList
          onLabelClick={this.handleLabelClick}
          data={newList}
          onAction={this.handleDelete}
        />
      </Tools>
      <Justinfo activeState = {activeState}/>
      </MyContext.Provider>
      </MyNewContext.Provider>
      </div>
    );
  }
}

export default HomePage;
