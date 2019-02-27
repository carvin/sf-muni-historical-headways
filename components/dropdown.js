Vue.component('dropdown',{
  data: function() {
    return {
      id: null,
      value: null
    }
  },
  props: ['options','title','default'],
  mounted: function() {
    this.id = this._uid;

    if(this.default && !this.value){
      this.value = this.default;
      this.$emit('change-value',this.default);
    }
  },
  methods: {
    onChange: function(event){
      this.value = event.target.value;
      this.$emit('change-value',event.target.value);
    }
  },
  template: "#dropdown-template"
});
