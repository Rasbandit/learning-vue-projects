const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: '',
    };
  },
  computed: {
    filtedFruits() {
      return this.fruits.filter(fruit => fruit.toLowerCase().includes(this.filterText.toLowerCase()));
    },
  },
};

export default fruitMixin;
