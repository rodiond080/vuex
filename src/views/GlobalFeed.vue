<template>
<div class='home-page'>
  <mcv-banner />
  <div class='container page'>
    <div class='row'>
      <div class='col-md-9'>
        <mcv-feed-toggler />
        <mcv-feed :api-url='apiUrl' />
      </div>
      <div class='col-md-3'>
        <mcv-popular-tags />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import McvFeed from '@/components/FeedView'
import McvPopularTags from '@/components/PopularTags';
import McvBanner from '@/components/Banner';
import McvFeedToggler from '@/components/FeedToggler';

export default {
  name: 'McvGlobalFeed',
  components: {McvFeedToggler, McvPopularTags, McvFeed, McvBanner},
  data(){
    return {
      apiUrl:'/articles'
    }
  }
};
</script>

<style scoped>

</style>
