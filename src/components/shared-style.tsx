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

      if (!styleSheet && styleAsString) {
        styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(styleAsString);
        styleSheetCache.set(styleId, styleSheet);
      }

      if (styleSheet && !root.adoptedStyleSheets.includes(styleSheet)) {
        root.adoptedStyleSheets = [...root.adoptedStyleSheets, styleSheet];
      }
    };

    // Apply styles to all shadow roots in the document
    const observer = new MutationObserver(() => {
      document.querySelectorAll("*").forEach((el) => {
        if (el.shadowRoot) applyStyle(el.shadowRoot);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial application of styles
    document.querySelectorAll("*").forEach((el) => {
      if (el.shadowRoot) applyStyle(el.shadowRoot);
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [styleId, styleAsString]);

  return null; // No actual DOM output needed
};

export default SharedStyle;
