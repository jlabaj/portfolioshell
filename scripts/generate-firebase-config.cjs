const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
const configPath = path.join(__dirname, '..', 'apps', 'servermanager', 'src', 'environments', 'firebase.config.ts');

const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};

envContent.split(/\r?\n/).forEach(line => {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const [key, ...valueParts] = trimmed.split('=');
    if (key) {
      envVars[key.trim()] = valueParts.join('=').trim();
    }
  }
});

const config = `export const firebaseConfig = {
  projectId: "${envVars['NX_FIREBASE_PROJECT_ID'] || ''}",
  appId: "${envVars['NX_FIREBASE_APP_ID'] || ''}",
  databaseURL: "${envVars['NX_FIREBASE_DATABASE_URL'] || ''}",
  storageBucket: "${envVars['NX_FIREBASE_STORAGE_BUCKET'] || ''}",
  apiKey: "${envVars['NX_FIREBASE_API_KEY'] || ''}",
  authDomain: "${envVars['NX_FIREBASE_AUTH_DOMAIN'] || ''}",
  messagingSenderId: "${envVars['NX_FIREBASE_MESSAGING_SENDER_ID'] || ''}",
};`;

fs.writeFileSync(configPath, config);

console.log('Firebase config generated from .env');