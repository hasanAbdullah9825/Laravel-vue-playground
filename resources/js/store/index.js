export default
    {

        state: {

            categories: [],
            products: [],
         
        },
        getters: {

            AllCategory(state) {
                return state.categories;
            },
            AllProduct(state) {
                return state.products;
            },
        },
        actions: {

            fetchAllCategory(context) {
                axios.get('/api/categories').then(response => {

                    context.commit('setCategories', response.data);
                })
            },

            fetchAllProduct(context) {
                axios.get('/api/products').then(response => {

                    context.commit('setProducts', response.data);
                })
            },
           
            
        },
        mutations: {
            setCategories(state, data) {
                state.categories = data;
            },
            setProducts(state, data) {
                state.products = data;
            },
           
        }
    }