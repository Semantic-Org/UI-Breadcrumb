var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-breadcrumb',
  summary : 'Semantic UI - Breadcrumb (official): Single component release of breadcrumb',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Breadcrumb.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
