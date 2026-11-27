var out = '';
try { out = $persistentStore.read('itc.last') || 'VIDE'; } catch (e) { out = 'ERR ' + e; }
$done({ body: out.slice(0, 3000) });
