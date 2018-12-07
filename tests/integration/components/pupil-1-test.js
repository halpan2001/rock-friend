import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pupil-1', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{pupil-1}}`);

    assert.equal(this.element.textContent.trim(), '.cls-1{fill:#605122;}Pupil1');

    // Template block usage:
    // await render(hbs`
    //   {{#pupil-1}}
    //     template block text
    //   {{/pupil-1}}
    // `);
    //
    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
