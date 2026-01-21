import fs from 'fs/promises';
import path from 'path';

async function toHtml(report) {
  const { url, violations = [] } = report || {};
  const title = `a11y report: ${url || 'report'}`;
  const rows = violations.map(v => {
    const nodes = (v.nodes || []).map(n => {
      const html = n.html || '';
      const target = (n.target || []).join(', ');
      return `<li><strong>Target:</strong> <code>${escapeHtml(target)}</code><br/><strong>HTML:</strong> <pre>${escapeHtml(html)}</pre></li>`;
    }).join('\n');
    return `
      <section>
        <h3>${escapeHtml(v.id || v.impact || v.help)}</h3>
        <p>${escapeHtml(v.help || '')} — <em>${escapeHtml(v.impact || '')}</em></p>
        <ul>${nodes}</ul>
      </section>
    `;
  }).join('\n');

  return `<!doctype html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(title)}</title>
    <style>body{font-family:Arial, Helvetica, sans-serif;line-height:1.4;padding:20px}pre{background:#f6f8fa;padding:8px;border-radius:4px;overflow:auto}code{background:#f1f1f1;padding:2px 4px;border-radius:3px}</style>
  </head>
  <body>
    <h1>${escapeHtml(title)}</h1>
    <p>Found <strong>${violations.length}</strong> violation(s).</p>
    ${rows}
  </body>
  </html>`;
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function main() {
  const reportsDir = path.resolve(process.cwd(), 'reports');
  const outDir = path.join(reportsDir, 'html');
  try {
    const files = await fs.readdir(reportsDir);
    await fs.mkdir(outDir, { recursive: true });
    for (const f of files) {
      if (!f.endsWith('.json')) continue;
      try {
        const content = await fs.readFile(path.join(reportsDir, f), 'utf8');
        const parsed = JSON.parse(content);
        const html = await toHtml(parsed);
        const outName = f.replace(/\.json$/, '.html');
        await fs.writeFile(path.join(outDir, outName), html, 'utf8');
        console.log(`Wrote ${outName}`);
      } catch (e) {
        console.warn(`Failed to convert ${f}: ${e.message}`);
      }
    }
  } catch (e) {
    console.error('No reports directory or failed to read reports:', e.message);
    process.exit(0);
  }
}

if (require.main === module) {
  main();
}
