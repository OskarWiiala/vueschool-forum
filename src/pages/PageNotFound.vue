<template>
  <div class="col-full" :class="$style.centered">
    <!-- Because the class names included dashes (-), brackets must be used -->
    <!-- <h1 :class="$style['heading-large']">Page not Found</h1> -->

    <!-- Alternatively, you can use camelcase class names -->
    <h1 :class="$style.headingLarge">Page not Found</h1>
    <p class="text-large" :class="$style.textLarge">Oops, we could not find what you are looking for. Why don't you
      <router-link :to="{ name: 'PageHome' }">
        go home instead?
      </router-link>
    </p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style module>
.headingLarge {
  font-size: 100px;
}

.textLarge {
  font-size: 50px;
  font-weight: 100;
}

.centered {
  text-align: center;
}
</style>