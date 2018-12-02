export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `/api`, for example, if your API is namespaced
  this.timing = 1000;      // delay for each request, automatically set to 0 during testing


  //Shorthand cheatsheet:

    this.get('/rocks');
    this.post('/rocks');
    this.get('/rocks/:id');
    this.put('/rocks/:id'); // or this.patch
    this.patch('/rocks/:id')
    this.del('/rocks/:id');

    //http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
}
