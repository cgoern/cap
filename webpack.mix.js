const mix = require('laravel-mix')

mix
  .setPublicPath('dist')
  .setResourceRoot('./')
  .disableNotifications()
  .browserSync({
    server: true,
    files: ['index.html', 'dist/cap.css'],
  })
  .sass('style.scss', 'style.css')
