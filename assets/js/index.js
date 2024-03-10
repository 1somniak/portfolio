function loader() {
    document.addEventListener('DOMContentLoaded', function() {
        // Récupérer l'élément HTML où vous voulez afficher les données JSON
        const rootElement = document.getElementById('root');
    
        // Charger le fichier JSON à l'aide de Fetch
        fetch('me.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur de chargement du fichier JSON: ${response.status}`);
                }
                return response.json();
            })
            .then(jsonData => {
                // Accéder aux données dans la clé "aboutme"

                aboutMeDiv = document.createElement('div');
                aboutMeDiv.classList.add('aboutme');

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

                rootElement.appendChild(aboutMeDiv);


                contactList = document.createElement('ul');
                contactList.classList.add('contact-list');

                for (var i = 0; i < jsonData.contact.length; i++) {
                    li = document.createElement('li');
                    li.setAttribute('onclick', `window.open('${jsonData.contact[i].link}', '_blank')`);
                    li.setAttribute('description', jsonData.contact[i].description);
                    //li.title = jsonData.contact[i].description;
                    link = document.createElement('div');
                    link.classList.add('contact-element-logo');
                    
                    li.classList.add('contact-element');
                    link.style.backgroundImage = `url('${jsonData.contact[i].logo}')`;
                    link.style.backgroundSize = 'cover';
                    li.appendChild(link);
                    contactList.appendChild(li);
                }


                aboutMeDiv.appendChild(contactList);
                mdr = document.createElement('div')
                mdr.classList.add('mdr');
                aboutMeDiv.appendChild(mdr);
        
            })
            .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
    });
       
}

loader();


document.addEventListener('DOMContentLoaded', function() {
    
});
