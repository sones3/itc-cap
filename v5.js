try {
  var a = $persistentStore.read('itc.last') || 'aucune capture Apple';
  var b = $persistentStore.read('g.log') || 'aucune capture Google';
  $done({ body: '=== APPLE ===\n' + a + '\n\n=== GOOGLE ===\n' + b });
} catch (e) { $done({ body: 'ERREUR ' + e }); }
