var out = '';
try {
  var a = '';
  var b = '';
  try { a = $persistentStore.read('itc.last') || ''; } catch (e1) { a = 'err ' + e1; }
  try { b = $persistentStore.read('g.log') || ''; } catch (e2) { b = 'err ' + e2; }
  out = 'APPLE ' + a.length + ' o\n' + a.slice(0, 3000) + '\n\nGOOGLE ' + b.length + ' o\n' + b.slice(0, 4000);
  try { $notification.post('cap', 'apple ' + a.length + ' / google ' + b.length, ''); } catch (e3) {}
} catch (e) { out = 'ERREUR ' + e; }
$done({ body: out });
