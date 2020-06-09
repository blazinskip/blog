const reg = new RegExp('<\\w+(\\s+("[^"]*"|\\\'[^\\\']*\'|[^>])+)?>|<\\/\\w+>', 'gi');

function stripTags(string) {
  return string.replace(reg, '');
}

export default stripTags;
