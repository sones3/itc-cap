try {
  var body = String(($response && $response.body) || '');
  var clean = body.replace(/[^\x09\x0A\x0D\x20-\x7E\u00A0-\u024F]/g, ' ');
  var keep = ['error','Error','ERROR','offer','Offer','productId','product','billing','Billing','denied','DENIED','code'];
  var hit = keep.some(function(k){ return clean.indexOf(k) >= 0; });
  if (!hit) { $done({}); } else {
    var prev = [];
    try { prev = JSON.parse($persistentStore.read('g.log') || '[]'); } catch(e) {}
    prev.unshift({ at: new Date().toISOString(), status: $response && $response.status, url: $request.url, snippet: clean.replace(/\s+/g,' ').slice(0, 700) });
    if (prev.length > 6) prev = prev.slice(0, 6);
    try { $persistentStore.write(JSON.stringify(prev), 'g.log'); } catch(e2) {}
    $done({});
  }
} catch (e) { $done({}); }
