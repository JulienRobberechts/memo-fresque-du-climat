<template>
  <picture>
    <source
      :srcset="imgPathWebp"
      sizes="(max-width:400px) 95vw, 450px"
      type="image/webp" />
    <img
      class="card-image"
      v-if="!showVideo"
      :src="imgPathDefault"
      :alt="card.title"
      :title="card.title"
      @click="showVideo = !showVideo"
  /></picture>
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
  <div class="menu-panel">
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
        src="@/assets/wiki-40.png"
        :title="$t('card.wiki-link-title')"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'CardFront',
  props: {
    card: Object,
  },
  data() {
    return {
      showVideo: false,
    };
  },
  computed: {
    imgPathDefault() {
      return `${process.env.BASE_URL}img/cards/${this.$i18n.locale}/default/${this.card.cardNum}.png`;
    },
    imgPathWebp() {
      return (
        `${process.env.BASE_URL}img/cards/${this.$i18n.locale}/80/${this.card.cardNum}.webp 80w,` +
        `${process.env.BASE_URL}img/cards/${this.$i18n.locale}/200/${this.card.cardNum}.webp 200w,` +
        `${process.env.BASE_URL}img/cards/${this.$i18n.locale}/400/${this.card.cardNum}.webp 400w`
      );
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
.card-image {
  width: 100%;
  box-shadow: 1px 1px 4px #706f71;
}
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
.menu-panel {
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
</style>
