







<script>


    export default {
        components: {
            headerCom: Header,
        },

    mounted() {

      axios({
          method: 'get',
          url: 'http://e-commerce.com/api/featured-products'
      })
          .then(res => {
              console.log(res.data);
          })
          .catch(err => {
              console.log(err);
          });
    },
}
</script>