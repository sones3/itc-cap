try {
  var raw = '';
  try { raw = $persistentStore.read('itc.last') || ''; } catch (e1) { raw = 'READ_ERROR: ' + e1; }
  if (!raw) raw = 'AUCUNE CAPTURE - refais une tentative d achat puis recharge cette page';
  try { $notification.post('cap-view', 'ok', raw.length + ' octets'); } catch (e2) {}
  $done({ status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8' }, body: raw });
} catch (e) {
  $done({ status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8' }, body: 'ERREUR SCRIPT: ' + e });
}
