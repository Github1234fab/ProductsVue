<template>
  <div class="container_card">
    <div class="card">
      <img
        class="image"
        :src="'https://' + product.imageUrl"
        alt="image de produits"
      />
      <h1 class="title">{{ product.brandName }}</h1>
      <h2 class="colour">{{ product.colour }}</h2>
      <h2 class="price">{{ product.price.current.text }} €</h2>

      <!-- COLLAPSE BS --------------------------------------------------------------------------- -->
      <div class="accordion" :id="'accordionExample-' + product.id">
        <div class="accordion-item">
          <h2 class="accordion-header" :id="'headingOne-' + product.id">
            <button
              class="accordion-button text-body bg-light shadow"
              type="button"
              :aria-controls="'collapseOne-' + product.id"
            >
              Description
            </button>
          </h2>
          <div
            :id="'collapseOne-' + product.id"
            class="accordion-collapse collapse"
            :aria-labelledby="'headingOne-' + product.id"
            :data-parent="'#accordionExample-' + product.id"
          >
            <div class="accordion-body">
              {{ product.name }}
            </div>
          </div>
        </div>
      </div>
      <!-- COLLAPSE BS --------------------------------------------------------------------------- -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    const button = this.$el.querySelector(
      `#headingOne-${this.product.id} button`
    )
    const collapse = this.$el.querySelector(`#collapseOne-${this.product.id}`)
    button.addEventListener('click', () => {
      collapse.classList.toggle('show')
    })
  },
}
</script>

<style>
.accordion {
  width: 100%;
  height: 100%;
}
.accordion-item {
  border: none;
  width: 100%;
}
.accordion-header {
  width: 100%;
}
.accordion-button {
  padding: 5px;
  color: white;
  padding: 10px;
  width: 100%;
  /* background: linear-gradient(113.5deg, rgb(234, 234, 234) 22.3%, rgb(201, 234, 211) 56.6%, rgb(255, 180, 189) 90.9%); */
  font-family: poppins;
  color: black;
}

.card {
  box-shadow: 0px 0px 8px -3px rgb(74, 72, 72);
  background-color: rgb(255, 255, 255);
  height: 100%;
  width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: 20px;
  padding: 20px;
  font-family: poppins;
  border-radius: 15px;
  border: none;
}
.title {
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  font-family: poppins;
}
.price {
  font-size: 14px;
  font-weight: 700;
  font-family: poppins;
  margin-top: 10px;
}
.description {
  font-size: 12px;
  font-family: Cambria, serif;
  font-family: poppins;
  margin-bottom: 15px;
  background-color: lightGrey;
}
.colour {
  font-size: 14px;
  font-family: poppins;
  font-weight: 300;
  text-transform: lowerCase;
}
.image {
  height: 265px;
  width: 265px;
  border-radius: 15px;
  margin-top: -15px;
  object-fit: cover;
}
</style>
