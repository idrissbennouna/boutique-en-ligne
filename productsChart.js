const productsCtx = document.getElementById('productsChart').getContext('2d');

// Initialisation du graphique des produits
const produitsChart = new Chart(productsCtx, {
    type: "bar",
    data: {
        labels: [], // Catégories dynamiques (initialisé à vide)
        datasets: [{
            backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#C70039"], // Couleurs dynamiques
            data: [] // Quantités dynamiques (initialisé à vide)
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }, // Cacher la légende
            title: {
                display: true,
                text: "Stock par catégorie" // Titre du graphique
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Quantité en stock" // Titre de l'axe Y
                }
            },
            x: {
                title: {
                    display: true,
                    text: "Catégories" // Titre de l'axe X
                }
            }
        }
    }
});

// Fonction pour remplir le tableau HTML depuis les données du graphique
function remplirTableauProduitsDepuisGraphique() {
    const tbody = document.querySelector("#products-table-body");
    tbody.innerHTML = ""; // Vider le tableau actuel

    produitsChart.data.labels.forEach((categorie, index) => {
        const stock = produitsChart.data.datasets[0].data[index];
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>Produit ${index + 1}</td> <!-- Nom fictif pour correspondre aux catégories -->
                <td>${categorie}</td>
                <td>${stock}</td>
                <td>
                    <button class="btn btn-edit" onclick="modifierProduit(${index})">Modifier</button>
                    <button class="btn btn-danger" onclick="supprimerProduit(${index})">Supprimer</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Appeler cette fonction une fois pour initialiser le tableau
remplirTableauProduitsDepuisGraphique();

// Fonction pour ajouter un produit au graphique et au tableau
function ajouterProduit() {
    const categorie = prompt("Catégorie du produit :");
    const stock = prompt("Quantité en stock :");
    if (categorie && stock && !isNaN(stock)) {
        produitsChart.data.labels.push(categorie); // Ajouter la catégorie au graphique
        produitsChart.data.datasets[0].data.push(parseInt(stock)); // Ajouter le stock au graphique
        produitsChart.update(); // Mettre à jour le graphique
        remplirTableauProduitsDepuisGraphique(); // Mettre à jour le tableau
    } else {
        alert("Veuillez entrer des informations valides !");
    }
}

// Fonction pour modifier un produit dans le graphique et le tableau
function modifierProduit(index) {
    const nouvelleCategorie = prompt("Nouvelle catégorie :", produitsChart.data.labels[index]);
    const nouveauStock = prompt("Nouveau stock :", produitsChart.data.datasets[0].data[index]);
    if (nouvelleCategorie && nouveauStock && !isNaN(nouveauStock)) {
        produitsChart.data.labels[index] = nouvelleCategorie; // Mettre à jour la catégorie
        produitsChart.data.datasets[0].data[index] = parseInt(nouveauStock); // Mettre à jour le stock
        produitsChart.update(); // Mettre à jour le graphique
        remplirTableauProduitsDepuisGraphique(); // Mettre à jour le tableau
    } else {
        alert("Veuillez entrer des informations valides !");
    }
}

// Fonction pour supprimer un produit du graphique et du tableau
function supprimerProduit(index) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
        produitsChart.data.labels.splice(index, 1); // Supprimer la catégorie
        produitsChart.data.datasets[0].data.splice(index, 1); // Supprimer le stock
        produitsChart.update(); // Mettre à jour le graphique
        remplirTableauProduitsDepuisGraphique(); // Mettre à jour le tableau
    }
}
