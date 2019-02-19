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
                            <v-btn flat color="orange" :to="'/ad/'+item.id">Open</v-btn>
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
                        src: 'https://yachtclubgames.com/wp-content/uploads/2018/08/sk_tt_retail1.png'
                    },
                    {
                        id: '2',
                        title: '2 ad',
                        description: '2-nd ad',
                        promo: false,
                        src: 'https://lumiere-a.akamaihd.net/v1/images/tmk_largegamethumbnails_thorbossbattle_960x540_1_66118d75.png?region=0%2C0%2C960%2C540'
                    },
                    {
                        id: '3',
                        title: '3 ad',
                        description: '3-rd ad',
                        promo: false,
                        src: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_LegoMarvelSuperHeroes2_image950w.jpg'
                    },
                    {
                        id: '4',
                        title: '4 th',
                        description: '4 ad',
                        promo: false,
                        src: 'https://d2q63o9r0h0ohi.cloudfront.net/images/fb-share/facebook-share-default-04812acb25dba13239f3dbe52750ff0f4ae58cc52b5924e7cf6ffea5e1b8993d4f07bb5918b25cb9f8bb8f626f694e20e579f8eb50a43de1c1fd2fc1d6c81a60.jpg'
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