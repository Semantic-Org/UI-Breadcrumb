
Package.describe({
  name    : 'semantic:ui-breadcrumb',
  summary : 'Semantic UI - Breadcrumb: Single component release',
  version : '1.9.3',
  git     : 'git://github.com/Semantic-Org/UI-Breadcrumb.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'breadcrumb.css'
  ], 'client');
});
