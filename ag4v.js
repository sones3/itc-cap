var r = '', q = '';
try { r = $persistentStore.read('itc.raw') || 'no-response'; } catch (e) { r = 'ERR'; }
try { q = $persistentStore.read('itc.req') || 'no-request'; } catch (e2) { q = 'ERR'; }
$done({ response: { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }, body: '=== REQUETES ===\n' + q + '\n\n=== REPONSES ===\n' + r } });
