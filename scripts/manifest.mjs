/**
 * Elenca gli asset di brand in src/manifest.json.
 * Gira da solo prima di ogni build: se aggiungi un file in public/brand,
 * qui compare senza che nessuno debba ricordarselo.
 */
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const radice = fileURLToPath(new URL('..', import.meta.url));
const base = join(radice, 'public', 'brand');

function scandisci(dir) {
  return readdirSync(dir).flatMap(nome => {
    if (nome.startsWith('.')) return [];
    const percorso = join(dir, nome);
    const info = statSync(percorso);
    if (info.isDirectory()) return scandisci(percorso);
    return [{
      file: relative(join(radice, 'public'), percorso).split('/').join('/'),
      gruppo: relative(base, dir).split('/')[0] || 'brand',
      peso: info.size,
    }];
  });
}

const voci = scandisci(base).sort((a, b) => a.file.localeCompare(b.file));
writeFileSync(join(radice, 'src', 'manifest.json'),
  JSON.stringify({ generato: new Date().toISOString().slice(0, 10), voci }, null, 2) + '\n');
console.log(`manifest: ${voci.length} asset`);
