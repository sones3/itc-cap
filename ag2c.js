var TOPIC = 'https://ntfy.sh/itc-zak-9f3a2';
try {
  var body = String(($response && $response.body) || '');
  var clean = body.replace(/[^\x09\x0A\x0D\x20-\x7E\u00A0-\u024F]/g, ' ');
  var keys = ['failureType', 'errorCode', 'customerMessage', 'message', 'MZCommerce', 'SKError', 'error', 'denied'];
  var found = [];
  keys.forEach(function (k) { var i = clean.indexOf(k); if (i >= 0) found.push(clean.slice(i, i + 180).replace(/\s+/g, ' ')); });
  var payload = { at: new Date().toISOString(), status: $response && $response.status, len: body.length, found: found, snippet: clean.replace(/\s+/g, ' ').slice(0, 1200) };
  try { $persistentStore.write(JSON.stringify(payload), 'itc.last'); } catch (e2) {}
  $httpClient.post({ url: TOPIC, body: JSON.stringify(payload), headers: { 'Title': 'cap' } }, function () {});
} catch (e) {}
$done({});
