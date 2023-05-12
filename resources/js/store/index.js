export default
    {

        state: {

            categories: [],
         
        },
        getters: {

            AllCategory(state) {
                return state.categories;
            },
        },
        actions: {

            fetchAllCategory(context) {
                axios.get('/api/categories').then(response => {

                    context.commit('setCategories', response.data);
                })
            },
           
            
        },
        mutations: {
            setCategories(state, data) {
                state.categories = data;
            },
           
        }
    }