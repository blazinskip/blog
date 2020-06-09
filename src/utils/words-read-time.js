const wordsPerMinute = 275; // wpm

function wordsCount(string) {
  const pattern = '\\w+';
  const reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
}

function wordsReadTime(string) {
  const wordCount = wordsCount(string);
  const wordTime = wordCount / wordsPerMinute;
  return {
    wordTime,
    wordCount,
  };
}

export default wordsReadTime;
