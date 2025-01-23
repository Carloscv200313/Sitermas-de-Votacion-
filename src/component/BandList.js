import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
export const BandList = () => {
    const { socket } = useContext(SocketContext);
    const [bandas, setBandas] = useState([]);

    useEffect(() => {
        socket.on("evento", (bandas) => {
            console.log(bandas)
            setBandas(bandas);
        });
        return ()=> socket.off("evento");
    }, [socket]);

    const handleNameChange = (e, id) => {
        const newName = e.target.value;
        setBandas((prev) =>
            prev.map((banda) =>
                banda.id === id ? { ...banda, name: newName } : banda
            )
        );
    };
    const AumentarVotos = (id) => {
        //console.log(id)
        socket.emit("Aumentar Votos", id);
    };
    const DeleteBand = (id) => {
        //console.log(id)
        socket.emit("Borrar banda", id);
    };
    const CambiarNombre = (id, newNombre) => {
        //console.log(id)
        socket.emit("Cambiar nombre", { id, newNombre });
    };
    const CreateRow = () => {
        return bandas.map((banda) => (
            <tr key={banda.id}>
                <td>
                    <button
                        className="btn btn-primary"
                        onClick={() => AumentarVotos(banda.id)}
                    >
                        +1
                    </button>
                </td>
                <td>
                    <input
                        id="nombre"
                        className="form-control"
                        value={banda.name}
                        onChange={(e) => handleNameChange(e, banda.id)}
                        onBlur={(e) => CambiarNombre(banda.id, e.target.value)}
                    />
                </td>
                <td>
                    <h3>{banda.votos}</h3>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => DeleteBand(banda.id)}
                    >
                        Borrar
                    </button>
                </td>
            </tr>
        ));
    };

    return (
        <table className="table table-stripped">
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Votos</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>{CreateRow()}</tbody>
        </table>
    );
};
