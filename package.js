Package.describe({
  name: 'jameslefrere:atjs',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('jameslefrere:atjs.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jameslefrere:atjs');
  api.addFiles('jameslefrere:atjs-tests.js');
});
