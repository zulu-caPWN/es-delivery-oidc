<template>
  <div class="login">
    <!-- Display either the sign in or sign out button based on authN state -->
    <div>
      <a href="#" v-if="authState && authState.isAuthenticated" @click="logout"
        >Logout</a
      >
      <!--Redirect model of AuthN-->
      <a href="#" v-else @click="login">Log In</a>

      <!--Embedded SDK model of AuthN-->
      <!--<a href="/login" v-else>Log In</a>-->
    </div>

    <h1>{{ msg }}</h1>
  </div>
</template>

<!-- Script supporting the sign in and sign out actions -->
<script>
export default {
  name: "Login",
  methods: {
    async login() {
      await this.$auth.signInWithRedirect({ originalUri: "/" });
    },
    async logout() {
      // Ends Okta Session
      await this.$auth.signOut();
      // Logs User out of App but does not end Okta Session
      // await this.$auth.tokenManager.clear();
      // router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  display: inline-block;
}
</style>
