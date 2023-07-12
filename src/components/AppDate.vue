<template>
  <!-- :title is shown when hovered over -->
  <span :title="timestamp | humanFriendlyDate">
    <!-- Since diffForHumans is a filter, a special syntax is used as follows: -->
    {{ timestamp | diffForHumans }}
  </span>
</template>
<script>
  import moment from 'moment'
  export default {
    props: {
      timestamp: {
        required: true,
        type: Number
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