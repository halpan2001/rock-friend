import Route from '@ember/routing/route';

export default Route.extend({
  title: "Random | Rock Friend",
  model(){
    return this.store.findRecord('rock', 1);
  }

  //somehow onLoad, change the value of the "rockSpace"
  // let rockSpace = document.getElementById("rockSpace");
  // console.log("gotten rockspace");
});
