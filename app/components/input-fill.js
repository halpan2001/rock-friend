import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  isfilled: computed('text', function() {
    let textLength = this.text ? this.text.length : 0; // ternary statement
    if (textLength == 0){
      return "Field cannot be blank";
    }else{
      return '';
    }

  }),


});
