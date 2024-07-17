const baseURL = "https://cipher715.github.io/wdd230/";
const linksURL = "https://cipher715.github.io/wdd230/data/links.json";


async function getLinks() {
    const result = await fetch(linksURL);
    const data = await result.json();
    console.log(data);
}

getLinks();
