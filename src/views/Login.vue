<template>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Login form</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form v-model="valid" ref="form">
                                <v-text-field
                                        prepend-icon="person"
                                        name="email" l
                                        label="Email"
                                        type="text"
                                        v-model="email"
                                        :rules="emailRules"
                                ></v-text-field>
                                <v-text-field
                                        id="password"
                                        prepend-icon="lock"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        :counter="4"
                                        v-model="password"
                                        :rules="passwordRules">
                                </v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="onSubmit" :disabled="!valid">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
    export default {
        data() {
            return {
                valid: false,
                email: '',
                emailRules: [
                    v => !!v || 'Email is required !'
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'Password is empty !',
                    v => (v && v.length >= 4) || 'Password should contain 4 or more digits !'
                ],
            }
        },
        methods: {
            onSubmit() {
                // submit logic
                if(this.$refs.form.validate()) {
                    let loginData = {
                        email: this.email,
                        password: this.password
                    }
                    this.$router.push('/');
                }
            }
        }
    }
</script>

<style scoped>

</style>