try {
  var u = '';
  try { u = String(($request && $request.url) || ''); } catch (e) {}
  var prev = '';
  try { prev = $persistentStore.read('itc.req') || ''; } catch (e2) {}
  var line = new Date().toISOString() + ' REQ ' + u.slice(0, 140) + '\n';
  try { $persistentStore.write((line + prev).slice(0, 3000), 'itc.req'); } catch (e3) {}
} catch (e4) {}
$done({});
