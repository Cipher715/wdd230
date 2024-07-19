
const article = document.querySelector('article');

function displayMembers() {
    for (i = 0; i < 7; i++) {
        let section = document.createElement('section');
        let img = document.createElement('img');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let a = document.createElement('a');

        img.setAttribute('src', "//via.placeholder.com/100x200/");
        img.setAttribute('alt', `Picture of`);
        name.setAttribute('class', "name");
        address.setAttribute('class', "address");
        phone.setAttribute('class', "phone");
        name.textContent = "Member Name";
        address.textContent = "1-2-2 Kanda Tokyo";
        phone.textContent = "07085999618";
        a.setAttribute('href', "Somewhere.com");
        a.setAttribute('alt', ` site url`);
        a.textContent = "Somewhere.com";

        section.appendChild(img);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(a);
        article.appendChild(section);

    }
}

displayMembers();