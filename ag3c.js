var b = '';
var st = '';
try { st = String(($response && $response.status) || ''); } catch (e) {}
try { b = String(($response && $response.body) || ''); } catch (e2) {}
try { $persistentStore.write(st + ' | ' + new Date().toISOString() + ' | ' + b.replace(/[^\x20-\x7E]/g, ' ').slice(0, 500), 'itc.raw'); } catch (e3) {}
$done({});
