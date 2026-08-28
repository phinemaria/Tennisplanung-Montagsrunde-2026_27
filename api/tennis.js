import fs from 'fs';
import path from 'path';

const dataFile = '/tmp/tennis-data.json';

function getInitialData() {
  return {
    Oktober: [
      { kw: "KW 40", monday: "28.09.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 41", monday: "05.10.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 42", monday: "12.10.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 43", monday: "19.10.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 44", monday: "26.10.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
    ],
    November: [
      { kw: "KW 45", monday: "02.11.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 46", monday: "09.11.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 47", monday: "16.11.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 48", monday: "23.11.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 49", monday: "30.11.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
    ],
    Dezember: [
      { kw: "KW 50", monday: "07.12.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 51", monday: "14.12.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 52", monday: "21.12.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 01", monday: "28.12.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
    ],
    Januar: [
      { kw: "KW 02", monday: "04.01.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 03", monday: "11.01.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 04", monday: "18.01.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 05", monday: "25.01.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
    ],
    Februar: [
      { kw: "KW 06", monday: "01.02.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 07", monday: "08.02.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 08", monday: "15.02.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 09", monday: "22.02.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
    ],
    März: [
      { kw: "KW 10", monday: "01.03.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 11", monday: "08.03.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 12", monday: "15.03.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 13", monday: "22.03.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 14", monday: "29.03.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
    ],
    April: [
      { kw: "KW 15", monday: "05.04.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 16", monday: "12.04.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 17", monday: "19.04.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 18", monday: "26.04.2027", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
    ]
  };
}

function readData() {
  try {
    if (fs.existsSync(dataFile)) {
      const content = fs.readFileSync(dataFile, 'utf-8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.log('Error reading data file, using initial data');
  }
  return getInitialData();
}

function writeData(data) {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
}

export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const action = req.query.action || 'load';

    if (action === 'load') {
      const data = readData();
      return res.status(200).json(data);
    }

    if (action === 'save' && req.method === 'POST') {
      const data = req.body;
      const success = writeData(data);
      return res.status(200).json({ success });
    }

    return res.status(400).json({ error: 'Invalid action' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
