const timeRequiredForReadImage = 12;

function imageCount(string) {
  const combinedImageTags = ['img'].join('|');
  const pattern = `<(${combinedImageTags})([\\w\\W]+?)[\\/]?>`;
  const reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
}

function imageReadTime(string) {
  let seconds = 0;
  const count = imageCount(string);

  if (count > 10) {
    seconds = (count / 2) * (timeRequiredForReadImage + 3) + (count - 10) * 3; // n/2(a+b) + 3 sec/image
  } else {
    seconds = (count / 2) * (2 * timeRequiredForReadImage + (1 - count)); // n/2[2a+(n-1)d]
  }
  return seconds / 60;
}

export default imageReadTime;
