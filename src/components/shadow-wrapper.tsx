import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

interface ShadowWrapperProps {
  children: React.ReactNode;
}

const ShadowWrapper = ({ children }: ShadowWrapperProps) => {
  // Ref for the host div where the shadow root will be attached
  const hostRef = useRef<HTMLDivElement>(null);
  // Ref to store the shadow root to prevent multiple attachments
  const shadowRootRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    if (!hostRef.current) return;

    // Attach the shadow root only once
    shadowRootRef.current ||= hostRef.current.attachShadow({ mode: "open" });

    // Create a wrapper div inside the shadow DOM for React rendering
    const wrapper = document.createElement("div");
    shadowRootRef.current.appendChild(wrapper);

    // Mount the children inside the shadow DOM using React 18+ method
    const root = createRoot(wrapper);
    root.render(<>{children}</>);

    return () => {
      // Cleanup by scheduling unmount asynchronously to avoid the synchronous unmount issue
      requestAnimationFrame(() => {
        root.unmount();
        wrapper.remove(); // Clean up the wrapper div
      });
    };
  }, [children]);

  return <div ref={hostRef} />;
};

export default ShadowWrapper;
