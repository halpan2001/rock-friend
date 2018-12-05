import SpectrumColorPickerComponent from 'ember-spectrum-color-picker/components/spectrum-color-picker';

export default SpectrumColorPickerComponent.extend({
  actions:{
    colorChange(newValue){
      console.log(newValue);
    },

  },
  showInput: true,
  showAlpha: true,
  preferredFormat: "hex"
});
