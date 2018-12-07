import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | input-fill', function(hooks) {
  setupRenderingTest(hooks);

  test('Input Fill | When Empty', async function(assert) {
    await render(hbs`
      <InputFill
        class="fillCheck"
        @text={{title}}
        data-test="input-fill"/>
    `);

    assert.dom('[data-test="input-fill"]').hasText('Field cannot be blank');

  });

  test('Input Fill | When not Empty', async function(assert){
    this.set('text', 'THIS IS TEXT');
    await render(hbs`
      <InputFill
        class="fillCheck"
        @text={{text}}
        data-test="input-fill"/>
    `);

    assert.dom('[data-test="input-fill"]').hasText('');

  });
});
