<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <h3 class="mb-3"> Create new</h3>
                <v-form v-model="valid" ref="form">
                    <v-text-field
                            name="title"
                            label="Title"
                            type="text"
                            v-model="title"
                            :rules="[v => !!v || 'Title is required !']"
                    ></v-text-field>
                    <v-text-field
                            name="description"
                            label="Description"
                            type="text"
                            v-model="description"
                            :rules="[v => !!v || 'Description is required !']"
                    >
                    </v-text-field>
                </v-form>
            </v-flex>
        </v-layout>
        <v-layout row class="mb-3">
            <v-flex xs12 sm6 offset-sm3>
                <v-btn
                        color="blue-grey"
                        class="warning">
                    Upload
                    <v-icon right dark>cloud_upload</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <img src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2018/05/deadpool-2-thumbs-up-header.jpg" height="200px">
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-switch
                        color="primary"
                        v-model="promo"
                        :label="`Promo: ${promo.toString()}`"
                ></v-switch>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-btn
                        :loading="loading"
                        :disabled="!valid || loading"
                        color="blue-grey"
                        class="primary"
                @click="createAd">
                    Create
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                description: '',
                src: '',
                promo: false,
                valid: false
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading;
            }
        },
         methods: {
            createAd() {
                if(this.$refs.form.validate()) {
                    const ad = {title: this.title, description: this.description, promo: this.promo, src: 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2018/05/deadpool-2-thumbs-up-header.jpg'};
                    this.$store.dispatch('setLoading', true);
                    setTimeout(() => {
                        this.$store.dispatch('createAd', ad); // will call NEW ACTION
                        this.$store.dispatch('setLoading', false);
                        this.promo = false;
                        this.$refs.form.reset();
                    }, 1000);
                }
            }
         }
    }
</script>

<style scoped>

</style>