<template>
    <div>
        <v-navigation-drawer
                v-model="drawer"
                fixed
                app
                v-if="true"
        >
            <v-list dense>
                <v-list-tile v-for="(link, index) of links" :key="index" :to="link.url">
                    <v-list-tile-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{link.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="pointer">
                <router-link :to="'/'" tag="span">Ad-app - {{user ? user.email : ''}}</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat
                       v-for="(link, index) in links"
                       :key="index"
                       :to="link.url">
                    <v-icon left>{{ link.icon }}</v-icon>
                    {{link.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            logged: false
        }),
        computed: {
            links() {
                if (!this.logged) {
                    return [
                        // {title: 'Home', icon: 'home', url: '/'},
                        {title: 'Login', icon: 'lock', url: '/login'},
                        {title: 'New ad', icon: 'note_add', url: '/new'},
                        {title: 'My ads', icon: 'list', url: '/list'},
                        {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
                        {title: 'Registration', icon: 'face', url: '/registration'}
                    ]
                } else {
                    return [
                        {title: 'New ad', icon: 'note_add', url: '/new'},
                        {title: 'My ads', icon: 'list', url: '/list'},
                        {title: 'Orders', icon: 'bookmark_border', url: '/orders'}
                    ]
                }
            },
            user() {
                return this.$store.getters.user;
            }
        }
    }
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>
