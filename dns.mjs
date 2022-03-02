import dns from 'dns';
import dnsPromises from 'dns/promises';

const obj = await dnsPromises.lookup('www.google.co.id');

console.table(obj);



