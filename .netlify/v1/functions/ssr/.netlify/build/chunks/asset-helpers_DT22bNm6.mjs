const loadVideo = async (videoPath) => {
  const assets = /* #__PURE__ */ Object.assign({});
  const video = assets[videoPath];
  if (video) {
    const module = await video();
    return module.default;
  }
  return null;
};

export { loadVideo as l };
