<template>
    <div>
        <p>is logged in: {{ isLoggedIn }}</p>
        <div v-if="isLoggedIn">
            <p>user: {{ user.name }}</p>
            <button @click="signOut">sign out</button>
        </div>
        <div v-if="!isLoggedIn">
            <nuxt-link to="/auth/signup">sign up</nuxt-link>
            <nuxt-link to="/auth/signin">sign in</nuxt-link>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    computed: {
        isLoggedIn () {
            return this.$store.getters['isAuthenticated']
        },
        user () {
            return this.$store.state.user
        }
    },
    methods: {
        signOut () {
            this.$store.dispatch('signOut')
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>

</style>