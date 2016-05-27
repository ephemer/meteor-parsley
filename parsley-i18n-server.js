Parsley_i18n = {}; // package-wide variable

Meteor.methods({
    getParsley_i18n: function(language) {
        switch (language){
            case 'de':
                return Parsley_i18n.de;
            default:
                return Parsley_i18n.en;
        }
    }
});
