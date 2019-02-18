<template>
    <div>
        <v-container fluid class="carousel-wrap">
            <v-layout row>
                <v-flex xs12>
                    <v-carousel
                            delimiter-icon="stop"
                            :height="600"
                    >
                        <v-carousel-item
                                v-for="(item,i) in items"
                                :key="i"
                                :src="item.src"
                        >
                            <div class="btn-item">
                                <v-btn :to="'/ad/' + item.id">{{item.title}}</v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container fluid grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 md6 lg4 v-for="(item, i) of items" :key="i">
                    <v-card>
                        <v-img
                                :src="item.src"
                                :height="200"
                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{item.title}}</h3>
                                <div>{{item.description}}</div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat color="orange">Open</v-btn>
                            <v-btn flat color="green">Select</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        id: '1',
                        title: '1 ad',
                        description: '1-st ad',
                        promo: false,
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                    },
                    {
                        id: '2',
                        title: '2 ad',
                        description: '2-nd ad',
                        promo: false,
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                    },                    {
                        id: '3',
                        title: '3 ad',
                        description: '3-rd ad',
                        promo: false,
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .carousel-wrap {
        padding: 0;
    }
    .btn-item {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background-color: rgba(146, 67, 112, .5);
        transform: translate( -50%, 0);
        padding: 10px 30px;
        border-radius: 4px;
        cursor: pointer;
    }
</style>