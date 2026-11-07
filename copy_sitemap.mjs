import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const sitemapIndex = path.join(distDir, 'sitemap-index.xml');
const sitemapXml = path.join(distDir, 'sitemap.xml');

if (fs.existsSync(sitemapIndex)) {
  fs.copyFileSync(sitemapIndex, sitemapXml);
  console.log('✓ Successfully mirrored sitemap-index.xml to sitemap.xml for legacy search engine crawlers (Shenma/Baidu)');
} else {
  console.warn('sitemap-index.xml not found in dist');
}
