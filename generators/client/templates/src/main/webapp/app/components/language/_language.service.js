(function() {
  'use strict';

  angular.module('<%=angularAppName%>')
      .factory('Language', function ($q, $http, $translate, LANGUAGES) {
          return {
              getCurrent: function () {
                  var deferred = $q.defer();
                  var language = $translate.storage().get('NG_TRANSLATE_LANG_KEY');

                  if (angular.isUndefined(language)) {
                      language = 'en';
                  }

                  deferred.resolve(language);
                  return deferred.promise;
              },
              getAll: function () {
                  var deferred = $q.defer();
                  deferred.resolve(LANGUAGES);
                  return deferred.promise;
              }
          };
      });
})();
