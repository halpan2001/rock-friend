import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | rock-1', function(hooks) {
  setupRenderingTest(hooks);

  test('Rock | Renders As Expected', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{rock-1}}`);

    assert.equal(this.element.textContent.trim(), '.cls-1{fill:#9bcce7;}RockBody1');
  });
});
