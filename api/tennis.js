import fs from 'fs';
import path from 'path';

const dataFile = path.join('/tmp', 'tennis-data.json');
const logFile = path.join('/tmp', 'tennis-logs.json');

function getInitialData() {
  return {
    Oktober: [
      { kw: "KW 40", weekRange: "28.09.2026 - 04.10.2026", monday: "Montag, 28.09.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 41", weekRange: "05.10.2026 - 11.10.2026", monday: "Montag, 05.10.2026", availabilities: { AB: "🟡", RP: "🟡", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 42", weekRange: "12.10.2026 - 18.10.2026", monday: "Montag, 12.10.2026", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "❌", DR: "❌" } },
      { kw: "KW 43", weekRange: "19.10.2026 - 25.10.2026", monday: "Montag, 19.10.2026", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "❌" } },
      { kw: "KW 44", weekRange: "26.10.2026 - 01.11.2026", monday: "Montag, 26.10.2026", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
    ],
    November: [
      { kw: "KW 45", weekRange: "02.11.2026 - 08.11.2026", monday: "Montag, 02.11.2026", availabilities: { AB: "❌", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 46", weekRange: "09.11.2026 - 15.11.2026", monday: "Montag, 09.11.2026", availabilities: { AB: "🟡", RP: "❌", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 47", weekRange: "16.11.2026 - 22.11.2026", monday: "Montag, 16.11.2026", availabilities: { AB: "🟡", RP: "🟡", DG: "❌", UW: "🟡", DR: "🟡" } },
      { kw: "KW 48", weekRange: "23.11.2026 - 29.11.2026", monday: "Montag, 23.11.2026", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "❌", DR: "🟡" } },
      { kw: "KW 49", weekRange: "30.11.2026 - 06.12.2026", monday: "Montag, 30.11.2026", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "❌" } },
    ],
    Dezember: [
      { kw: "KW 50", weekRange: "07.12.2026 - 13.12.2026", monday: "Montag, 07.12.2026", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 51", weekRange: "14.12.2026 - 20.12.2026", monday: "Montag, 14.12.2026", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 52", weekRange: "21.12.2026 - 27.12.2026", monday: "Montag, 21.12.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
      { kw: "KW 01", weekRange: "28.12.2026 - 03.01.2027", monday: "Montag, 28.12.2026", availabilities: { AB: "❌", RP: "❌", DG: "❌", UW: "❌", DR: "❌" } },
    ],
    Januar: [
      { kw: "KW 02", weekRange: "04.01.2027 - 10.01.2027", monday: "Montag, 04.01.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 03", weekRange: "11.01.2027 - 17.01.2027", monday: "Montag, 11.01.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 04", weekRange: "18.01.2027 - 24.01.2027", monday: "Montag, 18.01.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 05", weekRange: "25.01.2027 - 31.01.2027", monday: "Montag, 25.01.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
    ],
    Februar: [
      { kw: "KW 06", weekRange: "01.02.2027 - 07.02.2027", monday: "Montag, 01.02.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 07", weekRange: "08.02.2027 - 14.02.2027", monday: "Montag, 08.02.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 08", weekRange: "15.02.2027 - 21.02.2027", monday: "Montag, 15.02.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 09", weekRange: "22.02.2027 - 28.02.2027", monday: "Montag, 22.02.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
    ],
    März: [
      { kw: "KW 10", weekRange: "01.03.2027 - 07.03.2027", monday: "Montag, 01.03.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 11", weekRange: "08.03.2027 - 14.03.2027", monday: "Montag, 08.03.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 12", weekRange: "15.03.2027 - 21.03.2027", monday: "Montag, 15.03.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 13", weekRange: "22.03.2027 - 28.03.2027", monday: "Montag, 22.03.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 14", weekRange: "29.03.2027 - 04.04.2027", monday: "Montag, 29.03.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
    ],
    April: [
      { kw: "KW 15", weekRange: "05.04.2027 - 11.04.2027", monday: "Montag, 05.04.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 16", weekRange: "12.04.2027 - 18.04.2027", monday: "Montag, 12.04.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 17", weekRange: "19.04.2027 - 25.04.2027", monday: "Montag, 19.04.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
      { kw: "KW 18", weekRange: "26.04.2027 - 02.05.2027", monday: "Montag, 26.04.2027", availabilities: { AB: "🟡", RP: "🟡", DG: "🟡", UW: "🟡", DR: "🟡" } },
    ]
  };
}

function getStoredData() {
  try {
    if (fs.existsSync(dataFile)) {
      const data = fs.readFileSync(dataFile, 'utf-8');
      const stored = JSON.parse(data);
      const initial = getInitialData();
      for (const month in initial) {
        if (!stored[month]) {
          stored[month] = initial[month];
        }
      }
      return stored;
    }
  } catch (error) {
    console.log('Error reading file:', error.message);
  }
  return getInitialData();
}

function saveData(data) {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving file:', error.message);
    return false;
  }
}

function addLog(player, month, week, oldStatus, newStatus) {
  try {
    let logs = [];
    if (fs.existsSync(logFile)) {
      const data = fs.readFileSync(logFile, 'utf-8');
      logs = JSON.parse(data);
    }
    
    const logEntry = {
      timestamp: new Date().toISOString(),
      player: player,
      month: month,
      week: week,
      oldStatus: oldStatus,
      newStatus: newStatus
    };
    
    logs.unshift(logEntry);
    logs = logs.slice(0, 100);
    fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
  } catch (error) {
    console.error('Error writing log:', error.message);
  }
}

function getLogs() {
  try {
    if (fs.existsSync(logFile)) {
      const data = fs.readFileSync(logFile, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.log('Error reading logs:', error.message);
  }
  return [];
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET' && !req.query.action) {
    return res.status(200).json({ status: 'Tennis API active ✓' });
  }

  if (req.method === 'POST' && req.query.action === 'save') {
    try {
      const data = req.body;
      const oldData = getStoredData();
      
      // Log changes
      for (const month in data) {
        for (let i = 0; i < data[month].length; i++) {
          for (const player in data[month][i].availabilities) {
            if (oldData[month] && oldData[month][i]) {
              const oldStatus = oldData[month][i].availabilities[player];
              const newStatus = data[month][i].availabilities[player];
              if (oldStatus !== newStatus) {
                addLog(player, month, data[month][i].kw, oldStatus, newStatus);
              }
            }
          }
        }
      }
      
      const success = saveData(data);
      return res.status(200).json({ success: success, message: 'Daten gespeichert ✓', timestamp: new Date().toISOString() });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'GET' && req.query.action === 'load') {
    try {
      const data = getStoredData();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'GET' && req.query.action === 'logs') {
    try {
      const logs = getLogs();
      return res.status(200).json(logs);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
}
