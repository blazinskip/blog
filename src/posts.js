import all from '../posts/*.md';
import timeToReadArticle from './utils/time-to-read-article';
import { format } from 'date-fns';

export const posts = all
  .filter(({ metadata }) => metadata.published)
  .map(transform)
  .sort((a, b) => b.date - a.date);

const allCategories = all
  .filter(({ metadata }) => metadata.published)
  .map(transform)
  .reduce((acc, { categories }) => [...acc, ...categories], []);

export const categories = Array.from(new Set(allCategories));

function transform({ filename, html, metadata }) {
  // TODO: rename permalink to link
  const permalink = filename.replace(/\.md$/, '');
  const date = format(new Date(metadata.date), 'MMMM dd, yyyy');
  const readInformation = timeToReadArticle(html);

  return { ...metadata, filename, html, permalink, date, readInformation };
}

export function findPost(permalink) {
  return posts.find((post) => post.permalink === permalink);
}
