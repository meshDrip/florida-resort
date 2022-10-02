export default function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export function currentYear() {
  const copyright = document.querySelector("#copyright");
  copyright.innerText = new Date().getFullYear();
}
