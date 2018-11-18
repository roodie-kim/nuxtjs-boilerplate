<template>
    <div>
        <form @submit.prevent="signUp">
            <input
                v-model="user.email"
                type="email"
                name="email"
                placeholder="email">
            <input
                v-model="user.password"
                type="password"
                name="password"
                placeholder="password">
            <input
                v-model="user.name"
                type="text"
                name="name"
                placeholder="name">
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    middleware: 'guest',
    data () {
        return {
            user: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        async signUp () {
            const response = await this.$store.dispatch('signUp', this.user)
            if (response.status) {
                this.$store.dispatch('readUser')
                this.$router.push('/')
            }
        }
    }

}
</script>

<style scoped>

</style>