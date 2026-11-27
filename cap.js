const body0 = ($response && $response.body) || '';
const clean = String(body0).replace(/[^\x09\x0A\x0D\x20-\x7E\u00A0-\u024F]/g, ' ');
function grab(k){ const i = clean.indexOf(k); return i < 0 ? null : clean.slice(i, i + 200).replace(/\s+/g,' ').trim(); }
const keys = ['failureType','errorCode','customerMessage','message','MZCommerce','dialog','SKError','jingleAction'];
const found = [];
for (const k of keys){ const g = grab(k); if (g) found.push(g); }
const rec = { at: new Date().toISOString(), status: $response && $response.status, url: $request.url, len: String(body0).length, found: found, snippet: clean.replace(/\s+/g,' ').slice(0,1500) };
try { $persistentStore.write(JSON.stringify(rec), 'itc.last'); } catch(e) {}
try { $notification.post('itunes ' + (($response && $response.status) || '?'), (found[0] || clean.replace(/\s+/g,' ').slice(0,120)), 'sandbox.itunes.apple.com/cap2'); } catch(e) {}
$done({});
