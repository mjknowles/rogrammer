import { useState } from "react";

interface PrompterProps {
  onAiHtmlReceived: (html: string) => void;
}

const Prompter = (props: PrompterProps) => {
  const onSendClick = () => {
    props.onAiHtmlReceived(
      `<html>
        <head><title>Custom HTML in Iframe</title></head>
        <body>
          <h1>Button clicked!</h1>
        </body>
      </html>`
    );
  };

  return (
    <div>
      <input type="text" id="prompt-input" placeholder="Type your message..." />
      <button id="send-button" onClick={onSendClick}>
        Send
      </button>
    </div>
  );
};

export default Prompter;
