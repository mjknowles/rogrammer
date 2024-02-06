import { useRef, useState } from "react";
import "./App.css";
import Viewer from "./components/Editor/Viewer";
import Prompter from "./components/Prompter/Prompter";

function App() {
  const [aiHtml, setAiHtml] = useState(
    `<html>
      <head> <title>Custom HTML in Iframe</title></head>
      <body>
        <h1>Hello world!</h1>
      </body>
    </html>`
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const onAiHtmlReceived = (html: string) => {
    setAiHtml((oldHtml) => html);
    if (iframeRef.current?.srcdoc) iframeRef.current.srcdoc = aiHtml;
  };

  return (
    <main>
      <Viewer aiHtml={aiHtml} />
      <Prompter />
    </main>
  );
}

export default App;
