import { parse } from 'csv-parse';
import fs from 'node:fs';

import { fetchUtil, waitUtil } from '../../utilities/index.js';

const csvPath = new URL('../../data/tasks.csv', import.meta.url);

const stream = fs.createReadStream(csvPath);

const csvParse = parse({
  delimiter: ',',
  skipEmptyLines: true,
  fromLine: 2,
});

async function uploadFileStream() {
  const rowsParse = stream.pipe(csvParse);
  let counter = 1;
  let fetchErrorMessage = '';
  const successMessage = 'Tasks created with success.';

  for await (const row of rowsParse) {
    const [title, description] = row;
    const csvData = { title, description };

    if (csvData) {
      try {
        await fetchUtil('tasks', csvData);
      } catch (error) {
        fetchErrorMessage = 'Unable to POST to route.';
      }
    }

    console.log(`[ INFO ]: Record ${counter} - '${title}' read.`);

    counter += 1;

    await waitUtil(500);
  }

  console.log(
    fetchErrorMessage
      ? `[ FINISHED ]: ${fetchErrorMessage}`
      : `[ FINISHED ]: ${successMessage}`
  );
}

uploadFileStream();
