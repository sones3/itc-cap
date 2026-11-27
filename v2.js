const raw = $persistentStore.read('itc.last');
const body = raw ? raw : 'AUCUNE CAPTURE - refais une tentative d achat puis recharge cette page';
$done({ status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8' }, body: body });
