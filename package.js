
Package.describe({
  name    : 'semantic:ui-breadcrumb',
  summary : 'Semantic UI - Breadcrumb: Single component release',
  version : '1.12.0',
  git     : 'git://github.com/Semantic-Org/UI-Breadcrumb.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'breadcrumb.css'
  ], 'client');
});
