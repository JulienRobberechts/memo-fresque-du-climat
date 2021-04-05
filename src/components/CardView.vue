<template>
  <div class="card-details-panel">
    <div class="header-panel">
      <img
        class="yt-logo"
        src="@/assets/play-youtube.png"
        :title="$t('card.video-link-title')"
        @click="showVideo = !showVideo"
      />
      <a
        :href="`${$t('config.wiki-root-url')}${card.wikiUrl}`"
        target="_blank"
        class="wiki-link"
      >
        <img
          class="wiki-logo"
          src="@/assets/wiki.png"
          :title="$t('card.wiki-link-title')"
        />
      </a>
    </div>
    <img
      class="card-image"
      v-if="!showVideo"
      :src="card.img.url"
      :title="card.title"
      @click="showVideo = !showVideo"
    />
    <div class="card-video-wrapper" v-if="showVideo">
      <iframe
        class="card-video"
        :src="`https://www.youtube-nocookie.com/embed/${card.videoYoutubeCode}?vq=small`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        importance="low"
        name="card-video"
        referrerpolicy="no-referrer"
      ></iframe>
    </div>
    <CardBack
      :description="card.backDescription"
      :cardNumber="card.cardNum"
      :setNumber="card.cardSet"
    />
    <div class="explanation" v-if="card.explanation">
      <span class="explanation-logo">
        <img src="@/assets/hand.png" />
      </span>
      {{ card.explanation }}
    </div>
    <ul class="notes" v-if="card.notes">
      <li class="note" v-for="(note, i) in card.notes" :key="i">
        <img class="bullet" src="@/assets/fresque-hand.png" alt="note" />
        {{ note }}
      </li>
    </ul>
    <ListTitle
      :nameSingular="$t('card.valid-cause')"
      :namePlural="$t('card.valid-causes')"
      badgeStatus="valid"
      :items="validCauses"
    />
    <CauseList :causes="validCauses" />

    <ListTitle
      :nameSingular="$t('card.valid-consequence')"
      :namePlural="$t('card.valid-consequences')"
      badgeStatus="valid"
      :items="validConsequences"
    />
    <ConsequenceList :consequences="validConsequences" />

    <ListTitle
      :nameSingular="$t('card.optional-cause')"
      :namePlural="$t('card.optional-causes')"
      badgeStatus="optional"
      :items="optionalCauses"
    />
    <CauseList v-if="optionalCauses.length > 0" :causes="optionalCauses" />

    <ListTitle
      :nameSingular="$t('card.optional-consequence')"
      :namePlural="$t('card.optional-consequences')"
      badgeStatus="optional"
      :items="optionalConsequences"
    />
    <ConsequenceList
      v-if="optionalConsequences.length > 0"
      :consequences="optionalConsequences"
    />

    <ListTitle
      :nameSingular="$t('card.invalid-cause')"
      :namePlural="$t('card.invalid-causes')"
      badgeStatus="invalid"
      :items="invalidCauses"
    />
    <CauseList v-if="invalidCauses.length > 0" :causes="invalidCauses" />

    <ListTitle
      :nameSingular="$t('card.invalid-consequence')"
      :namePlural="$t('card.invalid-consequences')"
      badgeStatus="invalid"
      :items="invalidConsequences"
    />
    <ConsequenceList
      v-if="invalidConsequences.length > 0"
      :consequences="invalidConsequences"
    />
  </div>
</template>

<script>
import ListTitle from '@/components/ListTitle.vue';
import CauseList from '@/components/CauseList.vue';
import ConsequenceList from '@/components/ConsequenceList.vue';
import CardBack from '@/components/CardBack.vue';

export default {
  name: 'CardView',
  props: {
    card: Object,
  },
  components: {
    ListTitle,
    CardBack,
    CauseList,
    ConsequenceList,
  },
  data() {
    return {
      showVideo: false,
    };
  },
  computed: {
    validCauses: function () {
      return this.card.causes.filter((cause) => cause.link.status === 'valid');
    },
    validConsequences: function () {
      return this.card.consequences.filter(
        (consequence) => consequence.link.status === 'valid'
      );
    },
    optionalCauses: function () {
      return this.card.causes
        .filter((cause) => cause.link.status === 'optional')
        .sort((a, b) => a.from.cardNum - b.from.cardNum);
    },
    optionalConsequences: function () {
      return this.card.consequences
        .filter((consequence) => consequence.link.status === 'optional')
        .sort((a, b) => a.to.cardNum - b.to.cardNum);
    },
    invalidCauses: function () {
      return this.card.causes
        .filter((cause) => cause.link.status === 'invalid')
        .sort((a, b) => a.from.cardNum - b.from.cardNum);
    },
    invalidConsequences: function () {
      return this.card.consequences
        .filter((consequence) => consequence.link.status === 'invalid')
        .sort((a, b) => a.to.cardNum - b.to.cardNum);
    },
  },
  watch: {
    card: function () {
      this.showVideo = false;
    },
  },
};
</script>

<style scoped>
.card-video-wrapper {
  position: relative;
  padding-bottom: 68%;
}
.card-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.card-details-panel {
  width: 95vw;
  max-width: 600px;
  padding: 0;
  margin: 3px;
}
.header-panel {
  margin-bottom: 0.3rem;
  padding: 0.3rem 0.5rem;
  display: flex;
  justify-content: flex-end;
}
.wiki-link {
  display: flex;
}
.wiki-link:hover {
  transform: scale(1.1);
}
.wiki-link,
.wiki-link:active,
.wiki-link:focus {
  outline: none;
}
.wiki-logo {
  width: 1.8rem;
  height: 1.8rem;
  margin: 0 0.3rem;
}
.yt-logo {
  width: 2rem;
  height: 2rem;
  margin: 0 0.3rem;
}
.yt-logo:hover {
  transform: scale(1.1);
}
.card-image {
  width: 100%;

  box-shadow: 1px 1px 4px #706f71;
}
.explanation-logo img {
  position: relative;
  top: 0.5rem;
  width: 2rem;
}
.explanation {
  margin: 1rem 1rem;
  max-width: 600px;
  font-size: 1.2rem;
  text-align: justify;
}
.notes {
  margin: 0 auto;
  padding: 1rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.bullet {
  width: 1.2rem;
  margin-right: 0.3rem;
  float: left;
}
.note {
  display: inline-block;
  list-style-type: none;
  margin: 0.5rem;
  padding: 0;
  text-align: justify;
  font-size: 1.2rem;
}
</style>
