
let produits = [ { id: 1, nom: "Ordinateur", categorie: "Électronique", stock: 120 },
    { id: 2, nom: "T-shirt", categorie: "Vêtements", stock: 200 },
    { id: 3, nom: "Sac à main", categorie: "Accessoires", stock: 150 },
    { id: 4, nom: "Table", categorie: "Meubles", stock: 80 },
    { id: 5, nom: "Livre", categorie: "Livres", stock: 90 }];
let utilisateurs = [];
let commandes = [];



function afficherProduits() {
    console.log("Produits affichés :", produits); // Vérifiez le contenu
    const tbody = document.querySelector("#products-table-body");
    tbody.innerHTML = "";
    produits.forEach(produit => {
        const row = `
            <tr>
                <td>${produit.id}</td>
                <td>${produit.nom}</td>
                <td>${produit.categorie}</td>
                <td>${produit.stock}</td>
                <td>
                    <button class="btn btn-edit" onclick="modifierProduit(${produit.id})">Modifier</button>
                    <button class="btn btn-danger" onclick="supprimerProduit(${produit.id})">Supprimer</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    document.getElementById('total-products').textContent = produits.length;
}

//ajouter un produit
function ajouterProduit() {
    const nom = prompt("Nom du produit :");
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

// modifier un produit

function modifierProduit(index) {
    const nouvelleCategorie = prompt("Nouvelle catégorie :", produitsChart.data.labels[index]);
    const nouveauStock = prompt("Nouveau stock :", produitsChart.data.datasets[0].data[index]);
    if (nouvelleCategorie && nouveauStock && !isNaN(nouveauStock)) {
        produitsChart.data.labels[index] = nouvelleCategorie; // Modifier la catégorie
        produitsChart.data.datasets[0].data[index] = parseInt(nouveauStock); // Modifier le stock
        produitsChart.update(); // Mettre à jour le graphique
        remplirTableauProduitsDepuisGraphique(); // Mettre à jour le tableau
    } else {
        alert("Veuillez entrer des informations valides !");
    }
}




// Supprimer un produit
function supprimerProduit(index) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
        produitsChart.data.labels.splice(index, 1); // Supprimer la catégorie
        produitsChart.data.datasets[0].data.splice(index, 1); // Supprimer le stock
        produitsChart.update(); // Mettre à jour le graphique
        remplirTableauProduitsDepuisGraphique(); // Mettre à jour le tableau
    }
}


// Voir les détails du produit
function voirDetailsProduit(id) {
    const produit = produits.find(p => p.id === id);
    if (produit) {
        alert(`ID: ${produit.id}\nNom: ${produit.nom}\nPrix: ${produit.prix}`);
    }
}
//utilisateur
    
// afficher un utilisateur

function afficherUtilisateurs() {
    const tbody = document.querySelector("#users-table-body");
    tbody.innerHTML = "";
    utilisateurs.forEach(utilisateur => {
        const row = `
            <tr>
                <td>${utilisateur.id}</td>
                <td>${utilisateur.region}</td>
                <td>${utilisateur.pourcentage}</td>
                
                <td>
                    <button class="btn btn-edit" onclick="modifierUtilisateur(${utilisateur.id})">Modifier</button>
                    <button class="btn btn-danger" onclick="supprimerUtilisateur(${utilisateur.id})">Supprimer</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    document.getElementById('total-users').textContent = utilisateurs.length;
}
//ajouter un utilisateur
function ajouterUtilisateur() {
    const region = prompt("Région :");
    const pourcentage = prompt("Pourcentage :");
    if (region && pourcentage && !isNaN(pourcentage)) {
        utilisateursChart.data.labels.push(region);
        utilisateursChart.data.datasets[0].data.push(parseFloat(pourcentage));
        utilisateursChart.update();
        remplirTableauUtilisateurs();
    } else {
        alert("Veuillez entrer des informations valides !");
    }
}

// Modifier un utilisateur
function modifierUtilisateur(index) {
    const nouvelleRegion = prompt("Nouvelle région :", utilisateursChart.data.labels[index]);
    const nouveauPourcentage = prompt("Nouveau pourcentage :", utilisateursChart.data.datasets[0].data[index]);
    if (nouvelleRegion && nouveauPourcentage && !isNaN(nouveauPourcentage)) {
        utilisateursChart.data.labels[index] = nouvelleRegion;
        utilisateursChart.data.datasets[0].data[index] = parseFloat(nouveauPourcentage);
        utilisateursChart.update();
        remplirTableauUtilisateurs();
    }
}

// Supprimer un utilisateur
function supprimerUtilisateur(index) {
    utilisateursChart.data.labels.splice(index, 1);
    utilisateursChart.data.datasets[0].data.splice(index, 1);
    utilisateursChart.update();
    remplirTableauUtilisateurs();
}
//commande

//afficher une commande
function afficherCommandes() {
    const tbody = document.querySelector("#orders-table-body");
    tbody.innerHTML = "";
    commandes.forEach(commande => {
        const row = `
            <tr>
                <td>${commande.id}</td>
                <td>${commande.mois}</td>
                <td>${commande.total}</td>
                
                <td>
                    <button class="btn btn-edit" onclick="modifierCommande(${commande.id})">Modifier</button>
                    <button class="btn btn-danger" onclick="supprimerCommande(${commande.id})">Supprimer</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    document.getElementById('total-orders').textContent = commandes.length;
}
//ajouter une commande
function ajouterCommande() {
    const mois = prompt("Mois :");
    const total = prompt("Total :");
    if (mois && total && !isNaN(total)) {
        commandesChart.data.labels.push(mois);
        commandesChart.data.datasets[0].data.push(parseFloat(total));
        commandesChart.update();
        remplirTableauCommandes();
    } else {
        alert("Veuillez entrer des informations valides !");
    }
}

// Modifier une commande
function modifierCommande(index) {
    const nouveauMois = prompt("Nouveau mois :", commandesChart.data.labels[index]);
    const nouveauTotal = prompt("Nouveau total :", commandesChart.data.datasets[0].data[index]);
    if (nouveauMois && nouveauTotal && !isNaN(nouveauTotal)) {
        commandesChart.data.labels[index] = nouveauMois;
        commandesChart.data.datasets[0].data[index] = parseFloat(nouveauTotal);
        commandesChart.update();
        remplirTableauCommandes();
    }
}

// Supprimer une commande
function supprimerCommande(index) {
    commandesChart.data.labels.splice(index, 1);
    commandesChart.data.datasets[0].data.splice(index, 1);
    commandesChart.update();
    remplirTableauCommandes();
}

function chargerDonneesJSON() {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            produits = data.produits || [];
            utilisateurs = data.utilisateurs || [];
            commandes = data.commandes || [];
            afficherProduits();
            afficherUtilisateurs();
            afficherCommandes();
            initCharts();
        })
        .catch(error => console.error('Erreur lors du chargement des données JSON :', error));
}
