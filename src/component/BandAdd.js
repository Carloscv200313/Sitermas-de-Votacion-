import React, { useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { useContext } from "react";
export const BandAdd = () => {
    const {socket}= useContext(SocketContext)
    const [valor, setValor]= useState("")
    const onSubmit= (e) => {
        e.preventDefault();
        if(valor.trim().length>0){
            socket.emit("Crear banda", valor)
            setValor("")
        }
    }
    return (
        <>
            <h3> Agregar Banda</h3>
            <form onSubmit={onSubmit}>
                <input
                    className="form-control"
                    placeholder="Ingresa la nueva banda"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />
            </form>
        </>
    );
};
