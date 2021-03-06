import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | eye-ball-1', function(hooks) {
  setupRenderingTest(hooks);

  test('Eye Ball | Renders As Expected', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{eye-ball-1}}`);

    assert.equal(this.element.textContent.trim(), '.cls-1{fill:#fff;}EyeBall1');

    // // Template block usage:
    // await render(hbs`
    //   {{#eye-ball-1}}
    //     template block text
    //   {{/eye-ball-1}}
    // `);
    //
    // assert.equal(this.element.textContent.trim(), '.cls-1{fill:#fff;}EyeBall1');
  });
});
