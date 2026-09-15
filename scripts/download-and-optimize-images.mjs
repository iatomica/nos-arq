import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Fix undici fetch on Node 20+ for local wasm files loaded by @squoosh/lib
const originalFetch = globalThis.fetch;
globalThis.fetch = async function (url, options) {
  if (typeof url === 'string') {
    let filePath = null;
    if (url.startsWith('file:')) {
      filePath = fileURLToPath(url);
    } else if (/^[a-zA-Z]:[\\/]/.test(url) || fs.existsSync(url)) {
      filePath = url;
    }
    if (filePath) {
      const buffer = await fs.promises.readFile(filePath);
      const headers = filePath.endsWith('.wasm') ? { 'Content-Type': 'application/wasm' } : {};
      return new Response(buffer, { headers });
    }
  }
  return originalFetch.apply(this, arguments);
};

const { ImagePool } = await import('@squoosh/lib');

const METADATA = {
  'hero-montseny': {
    name: 'hero-montseny.webp',
    title: 'Refugio en el Montseny',
    category: 'Obra Nueva',
    location: 'Barcelona, España',
    year: '2023',
    featured: true,
    description: 'Vivienda unifamiliar aislada integrada en la orografía del macizo del Montseny con muros de hormigón ciclópeo y piedra natural.'
  },
  'la-coveta-main': {
    name: 'la-coveta-main.webp',
    title: 'La Coveta',
    category: 'Reforma Integral',
    location: 'Alicante, España',
    year: '2024',
    featured: true,
    description: 'Reforma integral que potencia la luz mediterránea, carpinterías de roble macizo y microcemento continuo.'
  },
  'la-coveta-detail': {
    name: 'la-coveta-detail.webp',
    title: 'La Coveta - Interior',
    category: 'Interiorismo',
    location: 'Alicante, España',
    year: '2024',
    featured: false,
    description: 'Detalle de cocina abierta con isla central y conexión directa a la terraza exterior.'
  },
  'notaria-delta': {
    name: 'notaria-delta.webp',
    title: 'Notaría Delta del Ebro',
    category: 'Retail & Corporativo',
    location: 'Tarragona, España',
    year: '2022',
    featured: true,
    description: 'Espacio institucional reinterpretado con calidez de madera de fresno y celosías acústicas.'
  },
  'notaria-detail': {
    name: 'notaria-detail.webp',
    title: 'Notaría Delta - Detalle de Madera',
    category: 'Retail',
    location: 'Tarragona, España',
    year: '2022',
    featured: false,
    description: 'Mobiliario a medida y particiones ligeras que garantizan privacidad visual y acústica.'
  },
  'vivienda-ensanche': {
    name: 'vivienda-ensanche.webp',
    title: 'Vivienda Ensanche',
    category: 'Reforma Integral',
    location: 'Valencia, España',
    year: '2024',
    featured: true,
    description: 'Rehabilitación patrimonial con techos altos de escayola original y pavimento de terrazo continuo.'
  },
  'vivienda-ensanche-interior': {
    name: 'vivienda-ensanche-interior.webp',
    title: 'Vivienda Ensanche - Salón & Galería',
    category: 'Interiorismo',
    location: 'Valencia, España',
    year: '2024',
    featured: false,
    description: 'Zona de día bañada de sol de mediodía con carpinterías lacadas en tonos neutros.'
  },
  'casa-alfinach': {
    name: 'casa-alfinach.webp',
    title: 'Casa en Alfinach',
    category: 'Obra Nueva',
    location: 'Moncada, Valencia',
    year: '2023',
    featured: true,
    description: 'Geometría limpia con voladizos que protegen del soleamiento estival y piscina desbordante.'
  },
  'casa-albir': {
    name: 'casa-albir.webp',
    title: 'Casa Albir',
    category: 'Obra Nueva',
    location: 'El Albir, Alicante',
    year: '2024',
    featured: true,
    description: 'Arquitectura escalonada en ladera con vistas al mar Mediterráneo y patios de sombra.'
  },
  'casa-jorge-juan': {
    name: 'casa-jorge-juan.webp',
    title: 'Casa en Jorge Juan',
    category: 'Reforma Integral',
    location: 'Valencia, España',
    year: '2023',
    featured: false,
    description: 'Elegancia sobria con panelados de nogal y transiciones fluidas entre estancias.'
  },
  'atico-cirilo': {
    name: 'atico-cirilo.webp',
    title: 'Ático en Cirilo Amorós',
    category: 'Reforma Integral',
    location: 'Valencia, España',
    year: '2025',
    featured: true,
    description: 'Ático con pérgola bioclimática, chimenea exenta y materiales nobles en el centro histórico.'
  },
  'refugio-nubes': {
    name: 'refugio-nubes.webp',
    title: 'Refugio en las Nubes',
    category: 'Hospitality',
    location: 'Arabia Saudí',
    year: '2025',
    featured: false,
    description: 'Proyecto internacional de pabellón hotelero suspendido sobre el valle rocoso.'
  },
  'moodboard-materiales': {
    name: 'moodboard-materiales.webp',
    title: 'Selección de Materiales & Neuroarquitectura',
    category: 'Filosofía',
    location: 'Estudio Valencia',
    year: '2024',
    featured: false,
    description: 'Muestrario de linos, travertino, cal y maderas sostenibles que definen la paleta sensorial de NOS.'
  },
  'estudio-nos': {
    name: 'estudio-nos.webp',
    title: 'Espacio de Trabajo NOS',
    category: 'Estudio',
    location: 'Calle Pintor Sorolla 22, Valencia',
    year: '2024',
    featured: false,
    description: 'Taller de arquitectura y diálogo en pleno centro financiero y cultural de Valencia.'
  },
  'nos-logo': {
    name: 'nos-logo.webp',
    title: 'Logotipo NOS Arquitectura',
    category: 'Brand',
    location: 'Valencia',
    year: '2024',
    featured: false,
    description: 'Identidad corporativa sobria en gris neutro de NOS Arquitectura.'
  }
};

const OUTPUT_DIR = path.resolve('public/images');
const DATA_DIR = path.resolve('src/data');
const RAW_JSON_PATH = path.resolve('temp_raw_images/all_images.json');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.mkdirSync(DATA_DIR, { recursive: true });

if (!fs.existsSync(RAW_JSON_PATH)) {
  console.error('Missing temp_raw_images/all_images.json');
  process.exit(1);
}

const rawData = JSON.parse(await fs.promises.readFile(RAW_JSON_PATH, 'utf-8'));
console.log(`Loaded ${rawData.length} images from browser dump. Optimizing with Squoosh to WebP...`);

const manifest = [];
const imagePool = new ImagePool(1);

for (const item of rawData) {
  if (!item.base64) {
    console.warn(`Skipping ${item.id} - no base64 content`);
    continue;
  }

  const meta = METADATA[item.id] || {
    name: `${item.id}.webp`,
    title: item.id,
    category: 'Proyecto',
    location: 'España',
    year: '2024',
    featured: false,
    description: ''
  };

  const base64Clean = item.base64.replace(/^data:image\/\w+;base64,/, '');
  const rawBuffer = Buffer.from(base64Clean, 'base64');
  const originalSizeBytes = rawBuffer.length;

  console.log(`[Squoosh] Encoding ${meta.name} (original: ${(originalSizeBytes / 1024).toFixed(1)} KB)...`);

  try {
    const image = imagePool.ingestImage(rawBuffer);
    await image.encode({
      webp: {
        quality: 82,
        lossless: 0,
        method: 4
      }
    });

    const encoded = await image.encodedWith.webp;
    const optimizedBuffer = Buffer.from(encoded.binary);
    const outputPath = path.join(OUTPUT_DIR, meta.name);
    await fs.promises.writeFile(outputPath, optimizedBuffer);
    const optimizedSizeBytes = optimizedBuffer.length;
    const savingsPercent = (((originalSizeBytes - optimizedSizeBytes) / originalSizeBytes) * 100).toFixed(1);

    console.log(`✓ [WebP Saved] ${meta.name}: ${(optimizedSizeBytes / 1024).toFixed(1)} KB (Saved ${savingsPercent}%)`);

    manifest.push({
      id: item.id,
      name: meta.name,
      src: `/images/${meta.name}`,
      title: meta.title,
      category: meta.category,
      location: meta.location,
      year: meta.year,
      featured: meta.featured,
      description: meta.description,
      originalSizeBytes,
      optimizedSizeBytes,
      savingsPercent: `${savingsPercent}%`
    });
  } catch (err) {
    console.error(`Error encoding ${meta.name} with Squoosh:`, err);
  }
}

await imagePool.close();

// Discard temporary raw folder and files ("deshecha las anterior")
console.log('Discarding temporary uncompressed raw images folder...');
fs.rmSync(path.resolve('temp_raw_images'), { recursive: true, force: true });

await fs.promises.writeFile(
  path.join(DATA_DIR, 'imagesManifest.json'),
  JSON.stringify(manifest, null, 2),
  'utf-8'
);

console.log(`\n🎉 Processed and Squoosh-optimized ${manifest.length} WebP images successfully!`);
console.log(`Saved manifest to: ${path.join(DATA_DIR, 'imagesManifest.json')}`);
