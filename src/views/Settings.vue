<template>
  <div class='settings-page' v-if='currentUser'>
    <div class='container page'>
      <div class='row'>
        <div class='col-md-6 offset-md-3 col-xs-12'>
          <h1 class='text-xs-center'>Settings</h1>
          <mcv-validation-errors v-if='validationErrors' :validation-errors='validationErrors' />
          <form @submit.prevent='onsubmit'>
            <fieldset>
              <fieldset class='form-group'>
                <input
                  type='text'
                  class='form-control form-control-lg'
                  v-model='form.image'
                  placeholder='URL of profile picture'
                >
              </fieldset>

              <fieldset class='form-group'>
                <input
                  type='text'
                  class='form-control form-control-lg'
                  v-model='form.username'
                  placeholder='Username'
                >
              </fieldset>

              <fieldset class='form-group'>
                <textarea
                  type='text'
                  class='form-control form-control-lg'
                  v-model='form.biography'
                  placeholder='Short biography about you'
                />
              </fieldset>

              <fieldset class='form-group'>
                <input
                  type='text'
                  class='form-control form-control-lg'
                  v-model='form.email'
                  placeholder='Email'
                >
              </fieldset>

              <fieldset class='form-group'>
                <input
                  type='password'
                  class='form-control form-control-lg'
                  v-model='form.password'
                  placeholder='Password'
                >
              </fieldset>

              <button
                type='submit'
                class='btn btn-lg btn-primary pull-xs-right'
                :disabled='isSubmitting'
              >Update settings</button>
            </fieldset>
          </form>
          <hr>
          <button class='btn btn-outline-danger' @click='logout'>
            Or click here to log out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import {getterTypes as authGetterTypes} from '@/store/modules/auth';
import {actionTypes as authActionTypes} from '@/store/modules/auth';
import McvValidationErrors from '@/components/ValidationErrors';


export default {
  name: 'McvSettings',
  components: {McvValidationErrors},
  computed:{
    ...mapState({
      isSubmitting: state => state.settings.isSubmitting,
      validationErrors: state => state.settings.validationErrors,
    }),
    ...mapGetters({
      currentUser:authGetterTypes.currentUser
    }),
    form(){
        return {
          username:this.currentUser.username,
          bio:this.currentUser.bio,
          image:this.currentUser.image,
          password:'',
        }
    }
  },
  methods:{
    logout(){
      this.$store.dispatch(authActionTypes.logout)
      .then(()=>{
        this.$router.push({name:'GlobalFeed'})
      });
    },
    onsubmit(){
      this.$store.dispatch(authActionTypes.updateCurrentUser, {currentUserInput:this.form})
    }
  }
};
</script>
