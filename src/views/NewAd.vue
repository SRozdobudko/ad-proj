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
                <img src="" height="200px">
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
                        :disabled="!valid"
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
                promo: false,
                valid: false
            }
        },
         methods: {
            createAd() {
                if(this.$refs.form.validate()) {
                    const ad = {title: this.title, description: this.description, promo: this.promo};
                }
            }
         }
    }
</script>

<style scoped>

</style>