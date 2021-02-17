<template>
  <div class="about">
    <a
      href="https://github.com/JulienRobberechts/memo-fresque-du-climat"
      target="_blank"
    >
      <img
        class="memo-logo"
        src="https://memo-fresque-du-climat.onrender.com/img/memo-1.png"
        alt="Memo du climat sur GitHub"
    /></a>

    <p>
      Le memo de la fresque du climat a pour but de proposer aux animateurs un
      accès rapide aux cartes de la fresque (et particulièrement sur mobile).
    </p>

    <p>
      Les descriptions et explications des cartes et liens sont toutes issues à
      l'origine de l'une de ces 3 sources. Des corrections ont été faites
      ensuite (qui seront à terme reprotées dans le Wiki).
    </p>
    <div class="list">
      <ul>
        <li>
          <a href="https://fresqueduclimat.org/wiki" target="_blank"
            >Le Wiki de la fresque du Climat</a
          >
        </li>
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
      contactez-nous sur
      <a href="https://t.me/memofdc" target="_blank">Télégram</a>.
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
import packageFile from '../../package.json';

export default {
  data() {
    return {
      version: packageFile.version
    };
  }
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
.memo-logo {
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
