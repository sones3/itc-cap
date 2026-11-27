var msg = 'VIDE';
try {
  var raw = $persistentStore.read('itc.last');
  if (raw) { var d = JSON.parse(raw); msg = String(JSON.stringify(d.found) + ' | ' + String(d.snippet||'').slice(0,120)); }
} catch (e) { msg = 'ERR ' + e; }
try { $notification.post('found', msg.slice(0, 200), ''); } catch (e2) {}
$done({});
