var TOPIC = 'https://ntfy.sh/itc-zak-9f3a2';
try {
  if (typeof $response === 'object' && $response) {
    var body = String($response.body || '');
    var clean = body.replace(/[^\x09\x0A\x0D\x20-\x7E\u00A0-\u024F]/g, ' ');
    var keys = ['failureType', 'errorCode', 'customerMessage', 'message', 'MZCommerce', 'SKError', 'error', 'denied'];
    var found = [];
    keys.forEach(function (k) { var i = clean.indexOf(k); if (i >= 0) found.push(clean.slice(i, i + 180).replace(/\s+/g, ' ')); });
    var payload = { at: new Date().toISOString(), status: $response.status, len: body.length, found: found, snippet: clean.replace(/\s+/g, ' ').slice(0, 1200) };
    try { $persistentStore.write(JSON.stringify(payload), 'itc.last'); } catch (e2) {}
    $httpClient.post({ url: TOPIC, body: JSON.stringify(payload), headers: { 'Title': 'cap' } }, function () {});
    $done({});
  } else {
    var out = 'VIDE';
    try {
      var raw = $persistentStore.read('itc.last');
      if (raw) {
        var d = JSON.parse(raw);
        out = 'at=' + d.at + '\nstatus=' + d.status + '\nlen=' + d.len + '\nFOUND=' + JSON.stringify(d.found) + '\nSNIP=' + String(d.snippet || '').slice(0, 900);
      }
    } catch (e1) { out = 'ERR ' + e1; }
    $done({ response: { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }, body: out } });
  }
} catch (e) {
  $done({ response: { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8' }, body: 'FATAL ' + e } });
}
