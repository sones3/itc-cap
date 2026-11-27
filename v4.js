try {
  var raw = '';
  try { raw = $persistentStore.read('itc.last') || ''; } catch (e1) { raw = 'READ_ERROR ' + e1; }
  if (!raw) raw = 'AUCUNE CAPTURE - refais une tentative d achat puis recharge cette page';
  $done({ body: raw });
} catch (e) {
  $done({ body: 'ERREUR SCRIPT ' + e });
}
