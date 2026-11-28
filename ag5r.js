try {
  var u = String(($request && $request.url) || '');
  var b = '';
  try { b = String(($request && $request.body) || ''); } catch (e) {}
  b = b.replace(/[^\x20-\x7E]/g, ' ').slice(0, 300);
  var prev = '';
  try { prev = $persistentStore.read('itc.req') || ''; } catch (e2) {}
  var line = new Date().toISOString() + ' ' + u.replace('https://one.google.com/_/SubscriptionsManagementUi/data/batchexecute', 'BATCH') + ' :: ' + b + '\n';
  try { $persistentStore.write((line + prev).slice(0, 6000), 'itc.req'); } catch (e3) {}
} catch (e4) {}
$done({});
