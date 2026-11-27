var msg = 'VIDE';
try {
  var raw = $persistentStore.read('itc.last');
  if (raw) { var d = JSON.parse(raw); msg = 'F ' + JSON.stringify(d.found) + ' S ' + String(d.snippet || '').slice(0, 150); }
} catch (e) { msg = 'ERR ' + e; }
try { $notification.post('capture', msg.slice(0, 220), ''); } catch (e2) {}
$done({ body: 'capture envoyee en notification' });
