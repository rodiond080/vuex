<template>
<div class='home-page'>
  <mcv-banner />
  <div class='container page'>
    <div class='row'>
      <div class='col-md-9'>
        <mcv-feed-toggler :tag-name="this.tagName" />
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
import McvFeed from '@/components/FeedView';
import McvPopularTags from '@/components/PopularTags';
import McvBanner from '@/components/Banner';
import McvFeedToggler from '@/components/FeedToggler';

export default {
  name: 'McvTagFeed',
  components: {McvPopularTags, McvFeed, McvBanner, McvFeedToggler},
  computed:{
    tagName(){
      return this.$route.params.slug;
    },
    apiUrl(){
      return `/articles?tag=${this.tagName}`;
    }
  }
};
</script>

<style scoped>

</style>
