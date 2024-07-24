const membersURL = "https://cipher715.github.io/wdd230/chamber/data/members.json";
const ads = document.querySelector('#ads');

async function getLinks() {
    const resourse  = await fetch(membersURL);
    const data = await resourse.json();
    displayMembers(data.members);
}

function displayMembers(data) {
    let count = 0;
    data.forEach(member =>  {
        if (member.level == 'Gold' || member.level == 'Silver'){
            if (count < 3){
                let section = document.createElement('section');
                let img = document.createElement('img');
                let address = document.createElement('p');
                let phone = document.createElement('p');
                let a = document.createElement('a');

                img.setAttribute('src', member.image);
                img.setAttribute('alt', `Picture of ${member.name}`);
                address.setAttribute('class', "address");
                phone.setAttribute('class', "phone");
                address.textContent = member.address;
                phone.textContent = member.phone;
                a.setAttribute('href', member.url);
                a.setAttribute('alt', `${member.name} site url`);
                a.textContent = "Visit website";

                section.appendChild(img);
                section.appendChild(address);
                section.appendChild(phone);
                section.appendChild(a);
                ads.appendChild(section);
                count ++;
            }
        }
    })
}

getLinks();