import { useRef, useState } from "react";
import "./App.css";
import Viewer from "./components/Editor/Viewer";
import Prompter from "./components/Prompter/Prompter";

function App() {
  const [aiHtml, setAiHtml] = useState(
    `<html>
      <head><title>Custom HTML in Iframe</title></head>
      <body>
        <h1>Hello world!</h1>
      </body>
    </html>`
  );

  const onAiHtmlReceived = (html: string) => {
    setAiHtml((oldHtml) => html);
  };

  return (
    <main>
      <Viewer aiHtml={aiHtml} />
      <Prompter onAiHtmlReceived={onAiHtmlReceived} />
    </main>
  );
}

export default App;
