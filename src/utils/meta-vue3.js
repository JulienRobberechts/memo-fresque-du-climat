const setTitle = (doc, val) => {
  doc.title = val;
  setOgTitle(doc, val);
};
const setOgTitle = (doc, val) => {
  setMetaProp(doc, 'og:title', val);
};

const setDescription = (doc, val) => {
  setMetaName(doc, 'description', val);
  setOgDescription(doc, val);
  setTwDescription(doc, val);
};

const setOgDescription = (doc, val) => {
  setMetaProp(doc, 'og:description', val);
};
const setTwDescription = (doc, val) => {
  setMetaName(doc, 'twitter:description', val);
};

const setOgTypeProduct = (doc, product) => {
  setMetaProp(doc, 'og:type', 'og:product');
  setMetaProp(doc, 'og:image', product.image);
  setMetaProp(doc, 'og:url', product.url);
};
const setOgLocale = (doc, val) => {
  setMetaProp(doc, 'og:locale', val);

  const el = doc.querySelector('html');
  if (el) el.setAttribute('lang', val);
  else console.log('html element not found.');
};
const setOgSiteName = (doc, val) => {
  setMetaProp(doc, 'og:site_name', val);
};
const setOgUrl = (doc, val) => {
  setMetaProp(doc, 'og:url', val);
};

const setMetaName = (doc, selector, val) => {
  const el = doc.querySelector(`meta[name="${selector}"]`);
  if (el) el.setAttribute('content', val);
  else console.log(`element with name '${selector}' not found.`);
};

const setMetaProp = (doc, selector, val) => {
  const el = doc.querySelector(`meta[property="${selector}"]`);
  if (el) el.setAttribute('content', val);
  else console.log(`element with property '${selector}' not found.`);
};

export default {
  setTitle,
  setDescription,
  setOgTypeProduct,
  setOgLocale,
  setOgSiteName,
  setOgUrl,
};
