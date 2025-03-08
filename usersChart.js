const usersCtx = document.getElementById('usersChart').getContext('2d');
const regions = ["Europe", "Asie", "Amérique", "Afrique", "Océanie"];
const percentages = [40, 25, 20, 10, 5];
const userColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

const utilisateursChart = new Chart(usersCtx, {
    type: "pie",
    data: {
        labels: regions,
        datasets: [{
            backgroundColor: userColors,
            data: percentages
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Répartition des utilisateurs par région"
            }
        }
    }
});

// Remplir le tableau utilisateurs
function remplirTableauUtilisateurs() {
    const tbody = document.getElementById("users-table-body");
    tbody.innerHTML = "";
    utilisateursChart.data.labels.forEach((region, index) => {
        const percentage = utilisateursChart.data.datasets[0].data[index];
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${region}</td>
                <td>${percentage}%</td>
                <td>
                    <button onclick="modifierUtilisateur(${index})">Modifier</button>
                    <button onclick="supprimerUtilisateur(${index})">Supprimer</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

remplirTableauUtilisateurs();
