import express from 'express';
import fs from 'fs/promises';
import path from 'path';

interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code';
}

interface LocalApiError {
  code: string;
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();
  router.use(express.json());

  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    const isLocalApiError = (err: any): err is LocalApiError => {
      return typeof err.code === 'string';
    };

    try {
      // Read the file
      const result = await fs.readFile(fullPath, { encoding: 'utf-8' });

      res.send(JSON.parse(result));
    } catch (error) {
      // If read throws an error
      // Inspect the error, see if it says that the file doesn't exist
      // Parse a list of cells out of it
      // Send list of cells back to the browser

      if (isLocalApiError(error)) {
        if (error.code === 'ENOENT') {
          await fs.writeFile(fullPath, '[]', 'utf-8');
          res.send([]);
        }
      } else {
        throw error;
      }
    }

    // Make sure the cell storage file exists
    // If it does not exist, add in a default list of cells
  });

  router.post('/cells', async (req, res) => {
    // Take the list of ceels from the request obj

    // Serialise them
    const { cells }: { cells: Cell[] } = req.body;

    // Write the cells into the file
    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');

    res.status(200).json({
      status: 'OK',
    });
  });

  return router;
};
