angular.module('directivePractice').service('lessonSrvc', function($http) {
    this.getSchedule = function() {
        return $http({
          method: 'GET',
          url: 'schedule.json'
        })
      }
});