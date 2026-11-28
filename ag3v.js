var o = 'VIDE';
try { o = $persistentStore.read('itc.raw') || 'VIDE'; } catch (e) { o = 'ERR ' + e; }
$done({ response: { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }, body: o } });
