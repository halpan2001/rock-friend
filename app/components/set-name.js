import Component from '@ember/component';

export default Component.extend({
  actions:{
    setName(rock, event){
      event.preventDefault();
      let nameValid = false;

      if (this.title != null){
        nameValid = true;
      }

      if (this.firstName != null){
        nameValid = true;
      }

      if (this.firstName != null){
        nameValid = true;
      }

      let rockName = this.title + " " + this.firstName + " " + this.lastName;

      if (nameValid == true){
        rock.set('name', rockName);
      }

    }
  }
});
