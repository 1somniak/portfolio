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


        
            })
            .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
    });
       
}

loader();