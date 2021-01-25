<template>
<div>
  <mcv-loading v-if='isLoading'/>
  <mcv-error-message v-if='error' message='There is an error in popular tags generation' />
  <div class='sidebar' v-if='popularTags'>
    <p>Popular tags</p>
    <div class='tag-list'>
      <router-link
        class='tag-default tag-pill'
        v-for='popularTag in popularTags'
        :key='popularTag'
        :to="{name: 'TagFeed', params:{slug: popularTag}}">
        {{popularTag}}
      </router-link>
    </div>
  </div>

</div>
</template>

<script>
import {mapState} from 'vuex';
import {actionTypes} from '@/store/modules/popularTags';
import McvLoading from '@/components/Loading';
import McvErrorMessage from '@/components/ErrorMessage';

export default {
  name: 'McvPopularTags',
  components:{
    McvLoading,
    McvErrorMessage
  },
  computed: {
    ...mapState({
      isLoading: state => state.popularTags.isLoading,
      popularTags: state => state.popularTags.data,
      error: state => state.popularTags.error,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags);
  },
};
</script>
