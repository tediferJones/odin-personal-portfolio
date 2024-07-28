await Bun.build({
  entrypoints: ['src/index.ts'],
  outdir: 'public/',
  // minify: true,
})

Bun.spawnSync('bunx tailwindcss -i src/globals.css -o public/styles.css'.split(' '))