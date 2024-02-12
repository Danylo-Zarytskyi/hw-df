import { readFile } from 'fs/promises';


const readTextFile = async (filePath) => {
    const data = await readFile(filePath);
    
}

export default readTextFile;