<template>
    <div>
        <div class="container-fluid">

            <div class="row min-vh-100">
                <header-com></header-com>
                <div class="col-12">
                    <div class="row">
                        <div class="col-12 mt-3 text-center text-uppercase">
                            <h2>Shopping Cart</h2>
                        </div>
                    </div>


                    <main class="row">
                        <div class="col-12 bg-white py-3 mb-3">
                            <div class="row">
                                <div class="col-lg-6 col-md-8 col-sm-10 mx-auto table-responsive">
                                    <form class="row">
                                        <div class="col-12">
                                            <table class="table table-striped table-hover table-sm">
                                                <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Price</th>
                                                    <th>Qty</th>
                                                    <th>Amount</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="/temp/images/image-2.jpg" class="img-fluid">
                                                        Optoma 4K HDR Projector
                                                    </td>
                                                    <td>
                                                        $1,500
                                                    </td>
                                                    <td>
                                                        <input type="number" min="1" value="1">
                                                    </td>
                                                    <td>
                                                        $1,500
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-link text-danger"><i class="fas fa-times"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="/temp/images/image-3.jpg" class="img-fluid">
                                                        HP Envy Specter 360
                                                    </td>
                                                    <td>
                                                        $2,500
                                                    </td>
                                                    <td>
                                                        <input type="number" min="1" value="1">
                                                    </td>
                                                    <td>
                                                        $2,500
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-link text-danger"><i class="fas fa-times"></i></button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                                <tfoot>
                                                <tr>
                                                    <th colspan="3" class="text-right">Total</th>
                                                    <th>$4,000</th>
                                                    <th></th>
                                                </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div class="col-12 text-right">
                                            <button class="btn btn-outline-secondary mr-3" type="submit">Update</button>
                                            <router-link :to="{name: 'checkout'}" class="btn btn-outline-success">Checkout</router-link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>





                    </main>
                    <!-- Main Content -->

                </div>
                <footer-com></footer-com>

            </div>

        </div>


    </div>
</template>
<script>
    import Header from "./Header";
    import Footer from "./Footer";
    export default {
        components: {
            headerCom: Header,
            footerCom: Footer,
        },


    }
</script>

