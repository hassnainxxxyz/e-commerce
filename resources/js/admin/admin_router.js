Vue.use(VueRouter);
import Routes from "./admin_routes";




const vueRouter = new VueRouter({
   mode: 'history',
   routes: Routes,
});


export default vueRouter;


