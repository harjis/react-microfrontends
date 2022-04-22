import React, { Suspense } from "react";
import { RemoteComponent, RemoteSvelteComponent } from "./features/module-federation";

function App() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        background: "pink",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
        I'm shell!
        <Suspense fallback={<div>Loading Main app failed</div>}>
          <RemoteComponent
            module="./Content"
            relativePath="/content_mf"
            remoteComponentProps={{}}
            scope="react_microfrontends_content"
          />
        </Suspense>
        <Suspense fallback={<div>Loading Main app failed</div>}>
          <RemoteSvelteComponent
            module="./loadApp"
            relativePath="/svelte_content_mf"
            remoteComponentProps={{}}
            scope="react_microfrontends_svelte_content"
          />
        </Suspense>
    </div>
  );
}

export default App;
