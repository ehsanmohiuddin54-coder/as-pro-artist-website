import { useEffect } from "react";

/**
 * Lightweight per-page SEO — sets document title and meta description
 * without pulling in react-helmet. Good enough for a Vite SPA; if the
 * site later needs server-rendered meta tags for social crawlers,
 * swap this for a proper SSR/prerender solution.
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
