export const useSocialShare = (title: string) => {
  const getPageUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return '';
  };

  const shareOnFacebook = () => {
    const url = getPageUrl();
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareOnTwitter = () => {
    const url = getPageUrl();
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      '_blank'
    );
  };

  const shareOnLinkedIn = () => {
    const url = getPageUrl();
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const copyToClipboard = async () => {
    const url = getPageUrl();
    try {
      await navigator.clipboard.writeText(url);
    } catch (_err) {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  return {
    shareOnFacebook,
    shareOnTwitter,
    shareOnLinkedIn,
    copyToClipboard,
  };
};
