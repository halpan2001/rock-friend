import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(/* transition */) {
    this.transitionTo('random'); // Implicitly aborts the on-going transition.
  }

  //somehow onLoad, change the value of the "rockSpace"
  // let rockSpace = document.getElementById("rockSpace");
  // console.log("gotten rockspace");
});
