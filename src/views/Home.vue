<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <NavMenu/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { NavMenu } from '@/components/navigation';

@Component({
  components: {
    HelloWorld,
    NavMenu
  }
})
export default class Home extends Vue {}
</script>
