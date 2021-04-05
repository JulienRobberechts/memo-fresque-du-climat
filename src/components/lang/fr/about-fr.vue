<template>
  <div class="about">
    <a
      href="https://github.com/JulienRobberechts/memo-fresque-du-climat"
      target="_blank"
    >
      <img
        class="memo-logo"
        src="@/assets/lang/fr/memo-fr.png"
        alt="Memo du climat sur GitHub"
    /></a>
    <p>
      <a href="https://fresqueduclimat.org/" target="_blank"
        >La Fresque du Climat</a
      >
      est un atelier de sensibilisation où les participants co-construisent une
      fresque résumant les mécanismes du changement climatique tels qu'expliqués
      dans les rapports du GIEC.
    </p>
    <p>
      Le memo de la Fresque du Climat a pour but de proposer aux animateurs un
      accès rapide aux cartes particulièrement sur mobile afin de réviser les
      liens ou approfondir leurs connaissances.
    </p>
    <p>
      Les descriptions et explications des cartes et liens sont toutes issues du
      <a href="https://fresqueduclimat.org/wiki" target="_blank"
        >Wiki du Climat</a
      >
      et sont synchronisées régulièrement.
    </p>
    <div class="list-title">Autres sources de formation :</div>
    <div class="list">
      <ul>
        <li>
          <a href="https://prezi.com/view/tJJYWcXs12lz9cXCngmH/" target="_blank"
            >La correction de la fresque du Climat sur Prezi</a
          >
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/11xAvR7Qg_sCK1wA97ybYtSfNBRTfvXmo/view"
            target="_blank"
            >Le guide d'autoformation des animateurs de juin 2020</a
          >
        </li>
      </ul>
    </div>

    <p>
      Vous avez remarqué un bug ou vous avez une amélioration à proposer,
      contactez-nous sur le canal dédié sur
      <a href="https://t.me/memofdc" target="_blank">Telegram</a>.
    </p>

    <div class="footer">
      <p class="version">Version : {{ version }}</p>
      <p class="sources">
        Les sources du projet sont sur
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
  props: ['version', 'lang'],
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
