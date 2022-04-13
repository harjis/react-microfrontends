import React from "react";
import { RemoteComponent } from "./features/module-federation";

function App() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        background: "pink",
        justifyContent: "center",
      }}
    >
      I'm shell!
      <RemoteComponent
        module="./Content"
        relativePath="/content_mf"
        remoteComponentProps={{}}
        scope="content"
      />
    </div>
  );
}

export default App;
