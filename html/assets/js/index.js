function loadcolors(jsonData) {
    document.documentElement.style.setProperty('--primary-color', jsonData.colors.primarycolor);
    document.documentElement.style.setProperty('--secondary-color', jsonData.colors.secondarycolor);
    document.documentElement.style.setProperty('--third-color', jsonData.colors.thirdcolor);
}

function aboutMeCard(jsonData) {
    aboutMeDiv = document.createElement('div');
    aboutMeDiv.classList.add('aboutme');
    aboutMeDiv.classList.add('small-card');
    aboutMeDiv.style.backgroundImage = `url('${jsonData.aboutme.banner}')`;    

    pp = document.createElement('div');
    pp.classList.add('profile-picture-div');
    pp.style.backgroundImage = `url('${jsonData.aboutme.photo}')`;
    pp.style.backgroundSize = `cover`;
    aboutMeDiv.appendChild(pp);

    nameP = document.createElement('h2');
    nameP.classList.add('profile-name');
    nameP.textContent = jsonData.aboutme.name;
    aboutMeDiv.appendChild(nameP);

    jobP = document.createElement('h3');
    jobP.classList.add('profile-job');
    jobP.textContent = `${jsonData.aboutme.job} at ${jsonData.aboutme.company}`;
    aboutMeDiv.appendChild(jobP);

    placeP = document.createElement('p');
    placeP.classList.add('profile-place');
    placeP.textContent = jsonData.aboutme.place;
    aboutMeDiv.appendChild(placeP); 



    contactList = document.createElement('ul');
    contactList.classList.add('contact-list');

    for (var i = 0; i < jsonData.aboutme.contact.length; i++) {
        li = document.createElement('li');
        li.setAttribute('onclick', `window.open('${jsonData.aboutme.contact[i].link}', '_blank')`);
        li.setAttribute('description', jsonData.aboutme.contact[i].description);
        link = document.createElement('div');
        link.classList.add('contact-element-logo');
        
        li.classList.add('contact-element');
        link.style.backgroundImage = `url('${jsonData.aboutme.contact[i].logo}')`;
        link.style.backgroundSize = 'cover';
        li.appendChild(link);
        contactList.appendChild(li);
    }

    aboutMeDiv.appendChild(contactList);
    return aboutMeDiv;
}

function loadformation(jsonData) {
    formationDiv = document.createElement('div');
    formationDiv.classList.add('small-card');
    formationDiv.classList.add('formation');

    titleformation = document.createElement('h2');
    titleformation.classList.add('formation-title');
    titleformation.textContent = jsonData.formation.name;
    formationDiv.appendChild(titleformation);

    for (var i = 0; i < jsonData.formation.formation.length; i++) {
        let school = document.createElement('div');
        school.classList.add('school');

        let schoologo = document.createElement('div');
        schoologo.classList.add('schoologo');
        schoologo.style.backgroundImage = `url('${jsonData.formation.formation[i].logo}')`;
        school.appendChild(schoologo);

        let schoolblabla = document.createElement('div');
        schoolblabla.classList.add('schoolblabla');
        school.appendChild(schoolblabla);
        
        let schoolname = document.createElement('h4');
        schoolname.classList.add('schoolname');
        schoolname.textContent = jsonData.formation.formation[i].name;
        schoolblabla.appendChild(schoolname);
        let schooldate = document.createElement('p');
        schooldate.classList.add('schooldate');
        schooldate.textContent = `${jsonData.formation.formation[i].begin} - ${jsonData.formation.formation[i].end}`;
        schoolblabla.appendChild(schooldate);
        formationDiv.appendChild(school);
    }
    return formationDiv;
}


function loader() {
    document.addEventListener('DOMContentLoaded', function() {
        // Récupérer l'élément HTML où vous voulez afficher les données JSON
        const rootElement = document.getElementById('root');
    
        // Charger le fichier JSON à l'aide de Fetch
        fetch('me.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur de chargement du fichier JSON: ${response.status}`);
                } else {
                    return response.json();
                }
            })
            .then(jsonData => {
                loadcolors(jsonData);
                rootElement.appendChild(aboutMeCard(jsonData));
                rootElement.appendChild(loadformation(jsonData));
            })
            .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
    });
}


loader();

//document.addEventListener('DOMContentLoaded', function() {
//    
//});
