import { MutableRefObject, RefObject, useRef, useState } from "react";

interface ViewerProps {
  iframeRef: RefObject<HTMLIFrameElement>;
  aiHtml: string;
}

const Viewer = (props: ViewerProps) => {
  return (
    <iframe ref={props.iframeRef} title="viewer" srcDoc={props.aiHtml}></iframe>
  );
};

export default Viewer;
