<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-list
                        subheader
                        two-line
                >
                    <v-subheader>Orders list:</v-subheader>

                    <v-list-tile v-for="(item, i) of ads" :key="i">
                        <v-list-tile-action>
                            <v-checkbox @change="markDone(item)"></v-checkbox>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{item.name}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{item.phone}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn text :to="'/ad/'+ item.adId"> Open</v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                ads: [{
                    id: '123123',
                    name: 'Boris',
                    phone: '634755505',
                    adId: '321',
                    done: false
                },{
                    id: '6542',
                    name: 'Oleg',
                    phone: '686033303',
                    adId: '132',
                    done: false
                }]
            }
        },
        methods: {
            markDone(item) {
                item.done = true;
            }
        }
    }
</script>

<style scoped>

</style>