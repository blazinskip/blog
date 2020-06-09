import imageReadTime from './image-read-time';
import wordsReadTime from './words-read-time';
import stripTags from './strip-tags';
import stripWhitespace from './strip-whitespace';
import humanizeTime from './humanize-time';

function timeToReadArticle(string) {
  const imageTime = imageReadTime(string);
  const strippedWhitespaces = stripWhitespace(string);
  const strippedString = stripTags(strippedWhitespaces);
  const { wordTime, wordCount } = wordsReadTime(strippedString);
  const totalTime = imageTime + wordTime;
  return {
    humanized: humanizeTime(totalTime),
    duration: totalTime,
    totalWords: wordCount,
  };
}

export default timeToReadArticle;
