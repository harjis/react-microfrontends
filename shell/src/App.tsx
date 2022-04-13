import React, { Suspense } from "react";
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
      <div>
        <Suspense fallback={<div>Loading Main app...</div>}>
          <RemoteComponent
            module="./Content"
            relativePath="/content_mf"
            remoteComponentProps={{}}
            scope="react_microfrontends_content"
          />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
