import Route from '@ember/routing/route';

export default Route.extend({
  title: "Create | Rock Friend",
  model(){
    return this.store.findRecord('rock', 1);
  }
});
