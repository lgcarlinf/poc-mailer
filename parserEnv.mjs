import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envFilePath = path.resolve(__dirname, '.env');

const envFileContent = fs.readFileSync(envFilePath, 'utf8');

const envVariables = {};
envFileContent.split('\n').forEach((line) => {
    const [key, value] = line.split('=');
    envVariables[key.trim()] = value.trim();
});

export default envVariables;
