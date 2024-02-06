import { useState } from "react";

interface PrompterProps {}

const Prompter = (props: PrompterProps) => {
  const [customHtml, setCustomHtml] = useState(<html>Hello world!</html>);

  return (
    <div>
      <input type="text" id="prompt-input" placeholder="Type your message..." />
      <button id="send-button">Send</button>
    </div>
  );
};

export default Prompter;
