import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to the environment file
const envFilePath = path.resolve(__dirname, '.env');

// Read the environment file
const envFileContent = fs.readFileSync(envFilePath, 'utf8');

// Parse the environment variables
const envVariables = {};
envFileContent.split('\n').forEach((line) => {
    const [key, value] = line.split('=');
    envVariables[key.trim()] = value.trim();
});

// Export the environment variables
export default envVariables;
