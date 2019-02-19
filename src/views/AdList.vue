<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h3>Ad list:</h3>
                <v-card v-for="(item, i) of myAds" :key="i" class="mb-3">
                    <v-layout row>
                        <v-flex xs4>
                            <v-img
                                    :src="item.src"
                                    aspect-ratio="2.75"
                            ></v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h3>{{item.title}}</h3>
                                <p class="mb-0">{{item.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text :to="'/ad/'+ item.id">Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed: {
            myAds() {
                return this.$store.getters.myAds;
            }
        }
    }
</script>

<style scoped>

</style>