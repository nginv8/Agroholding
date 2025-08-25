export const getTitleParts = (title?: string) => {
  if (!title) {
    return { parts: [{ text: '', isAccent: false }] };
  }

  const parts: { text: string; isAccent: boolean }[] = [];
  const regex = /{{(.+?)}}/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(title)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: title.slice(lastIndex, match.index), isAccent: false });
    }

    parts.push({ text: match[1], isAccent: true });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < title.length) {
    parts.push({ text: title.slice(lastIndex), isAccent: false });
  }

  return { parts: parts.length > 0 ? parts : [{ text: title, isAccent: false }] };
};
