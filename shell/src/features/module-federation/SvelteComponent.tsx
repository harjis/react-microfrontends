import React, { useEffect, useRef } from "react";
import { loadComponent } from "./utils";

type Props = {
  scope: string;
  module: string;
};
export const SvelteComponent = (props: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    const asyncLoadComponent = async () => {
      const module = loadComponent(props.scope, props.module);
      const { mount } = await module();
      mount(ref.current);
    };

    asyncLoadComponent();
  }, []);

  return <div ref={ref} />;
};
