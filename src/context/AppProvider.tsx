import React, { useState, useEffect, createContext } from "react";
import { userDataArrType } from "../pages/Dashboard/UserDataTypes.types";

type AppProviderProps = {
  children: React.ReactNode;
};

type apiDataType = userDataArrType | [];

export const AppContext = createContext<apiDataType>([]);

const AppProvider = (props: AppProviderProps) => {
  const [userDataArr, setUserDataArr] = useState<apiDataType>([]);
  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) => response.json().then((data) => setUserDataArr(data)))
      .catch((error) => console.log(error));
  });

  return (
    <AppContext.Provider value={userDataArr}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
