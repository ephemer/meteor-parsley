Package.describe({
	summary: "Javascript forms validation. Powerful, UX aware, and dead simple. Internationalised."
	version: "2.0.0",
	git: "https://github.com/ephemer/meteor-parsley"
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.0');
  	api.use(['jquery'], 'client');

    // Parsley
    api.add_files(['parsley.js'], 'client');

    // i18n
    api.add_files(['parsley-i18n-client.js'], ['client']);
    api.add_files(['parsley-i18n-server.js'], ['server']);
    api.add_files(['locales/i18n.en.js', 'locales/i18n.de.js'], ['server']);
});
