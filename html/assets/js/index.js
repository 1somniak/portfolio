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

                pp = document.createElement('img');
                pp.src = jsonData.aboutme.photo;
                pp.classList.add('profile-picture');
                aboutMeDiv.appendChild(pp);

                nameP = document.createElement('h2');
                nameP.textContent = jsonData.aboutme.name;
                aboutMeDiv.appendChild(nameP);

                jobP = document.createElement('h3');
                jobP.textContent = `${jsonData.aboutme.job} at ${jsonData.aboutme.company}`;
                aboutMeDiv.appendChild(jobP);

                rootElement.appendChild(aboutMeDiv);


                contactList = document.createElement('ul');
                contactList.classList.add('contact-list');

                for (var i = 0; i < jsonData.contact.length; i++) {
                    li = document.createElement('li');
                    li.classList.add('contact-element');
                    logo = document.createElement('img');
                    logo.src = jsonData.contact[i].logo;
                    logo.style = 'width: 1em; display: inline; margin-right: .3em; vertical-align: middle;';
                    li.appendChild(logo);
                    net_txt = document.createElement('p');
                    net_txt.textContent = jsonData.contact[i].name;
                    net_txt.style = 'display:inline;';
                    li.appendChild(net_txt);
                    contactList.appendChild(li);
                }
                aboutMeDiv.appendChild(contactList);
        
            })
            .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
    });
       
}

loader();