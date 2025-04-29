// images.js
const app2 = Vue.createApp({
  data() {
    return {
      manyFoods: [
        { Foodname: 'Burrito', url: 'https://www.w3schools.com/vue/img_burrito.svg' },
        { Foodname: 'Salad', url: 'https://www.w3schools.com/vue/img_salad.svg' },
        { Foodname: 'Cake', url: 'https://www.w3schools.com/vue/img_cake.svg' },
        { Foodname: 'Soup', url: 'https://www.w3schools.com/vue/img_soup.svg' },
        { Foodname: 'Fish', url: 'https://www.w3schools.com/vue/img_fish.svg' },
        { Foodname: 'Pizza', url: 'https://www.w3schools.com/vue/img_pizza.svg' },
        { Foodname: 'Rice', url: 'https://www.w3schools.com/vue/img_rice.svg' }
      ]
    };
  }
});
app2.mount('#app2');
