Package.describe({
  name: 'gly:upload-jquery',
  summary: 'Client template for uploads using "jquery-file-upload" from blueimp',
  version: '2.1.7.1',
  git: 'https://github.com/glyphing/meteor-tomi-upload-jquery.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['tap:i18n@1.5.1']);
  api.use(['reactive-var', 'templating'], 'client');

  api.addFiles('package-tap.i18n');

  api.addFiles([
    'lib/vendor/jquery.ui.widget.js',
    'lib/jquery.iframe-transport.js',
    'lib/jquery.fileupload.js',
  ], ['client']);

  api.addFiles([
    'main.css',
    'templates/queueItem.html',
    'templates/queueItem.js',
    'templates/upload.html',
    'templates/upload.js',
    'templates/buttons.html',
    'templates/buttons.js',
    'templates/dropzone.html',
    'templates/dropzone.js',
    'uploader.js'], 'client');

  // after the templates
  api.addFiles([
    'i18n/en.i18n.json',
    'i18n/de.i18n.json'
  ]);

  api.export('Uploader', 'client');
});

//Package.onTest(function(api) {
//  api.use('tinytest');
//  api.use('tomi:upload-client');
//  api.addFiles('upload-client-tests.js');
//});
