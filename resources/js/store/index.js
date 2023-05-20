export default
    {

        state: {

            categories: [],
            products: [],
            user: {}

        },
        getters: {

            AllCategory(state) {
                return state.categories;
            },
            AllProduct(state) {
                return state.products;
            },
            User(state) {
                return state.user;
            }
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

            fetchUser(context) {
                axios.get('/api/user').then(response => {
                    context.commit('setUser', response.data);
                });
            }

        },
        mutations: {
            setCategories(state, data) {
                state.categories = data;
            },
            setProducts(state, data) {
                state.products = data;
            },
            setUser(state, data) {
                state.user = data;
            }

        }
    }