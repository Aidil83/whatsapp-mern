import { useEffect, useRef } from "react";

function AlwaysScrollToBottom() {
  let bottomRef: any = useRef(null);
  useEffect(() => bottomRef.current.scrollIntoView());
  return <div ref={bottomRef} />;
}

export default AlwaysScrollToBottom;
