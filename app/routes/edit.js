import Route from '@ember/routing/route';

export default Route.extend({
  title: "Edit | Rock Friend",
  model(params){
    return this.store.findRecord('rock', params.id);
  }
});
