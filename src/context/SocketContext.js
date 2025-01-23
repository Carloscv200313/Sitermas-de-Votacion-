import {  createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext= createContext()
export const SocketProvider= ({children})=>{
    const {socket,online}= useSocket("https://votos-banda-8a0394ae6417.herokuapp.com/")
    return(
        <SocketContext.Provider value={{socket,online}} >
            {children}
        </SocketContext.Provider>
    )
}