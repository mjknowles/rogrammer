import { MutableRefObject, RefObject, useRef, useState } from "react";

interface ViewerProps {
  aiHtml: string;
}

const Viewer = (props: ViewerProps) => {
  return <iframe title="viewer" srcDoc={props.aiHtml}></iframe>;
};

export default Viewer;
