var out = 'VIDE';
try {
  var raw = $persistentStore.read('itc.last');
  if (raw) {
    var d = JSON.parse(raw);
    out = 'at=' + d.at + '\nstatus=' + d.status + '\nlen=' + d.len + '\nFOUND=' + JSON.stringify(d.found) + '\nSNIP=' + String(d.snippet || '').slice(0, 900);
  }
} catch (e1) { out = 'ERR ' + e1; }
$done({ response: { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }, body: out } });
