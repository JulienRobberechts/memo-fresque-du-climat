<template>
  <div class="about">
    <a
      href="https://github.com/JulienRobberechts/memo-fresque-du-climat"
      target="_blank"
    >
      <img
        class="memo-logo"
        src="/img/memo-en.png"
        alt="Climate Collage Memo on GitHub"
    /></a>

    <p>
      The Climate Collage Memo aims to provide to facilitators a quick and easy
      access to the Climate Collage cards (especially on mobile).
    </p>

    <p>
      Cards and links descriptions and explanations are all coming from
      <a href="https://fresqueduclimat.org/wiki/en" target="_blank"
        >The Cl!mate Wiki</a
      >
      and are synchronized on a regular basis.
    </p>

    <a href="https://fresqueduclimat.org/wiki/en" target="_blank"
      >The Cl!mate Wiki</a
    >

    <div class="list-title">Other learning resources:</div>
    <div class="list">
      <ul>
        <li>
          <a href="https://prezi.com/view/RtRQEMYpcjY4iwQqeDWH/" target="_blank"
            >Climate Collage correction on Prezi</a
          >
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1pQc2dCCyOLihxPjsjicWBmQPW6IA13uF/view"
            target="_blank"
            >The self-training guide for facilitator</a
          >
          (June 2020)
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/17dv0mGFpn5Fdk7BmIXEjuDt2-GVLzVHj/view"
            target="_blank"
            >Climate Collage cards training</a
          >
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1djesSK6P4Uy-dl5Z-TTzWlwp1egXPoCY1ClA5aDIPr4"
            target="_blank"
            >Online facilitation Tutorial</a
          >
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/16MM1CqG1gNqZ7ahZox1XaYDhJzBIPm5I/view"
            target="_blank"
            >Climate Collage Presentation</a
          >
        </li>
      </ul>
    </div>

    <p>
      If you noticed some bugs or have improvements to suggest contact us in
      <a href="https://t.me/memofdc" target="_blank">Telegram</a>.
    </p>

    <div class="footer">
      <p class="version">Version: {{ version }}</p>
      <p class="sources">
        Project sources are available on
        <a
          href="https://github.com/JulienRobberechts/memo-fresque-du-climat"
          target="_blank"
          >GitHub</a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['version'],
};
</script>
<style scoped>
.about {
  width: 90vw;
  max-width: 400px;
  margin: 0 auto;
}
.fdc-logo {
  width: 90vw;
  max-width: 400px;
}
p {
  /* margin: 1rem auto; */
  text-align: justify;
}
.list {
  text-align: left;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
}
.list-title {
  text-align: left;
  margin-top: 1rem;
}
.footer {
  margin: 0.5rem 0;
  font-size: small;
}
.version {
  margin: 0;
  font-size: small;
}
.sources {
  margin: 0;
  font-size: small;
}
</style>
