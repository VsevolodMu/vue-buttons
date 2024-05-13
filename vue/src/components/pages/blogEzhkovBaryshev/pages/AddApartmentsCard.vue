<template>
  <div class="add-page island-styles">
    <HeaderNav/>
    <div class="add-page__inputs">
      <input
          v-model="id"
          type="text"
          placeholder="Place your id here"
          class="add-page__inputs__standard window"
      />
      <input
          v-model="name"
          type="text"
          placeholder="Place your name here"
          class="add-page__inputs__standard window"
      />
      <input
          v-model="price"
          type="text"
          placeholder="Place your price here"
          class="add-page__inputs__standard window"
      />
      <input
          v-model="guests"
          type="text"
          placeholder="Place your guests here"
          class="add-page__inputs__standard window"
      />
      <input
          v-model="bedrooms"
          type="text"
          placeholder="Place your bedrooms here"
          class="add-page__inputs__standard window"
      />
      <input
          v-model="bathrooms"
          type="text"
          placeholder="Place your bathrooms here"
          class="add-page__inputs__standard window"
      />
      <input
          v-model="place"
          type="text"
          placeholder="Place your place here"
          class="add-page__inputs__standard window"
      />
      <input
          v-model="image"
          type="text"
          placeholder="Place your url here"
          class="add-page__inputs__image window"
      />
    </div>
    <button class="add-page__create-btn" @click="() => create()">
      Create
    </button>
  </div>
</template>

<script>
import HeaderNav from "@/components/pages/blogEzhkovBaryshev/components/HeaderNav.vue";
import {mapActions} from "vuex";

export default {
  name: 'AddTourPage',
  components: {
    HeaderNav
  },
  data() {
    return {
      id: '',
      name: '',
      price: '',
      guests: '',
      bedrooms: '',
      bathrooms: '',
      place: '',
      image: ''
    }
  },
  methods: {
    ...mapActions('ApartmentsCardStore', [
      'addSmallCard'
    ]),
    create() {
      if (this.id === '' || this.name === '' || this.price === '' || this.guests === '' || this.bedrooms === '' || this.bathrooms === '' || this.place === '' || this.image === '')
        alert('Данные введены некоректно')
      else {
        const newTour = {
          id: this.id,
          name: this.name,
          price: this.price,
          guests: this.guests,
          bedrooms: this.bedrooms,
          bathrooms: this.bathrooms,
          place: this.place,
          image: this.image
        };
        this.addSmallCard(newTour);
        this.id = '';
        this.name = '';
        this.price = '';
        this.guests = '';
        this.bedrooms = '';
        this.bathrooms = '';
        this.place = '';
        this.image = '';
      }
    }
  }
}
</script>

<style scoped lang="less">
.add-page {
  padding: 20px 20px;
  height: 100vh;
  background-color: #88509d;
  display: flex;
  flex-direction: column;

  &__inputs {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  &__create-btn {
    align-self: center;
    width: 20%;
    background: none;
    border-radius: 10px;
    font-size: 58px;

    &:hover {
      backdrop-filter: brightness(50%);
    }
  }
}

.window {
  font-size: 48px;
  border-radius: 15px;
  width: 60%;
  height: auto;
}
</style>