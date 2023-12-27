import React from "react";
import axios from "@/lib/axiosInstance";
import { createContext, ReactNode, useEffect } from "react";

interface MyProps {
    children?: ReactNode;
}

const UserContext = createContext({});

const UserContextProvider = (props: MyProps) => {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        axios
            .get("/users")
            .then(({ data }) => {
                setUsers(data);
            })
            .catch((error) => {});
    }, []);

    return <UserContext.Provider value={{ users }}>{props.children}</UserContext.Provider>;
};

const UserContextModule = { UserContextProvider, UserContext };
export default UserContextModule;
