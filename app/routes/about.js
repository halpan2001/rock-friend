import Route from '@ember/routing/route';

export default Route.extend({
  title: "About | Rock Friend",
  model(){
    return this.store.findRecord('rock', 1);
  }
});
