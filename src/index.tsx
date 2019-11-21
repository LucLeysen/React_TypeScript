import * as React from "react";
import * as ReactDom from "react-dom";

const App: React.SFC = () => {
  return <h1> My React and TypeScript app!</h1>;
};

ReactDom.render(<App />, document.getElementById("root") as HTMLElement);
