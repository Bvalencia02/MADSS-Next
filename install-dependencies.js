import { execSync } from 'child_process';

console.log('Creating a new Next.js project with TypeScript...');
execSync('npx create-next-app@latest ips-madss-landing --typescript --eslint --tailwind --app --src-dir --import-alias "@/*"', { stdio: 'inherit' });

console.log('\nChanging to the project directory...');
process.chdir('ips-madss-landing');

console.log('\nInstalling additional dependencies...');
execSync('npm install lucide-react @radix-ui/react-toast', { stdio: 'inherit' });

console.log('\nDependencies installed successfully!');
console.log('\nYou can now start your development server with:');
console.log('cd ips-madss-landing');
console.log('npm run dev');