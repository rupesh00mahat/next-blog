import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Define the path to the folder containing your JSON files
  const folderPath = path.join(process.cwd(), 'src', 'blogs'); // Replace with your folder path

  try {
    // Read all the files in the folder
    const files = fs.readdirSync(folderPath);

    // Filter out only JSON files
    const jsonFiles = files.filter((file) => file.endsWith('.json'));

    // Read and parse each JSON file
    const allContent = jsonFiles.map((file) => {
      const filePath = path.join(folderPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    });

    // Send the parsed JSON data as a response
    res.status(200).json(allContent);
  } catch (err) {
    res.status(500).json({ message: 'Error reading files',error: err instanceof Error ? err.message : err });
  }
}
