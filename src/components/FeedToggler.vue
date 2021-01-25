<template>
<div class='feed-toggler'>
  <ul class='nav nav-pills outline-active'>
    <li class='nav-item' v-if='isLoggedIn'>
      <router-link :to="{name:'YourFeed'}" class='nav-link' :class="{active: routeName=== 'YourFeed'}">
        Your feed
      </router-link>
    </li>

    <li class='nav-item' >
      <router-link :to="{name:'GlobalFeed'}" class='nav-link' :class="{active: routeName=== 'GlobalFeed'}">
        Global feed
      </router-link>
    </li>

    <li class='nav-item' v-if='tagName' >
      <router-link :to="{name:'TagFeed'}" class='nav-link' :class="{active: routeName=== 'TagFeed'}">
        <i class='ion-pound' />
       {{tagName}}
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {getterTypes} from '@/store/modules/auth';

export default {
  name: 'McvFeedToggler',
  props: {
    tagName: {
      type: String,
      required: false
    }
  },
  computed:{
    ...mapGetters({
      isLoggedIn:getterTypes.isLoggedIn
    }),
    routeName(){
      return this.$route.name;
    }
  }
};
</script>
