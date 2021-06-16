Vue.component('form-search', {
    data: function() {
        return {
            userSearch: ''
        }
    },
    template: `
    <form action="#" class="search-form" @submit.prevent="inputForm">
        <input type="text" class="search-field" v-model="userSearch">
        <button type="submit" class="btn-search">
            <i class="fas fa-search"></i>
        </button>
    </form>
    `, 
    methods: {
        inputForm() {
            this.$emit('search', this.userSearch);
        }
    }
})