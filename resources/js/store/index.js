import vueRouter from '../router/index';

export default
    {

        state: {

            categories: [],
            products: [],
            user: {},
            authenticated: false,

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
            },
            getAuthenticated(state) {
                return state.authenticated;
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

            async fetchUser(context) {
                console.log("fetchuser action");
                const response = await axios.get('/api/user');
                context.commit('setUser', response.data);
                context.commit('setAuthenticated', true);
                localStorage.setItem("auth", 'true');

            },

            authUser(context) {

                // return Promise.reject(new Error('Dispatch failed'));
                axios.get('/api/user').then(response => {
                    context.commit('setUser', response.data);
                    context.commit('setAuthenticated', true);
                    localStorage.setItem("auth", 'true');

                    if (vueRouter.currentRoute.name !== null && vueRouter.currentRoute.name === 'login') {

                        vueRouter.push({ name: 'dashboard' })
                    };
                    console.log("perfectly working from authUser action");

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
            ,
            setAuthenticated(state, data) {

                state.authenticated = data;
            }

        }
    }