const baseURL = "https://cipher715.github.io/wdd230/";
const linksURL = "https://cipher715.github.io/wdd230/data/links.json";
const learnings = document.querySelector('#learnings');

async function getLinks() {
    const result = await fetch(linksURL);
    const data = await result.json();
    displayLinks(data.weeks);
}

function displayLinks(data){
    data.forEach(weeks=> {
        let li = document.createElement('li');
        li.textContent = `${weeks.week}: `
        let index = 0;
        weeks.links.forEach(link => {
            index ++;
            let a = document.createElement('a');
            let p = document.createElement('span');
    
            a.setAttribute('href', link.url);
            a.setAttribute('alt', link.title);
            a.textContent = link.title;
            p.textContent = " | "
            li.appendChild(a);
            if (index != weeks.links.length){
                li.appendChild(p);
            }
            //li.appendChild(p);

        });
        learnings.appendChild(li);
    })
}

getLinks();
