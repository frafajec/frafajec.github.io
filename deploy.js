const fs = require('fs');
const util = require('util');
const replace = require('replace-in-file');
const fsRename = util.promisify(fs.rename);
const fsReaddir = util.promisify(fs.readdir);
const fsReadfile = util.promisify(fs.readFile);

async function deploy() {
  if (fs.existsSync('docs/_next')) {
    await fsRename('docs/_next', 'docs/next');
  }
  await replace({
    files: './docs/index.html',
    from: /\/favicon/g,
    to: 'favicon',
  });
  await replace({
    files: './docs/index.html',
    from: /\/fonts/g,
    to: 'fonts',
  });
  await replace({
    files: './docs/index.html',
    from: /\/_next/g,
    to: 'next',
  });

  const fileData = await fsReadfile('docs/index.html', 'utf8');

  const pagesRegex = new RegExp(/next\/static\/chunks\/pages\/_.+?\.js/, 'ig');
  const pagesRes = fileData.match(pagesRegex) || [];
  const manifestRegex = new RegExp(/next\/static\/[_a-zA-Z\d]{21}\/_.+?\.js/, 'ig');
  const manifestRes = fileData.match(manifestRegex) || [];
  const all = [...pagesRes, ...manifestRes];
  for (let i = 0; i < all.length; i++) {
    const pageString = all[i];
    const pageStringNew = pageString.replace('_', '');
    await replace({
      files: './docs/index.html',
      from: pageString,
      to: pageStringNew,
    });
    if (fs.existsSync(`docs/${pageString}`)) {
      await fsRename(`docs/${pageString}`, `docs/${pageStringNew}`);
    }
  }
}
deploy();
