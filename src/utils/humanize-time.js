function humanizeTime(time) {
  if (time < 0.5) {
    return 'less than a minute';
  }
  if (time >= 0.5 && time < 1.5) {
    return '1 minute';
  }
  return `${Math.ceil(time)} minutes`;
}

export default humanizeTime;
