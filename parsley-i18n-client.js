if(!$.fn.parsley) throw new Error("Parsley doesn't seem to be loaded");

$(document).ready(function(){
  var currentLanguage = document.getElementsByTagName("html")[0].lang;

  Meteor.call('getParsley_i18n', currentLanguage, function (err, i18nObject){
    if(err) return console.error(err);

    // Activate current translation if Parsley already loaded
    if (typeof window.ParsleyValidator !== 'undefined') {
    	window.ParsleyValidator.addCatalog(currentLanguage, i18nObject, true);
    } else { // Add a possible translation (this should never happen, used as fallback)
    	window.ParsleyConfig = window.ParsleyConfig || {};
		  window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};
  		window.ParsleyConfig.i18n[currentLanguage] = result;
    }

  });
});
