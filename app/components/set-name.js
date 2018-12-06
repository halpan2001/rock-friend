import Component from '@ember/component';

export default Component.extend({
  actions:{
    setName(rock, event){
      event.preventDefault();

      let rockName = this.title + " " + this.firstName + " " + this.lastName;

      rock.set('name', rockName);
    }
  }
});
