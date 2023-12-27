import React from "react";
import UserContextModule from "@/context/user";

export const useUser = () => {
    return React.useContext(UserContextModule?.UserContext);
};
