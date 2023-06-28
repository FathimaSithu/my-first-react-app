import React, { useState, useEffect, useMemo } from "react";
// import ListItem from "./listitem";
import Tools from "../components/tools";
import SimpleList from "../list/simplelist";
import { MyContext, MyNewContext } from "./mycontext";
import Justinfo from "./justinfo";
import { act } from "react-dom/test-utils";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [activeState, setActiveState] = useState("all");
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    console.log("componentDidMount");
    fetch("/data.json")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  }, []);

  const handleRefresh = () => {
    console.log("Refresh");
    fetch("/data2.json")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  };

  const onListChange = (evt) => {
    console.log(evt.target.value);
    const value = evt.target.value;

    setActiveState(value);
  };

  const handleDelete = (item) => {
    console.log("delete", item);
    const newList = data.filter((element) => element.id !== item.id);
    setData(newList);
  };

  const handleLabelClick = (arg) => {
    setActiveState(arg);
  };

  const handleShowLabel = (evt) => {
    setShowLabel(evt.target.checked);
  };

  const newList = useMemo(() => {
    return data.filter((item) => {
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
  }, [data, activeState]);

  const value = useMemo(() => {
    return {
      key: "value",
      activeState: activeState
    };
  }, [activeState]);

  return (
    <div>
      <div>
        <input
          checked={showLabel}
          onChange={handleShowLabel}
          type="checkbox"
        ></input>
        Show label
      </div>
      <MyNewContext.Provider value={100}>
        <MyContext.Provider value={showLabel}>
          <Tools labelValue={activeState} onAction={onListChange}>
            <SimpleList
              onLabelClick={handleLabelClick}
              data={newList}
              onAction={handleDelete}
            />
          </Tools>
          <Justinfo testValue={value} activeState={activeState} />
        </MyContext.Provider>
      </MyNewContext.Provider>
    </div>
  );
};

export default HomePage;