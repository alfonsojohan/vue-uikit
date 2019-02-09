<template>
  <div class="uc-home">
    <MainNav></MainNav>
    <div class="uk-container uk-container-expand uk-child-width-1-1 uk-margin">
      <!-- News feed -->
      <div
        class="uk-card uk-card-default uk-box-shadow-large uk-margin uk-padding uk-border-rounded"
      >
        <h4 class="uk-card-title uk-text-center">News Feed</h4>
        <div
          class="uk-card uk-card-body uk-padding-remove uk-margin"
          v-for="(item, index) in feedItems"
          :key="item.id"
        >
          <div uk-grid class="uk-grid-small">
            <div style="width:20px;">
              <font-awesome-icon :icon="item.icon" style="color:#b44;"></font-awesome-icon>
            </div>
            <div class="uk-width-expand">{{ item.text }} #{{index + 1}}</div>
            <div style="width: 20px;">
              <font-awesome-icon icon="chevron-circle-right" size="lg" v-if="item.url"></font-awesome-icon>
            </div>
          </div>
          <hr>
        </div>
      </div>

      <!-- UPcoming classes -->
      <div
        class="uk-card uk-card-default uk-box-shadow-large uk-margin uk-padding uk-border-rounded"
      >
        <h4 class="uk-card-title uk-text-center">Upcoming Classes</h4>
        <div
          class="uk-card uk-card-body uk-padding-remove uk-margin"
          v-for="(item, index) in classes"
          :key="item.id"
        >
          <p
            class="uk-text-uppercase uk-text-large"
          >{{index + 1}} . {{ item.course }} ({{item.section}})</p>
          <p>
            <font-awesome-icon :icon="['far', 'clock']"></font-awesome-icon>&nbsp;
            {{item.date}} {{item.time }}
          </p>
          <p>
            <font-awesome-icon icon="map-marker-alt"></font-awesome-icon>&nbsp;
            {{ item.location}}
          </p>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from "../components/MainNav";

export default {
  components: {
    MainNav
  },
  data: function() {
    return {
      feedItems: [
        {
          id: 1,
          icon: "book",
          text: "Feed item",
          url: "#"
        },
        {
          id: 2,
          icon: "ambulance",
          text:
            "Very looooo oooooooooo oooooooooo oooong text. Some more loooooooooooooooooooong text. Feed item",
          url: null
        },
        {
          id: 3,
          icon: "comment-alt",
          text: "Feed item",
          url: "#"
        },
        {
          icon: "book",
          text: "Feed item",
          url: "#"
        }
      ],
      classes: [
        {
          id: 1,
          course: "Bagb1234 Principles of Hello World",
          section: "MC-S4",
          location: "No 5, Persiaran 1, Jalan Unitar, Main Campus",
          date: "29 Feb 2019",
          time: "330pm - 530pm"
        }
      ]
    };
  }
};
</script>
