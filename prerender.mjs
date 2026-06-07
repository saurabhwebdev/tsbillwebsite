import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { createServer } from 'vite';

const ROUTES = [
  '/', '/demo', '/changelog', '/docs', '/api-reference', '/support', '/privacy', '/terms',
  '/blog',
  '/blog/free-pos-billing-software-india-2026',
  '/blog/gst-billing-compliance-guide-small-business',
  '/blog/offline-pos-billing-why-it-matters',
  '/blog/kirana-store-digital-transformation-guide',
  '/blog/open-source-pos-vs-commercial-comparison',
  '/blog/inventory-management-tips-small-retailers',
];
const DIST = resolve('./dist');

async function prerender() {
  console.log('Starting Vite preview server...');
  const server = await createServer({ server: { port: 4173 }, root: '.', configFile: './vite.config.ts' });
  await server.listen();

  // Use a simple static server for the dist folder instead
  const { createServer: createHttpServer } = await import('http');
  const { readFile } = await import('fs/promises');
  const { join, extname } = await import('path');

  await server.close();

  const mimeTypes = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ico': 'image/x-icon' };

  const httpServer = createHttpServer(async (req, res) => {
    let filePath = join(DIST, req.url === '/' ? '/index.html' : req.url);
    if (!extname(filePath)) filePath = join(DIST, 'index.html');
    if (!existsSync(filePath)) filePath = join(DIST, 'index.html');
    try {
      const data = await readFile(filePath);
      const ext = extname(filePath);
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      res.end(data);
    } catch {
      const data = await readFile(join(DIST, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });

  await new Promise(r => httpServer.listen(4199, r));
  console.log('Static server running on http://localhost:4199');

  const browser = await chromium.launch({ headless: true });
  const originalHtml = readFileSync(resolve(DIST, 'index.html'), 'utf-8');

  for (const route of ROUTES) {
    console.log(`Prerendering ${route}...`);
    const page = await browser.newPage();
    await page.goto(`http://localhost:4199${route}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    let html = await page.content();

    // Inject a marker so crawlers know this is prerendered
    html = html.replace('</head>', '<meta name="prerender-status-code" content="200" />\n</head>');

    // Write to the correct path
    if (route === '/') {
      writeFileSync(resolve(DIST, 'index.html'), html);
    } else {
      const dir = resolve(DIST, route.slice(1));
      mkdirSync(dir, { recursive: true });
      writeFileSync(resolve(dir, 'index.html'), html);
    }

    await page.close();
    console.log(`  ✓ ${route}`);
  }

  await browser.close();
  httpServer.close();
  console.log(`\nPrerendered ${ROUTES.length} pages into dist/`);
}

prerender().catch(e => { console.error(e); process.exit(1); });
