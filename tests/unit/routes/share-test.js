import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | share', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:share');
    assert.ok(route);
  });
});
