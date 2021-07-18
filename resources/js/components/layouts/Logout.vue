<template>
    <div>
        <h1>The logout component.</h1>
    </div>
</template>


<script>
    export default {
        beforeCreate() {
          sessionStorage.removeItem('redirectURL');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          this.$router.push({name: 'home'});
        },
    }
</script>