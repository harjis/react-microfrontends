import React from "react";

import { useDynamicScript } from "./useDynamicScript";
import { SvelteComponent } from "./SvelteComponent";

type Props<RemoteComponentProps> = {
  module: string;
  relativePath: string;
  remoteComponentProps: RemoteComponentProps;
  scope: string;
};
export const RemoteSvelteComponent = <RemoteComponentProps,>(
  props: React.PropsWithChildren<Props<RemoteComponentProps>>
) => {
  const { scope, module } = props;
  const url = `${window.location.origin}${props.relativePath}`;
  const remote = {
    url: `${url}/remoteEntry.js`,
    scope,
    module,
  };
  const { ready, failed } = useDynamicScript({
    url: remote.url,
  });

  if (!ready) {
    return <h2>Loading dynamic script: {remote.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {remote.url}</h2>;
  }

  return <SvelteComponent scope={remote.scope} module={remote.module} />;
};
