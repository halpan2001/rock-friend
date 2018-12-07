import { module, test} from 'qunit';
import { visit, currentURL, fillIn, click} from '@ember/test-helpers';
import { setupApplicationTest} from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import window, {} from 'ember-window-mock';

module('Acceptance | rock', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting / | VISITING INDEX PAGE', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });

  test('visiting /create | VISITING CREATE PAGE', async function(assert) {
    await visit('/create');
    assert.equal(currentURL(), '/create');
  });

  test('C |reating Rocks works', async function(assert){
    server.create( 'rock', {
      name: "Rockity Rock Rock",
      pColor: "#000000",
      rColor: '#ffffff',
      bColor: "#sbsbsb"
    });
    server.create( 'rock', {
      name: "Rockity Rock Rock",
      pColor: "#000000",
      rColor: '#ffffff',
      bColor: "#sbsbsb"
    });
    server.create( 'rock', {
      name: "Rockity Rock Rock",
      pColor: "#000000",
      rColor: '#ffffff',
      bColor: "#sbsbsb"
    });

    await visit('/');
    assert.dom('[data-test="rock"]').exists({count: 4});


  });

  test('R |eading a Rocks works', async function(assert){
    server.create( 'rock', {
      name: "Rockity Rock Rock",
      pColor: "#000000",
      rColor: '#ffffff',
      bColor: "#sbsbsb"
    });

    await visit('/');
    assert.dom('[data-test="rockName"]').hasText('Rockity Rock Rock');
  });

  test('U |pdating a Rock works', async function (assert){
    server.create('rock', {
      name: "Rockity Rock Rock",
      pColor: "#000000",
      rColor: '#ffffff',
      bColor: "#sbsbsb"
    });
    server.create('rock', {
      name: "Rockity Rock Rock2",
      pColor: "#000000",
      rColor: '#ffffff',
      bColor: "#sbsbsb"
    });

    await visit('/edit/2');

    assert.dom('[data-test=rockName]').hasText('Rockity Rock Rock2');

    await fillIn('#titleIn', 'The');
    await fillIn('#firstName', 'Golden');
    await fillIn('#lastName', 'Round');

    await click('[data-test="setName"]');

    assert.equal(currentURL(), '/edit/2');
    assert.dom('[data-test=rockName]').hasText('The Golden Round');

  });

  test('D |eleting a Rock works', async function (assert){
    window.confirm = () => true;

    server.create('rock',{
      name: "Rockity Rock Rock",
      pColor: "#000000",
      rColor: '#ffffff',
      bColor: "#sbsbsb"
    });
    server.create('rock',{
      name: "Rockity Sacrifice Rock2",
      pColor: "#000000",
      rColor: '#ffffff',
      bColor: "#sbsbsb"
    });

    await visit('/edit/2');
    await click ('[data-test="deleteRock"]');

    assert.equal(currentURL(), '/');



  });


});
