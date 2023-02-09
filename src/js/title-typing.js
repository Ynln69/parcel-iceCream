const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const clearAndCache = (elements) => {
  let cachedText = [];
  for (let element of elements) {
    cachedText.push(element.textContent);
    element.textContent = "";
  }
  return cachedText;
};

const animateTypeSync = async (typeables, ms) => {
  const cachedText = clearAndCache(typeables);

  for (let i = 0; i < typeables.length; i++) {
    for (let character of cachedText[i]) {
      typeables[i].textContent += character;
      await sleep(ms);
    }
  }
};

const animateTypeAsync = (typeables, ms) => {
  const cachedText = clearAndCache(typeables);

  Array.from(typeables).forEach(async (element, i) => {
    for (let character of cachedText[i]) {
      element.textContent += character;
      await sleep(ms);
    }
  });
};

const elementsSync = document.getElementsByClassName("hero-title-1");
animateTypeSync(elementsSync, 100);