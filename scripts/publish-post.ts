import * as fs from 'fs';

(async () => {
  if (process.argv.length === 2) {
    console.error('Expected at least one argument!');
    process.exit(1);
  } else {
    const postPath = process.argv[2];

    try {
      const data = await readFileData(postPath);
      const updatedData = data
        .replace('published: false', 'published: true')
        .replace('date: null', `date: ${getCurrentISODate()}`);

      await writeFile(postPath, updatedData);
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
})();

async function writeFile(path: string, content: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, 'utf8', (err) => (err ? reject(err) : resolve()));
  });
}

async function readFileData(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => (err ? reject(err) : resolve(data)));
  });
}

function getCurrentISODate(): string {
  return new Date().toISOString().substring(0, 10);
}
