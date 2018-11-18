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
            <div>
                <button type="submit">Sign In</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            user: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        async signIn () {
            const response = await this.$store.dispatch('signIn', this.user)
            if (response.status) {
                this.$store.dispatch('readUser')
            }
        }
    }

}
</script>

<style scoped>

</style>