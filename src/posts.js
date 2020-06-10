import all from '../posts/*.md';
import timeToReadArticle from './utils/time-to-read-article';

export const posts = all
  .filter(({ metadata }) => metadata.published)
  .map(transform)
  .sort((a, b) => b.date - a.date);

function transform({ filename, html, metadata }) {
  // TODO: rename permalink to link
  const permalink = filename.replace(/\.md$/, '');
  const date = new Date(metadata.date);
  const readInformation = timeToReadArticle(html);

  return { ...metadata, filename, html, permalink, date, readInformation };
}

export function findPost(permalink) {
  return posts.find((post) => post.permalink === permalink);
}
