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
};

const setOgDescription = (doc, val) => {
  setMetaProp(doc, 'og:description', val);
};

const setOgTypeProduct = (doc, product) => {
  setMetaProp(doc, 'og:type', 'og:product');
  setMetaProp(doc, 'og:image', product.image);
  setMetaProp(doc, 'og:url', product.url);
};
const setOgLocale = (doc, val) => {
  setMetaProp(doc, 'og:locale', val);
};
const setOgSiteName = (doc, val) => {
  setMetaProp(doc, 'og:site_name', val);
};
const setOgUrl = (doc, val) => {
  setMetaProp(doc, 'og:url', val);
};

const setMetaName = (doc, selector, val) => {
  doc.querySelector(`meta[name="${selector}"]`).setAttribute('content', val);
};

const setMetaProp = (doc, selector, val) => {
  doc
    .querySelector(`meta[property="${selector}"]`)
    .setAttribute('content', val);
};

export default {
  setTitle,
  setDescription,
  setOgTypeProduct,
  setOgLocale,
  setOgSiteName,
  setOgUrl,
};
