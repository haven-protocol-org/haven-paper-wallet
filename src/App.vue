<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      test: 'XHV'
    }
  },
  mounted() {
    // console.log('>>>> App mounted:', this)
  },
}
</script>

<style>
html {
  font-size: 110%;
}
#app {
  font-family: 'Proximanova', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0C091D;
}

h1, h2 {
  font-weight: 700;
  font-size: 50px
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 1px;
}

a {
  color: #336A80;
}

p {
  font-size: 18px
}
@font-face {
  font-family: 'Proximanova';
  src: url('/fonts/ProximaNova-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Proximanova';
  src: url('/fonts/ProximaNova-Black.otf') format('opentype');
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: 'Proximanova';
  src: url('/fonts/ProximaNova-Extrabold.otf') format('opentype');
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: 'Proximanova';
  src: url('/fonts/ProximaNova-Bold.otf') format('opentype');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'Proximanova';
  src: url('/fonts/ProximaNova-Semibold.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
}
</style>
