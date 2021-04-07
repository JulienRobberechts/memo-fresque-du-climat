const setTitle = (document, title) => {
  document.title = title;
};
const setDescription = (document, description) => {
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', description);
};
export default { setTitle, setDescription };
