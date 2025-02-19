import { useEffect, useRef } from "react";

export const SharedStyle = ({
  styleId,
  styleAsString,
}: {
  styleId: string;
  styleAsString?: string;
}) => {
  const styleElementRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (styleElementRef.current) {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        styleElementRef.current.replaceWith(existingStyle.cloneNode(true));
      } else {
        // Inject style inline
        styleElementRef.current.innerHTML = styleAsString || "";
        document.head.appendChild(styleElementRef.current);
      }
    }
  }, [styleId]);

  return <style ref={styleElementRef} id={styleId}></style>;
};
