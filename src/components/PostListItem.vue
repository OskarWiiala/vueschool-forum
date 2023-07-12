<template>
  <div class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{
        user.name
      }}</a>

      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="" />
      </a>

      <p class="desktop-only text-small">{{ userPostsCount }} posts</p>
    </div>

    <div class="post-content">
      <div>
        <p>
          {{ post.text }}
        </p>
      </div>
    </div>

    <!-- :title is shown when hovered over -->
    <div class="post-date text-faded" :title="post.publishedAt | humanFriendlyDate">
      <!-- Since diffForHumans is a filter, a special syntax is used as follows: -->
      {{ post.publishedAt | diffForHumans }}
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data'
  import moment from 'moment'
  export default {
    props: {
      post: {
        required: true,
        type: Object
      }
    },

    computed: {
      user () {
        return sourceData.users[this.post.userId]
      },

      userPostsCount () {
        return Object.keys(this.user.posts).length
      }
    },

    filters: {
      humanFriendlyDate (date) {
        return moment.unix(date).format('MMM Do YYYY, h:mm:ss a')
      },

      // Time elapsed since posted
      diffForHumans (date) {
        return moment.unix(date).fromNow()
      }
    }
  }
</script>

<style></style>