import { useContext } from "react";
import { BandAdd } from "./component/BandAdd";
import { BandList } from "./component/BandList";
//import { useSocket } from "./hooks/useSocket";
import { SocketContext } from "./context/SocketContext"
import HorizontalBars from "./component/Grafica";


function App() {
  const { online } = useContext(SocketContext)
  return (
    <div className="container">
      <div className="alert">
        <p>
          Service Status:
          {
            online ? (<span className="text-success">Online</span>) : (<span className="text-danger">Offline</span>)
          }
        </p>
      </div>
      <hr />
      <h1> Grafica de las bandas</h1>
      <hr />
      <HorizontalBars />
      <hr />
      <h1> Nombre de las bandas</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <BandList />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>

    </div>
  );
}

export default App;
