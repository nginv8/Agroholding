import type { CollectionBeforeChangeHook } from 'payload';

interface RichTextNode {
  type?: string;
  text?: string;
  children?: RichTextNode[];
}

const extractTextFromRichText = (
  content: RichTextNode | RichTextNode[] | null | undefined
): string => {
  if (!content) return '';

  if (Array.isArray(content)) {
    return content.map((node) => extractTextFromRichText(node)).join(' ');
  }

  if (content.type === 'text') {
    return content.text || '';
  }

  if (content.children && Array.isArray(content.children)) {
    return content.children.map((child) => extractTextFromRichText(child)).join(' ');
  }

  return '';
};

export const autoGenerateSEO: CollectionBeforeChangeHook = ({ data }) => {
  if (!data.meta) {
    data.meta = {};
  }

  if (!data.meta.title && data.title) {
    data.meta.title = data.title;
  }

  if (!data.meta.description) {
    if (data.excerpt && typeof data.excerpt === 'string') {
      data.meta.description = data.excerpt;
    } else {
      const content = data.content;
      if (content) {
        const textContent = extractTextFromRichText(content as RichTextNode | RichTextNode[]);

        if (textContent.trim()) {
          data.meta.description =
            textContent.substring(0, 157) + (textContent.length > 157 ? '...' : '');
        }
      }
    }
  }

  if (!data.meta.image && data.heroImage) {
    data.meta.image = data.heroImage;
  }

  return data;
};
