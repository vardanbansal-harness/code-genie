import { useEffect } from "react";

const styleSheetCache = new Map<string, CSSStyleSheet>();

interface SharedStyleProps {
  styleId: string;
  styleAsString?: string;
}

const SharedStyle = ({ styleId, styleAsString }: SharedStyleProps) => {
  useEffect(() => {
    const applyStyle = (root: Document | ShadowRoot) => {
      if (!(root instanceof ShadowRoot)) return;

      let styleSheet = styleSheetCache.get(styleId);

      // If no cached stylesheet exists and we have new styles, create and cache it
      if (!styleSheet && styleAsString) {
        styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(styleAsString);
        styleSheetCache.set(styleId, styleSheet);
      }

      // Apply cached stylesheet to shadow root
      if (styleSheet && !root.adoptedStyleSheets.includes(styleSheet)) {
        root.adoptedStyleSheets = [...root.adoptedStyleSheets, styleSheet];
      }
    };

    // Apply styles to existing and future shadow roots
    const observer = new MutationObserver(() => {
      document.querySelectorAll("*").forEach((el) => {
        if (el.shadowRoot) applyStyle(el.shadowRoot);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Apply styles to already existing shadow roots
    document.querySelectorAll("*").forEach((el) => {
      if (el.shadowRoot) applyStyle(el.shadowRoot);
    });

    return () => observer.disconnect(); // Cleanup on unmount
  }, [styleId, styleAsString]); // Only re-run when `styleId` or `styleAsString` changes

  return null;
};

export default SharedStyle;
