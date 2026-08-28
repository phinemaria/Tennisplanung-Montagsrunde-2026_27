export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Test Endpoint
  if (req.method === 'GET' && !req.query.action) {
    return res.status(200).json({ status: 'Tennis API active ✓' });
  }

  // Daten speichern
  if (req.method === 'POST' && req.query.action === 'save') {
    try {
      const data = req.body;
      
      // Simulieren: Daten werden im Memory gespeichert
      // In Produktion: Datei auf GitHub oder Datenbank
      global.tennisData = data;
      
      return res.status(200).json({ 
        success: true, 
        message: 'Daten gespeichert ✓',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Daten laden
  if (req.method === 'GET' && req.query.action === 'load') {
    try {
      const data = global.tennisData || getInitialData();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
}

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
    ]
  };
}
