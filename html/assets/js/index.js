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
                    link = document.createElement('a');
                    link.href = jsonData.contact[i].link;
                        li.classList.add('contact-element');
                        li.style = 'display: inline-block; vertical-align: middle; padding: 0.5em;';
                        link.style.backgroundImage = `url('${jsonData.contact[i].logo}')`;
                        link.style.backgroundSize = 'cover';
                        link.style.width = '1.5em';
                        link.style.height = '1.5em';
                        link.style.display = 'block';
                    li.appendChild(link);
                    contactList.appendChild(li);
                }
                aboutMeDiv.appendChild(contactList);
        
            })
            .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
    });
       
}

loader();