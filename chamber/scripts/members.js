const membersURL = "https://cipher715.github.io/wdd230/chamber/data/members.json";
const article = document.querySelector('article');

async function getLinks() {
    const resourse  = await fetch(membersURL);
    const data = await resourse.json();
    displayMembers(data.members);
}

function displayMembers(data) {
    data.forEach(member =>  {
        let section = document.createElement('section');
        let img = document.createElement('img');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let a = document.createElement('a');

        img.setAttribute('src', member.image);
        img.setAttribute('alt', `Picture of ${member.name}`);
        name.setAttribute('id', name);
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        a.setAttribute('href', member.url);
        a.setAttribute('alt', `${member.name} site url`);
        a.textContent = member.url;

        section.appendChild(img);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(a);
        article.appendChild(section);
    })
}

getLinks();