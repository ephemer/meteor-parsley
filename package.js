Package.describe({
    name: 'ephemer:parsley',
    summary: 'Javascript forms validation. Powerful, UX aware, and dead simple. Internationalised.',
    version: '2.3.11',
    git: 'https://github.com/ephemer/meteor-parsley'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2');
    api.use('ecmascript');
    api.use(['jquery'], 'client');

    // Parsley
    api.addFiles(['parsley.js'], 'client', {bare: true});

    // i18n
    api.addFiles(['parsley-i18n-client.js'], ['client']);
    api.addFiles(['parsley-i18n-server.js'], ['server']);
    api.addFiles(['locales/i18n.en.js', 'locales/i18n.de.js'], ['server']);
});
