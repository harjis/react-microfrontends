import React from "react";

type Props = {
  url: string;
};
export const useDynamicScript = (props: Props) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!props.url) {
      return;
    }

    const element = document.createElement("script");

    element.src = props.url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${props.url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${props.url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${props.url}`);
      document.head.removeChild(element);
    };
  }, [props.url]);

  return {
    ready,
    failed,
  };
};
