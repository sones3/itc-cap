var out = 'VIDE';
try {
  var raw = $persistentStore.read('itc.last');
  if (raw) {
    var d = {};
    try { d = JSON.parse(raw); } catch (e1) { d = { snippet: raw }; }
    out = 'at=' + d.at + '\nstatus=' + d.status + '\nurl=' + d.url + '\nlen=' + d.len + '\nFOUND=' + JSON.stringify(d.found) + '\nSNIP=' + String(d.snippet || '').slice(0, 900);
  }
} catch (e) { out = 'ERR ' + e; }
$done({ status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8' }, body: out });
