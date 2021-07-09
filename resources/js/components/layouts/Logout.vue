<template>
    <div>
        <h1>The logout component.</h1>
    </div>
</template>


<script>
    export default {
        beforeCreate() {
          this.$store.dispatch('deleteTokenAndUser');
          sessionStorage.removeItem('redirectURL');
          this.$router.push({name: 'home'});
        },
    }
</script>