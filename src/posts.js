import all from '../posts/*.md'

export const posts = all // begin a chain
  .map(transform) // transform the shape of each post
  .sort((a, b) => b.date - a.date);

// function for reshaping each post
function transform({filename, html, metadata}) {
  // the permalink is the filename with the '.md' ending removed
  const permalink = filename.replace(/\.md$/, '')

  // convert date string into a proper `Date`
  const date = new Date(metadata.date)

  // return the new shape
  return {...metadata, filename, html, permalink, date}
}

// provide a way to find a post by permalink
export function findPost(permalink) {
  // use lodash to find by field name:
  return posts.find(post => post.permalink === permalink);
}
