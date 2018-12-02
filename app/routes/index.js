import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    // $.getJSON('/api/rocks');
    return this.store.findAll('rock');
  }

  //somehow onLoad, change the value of the "rockSpace"
  // let rockSpace = document.getElementById("rockSpace");
  // console.log("gotten rockspace");
});
