const ordersCtx = document.getElementById('ordersChart').getContext('2d');
const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];
const totals = [15, 10, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];

const commandesChart = new Chart(ordersCtx, {
    type: "line",
    data: {
        labels: months,
        datasets: [{
            backgroundColor: "rgba(0, 0, 255, 0.1)",
            borderColor: "rgba(0, 0, 255, 1.0)",
            data: totals,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Évolution Mensuelle des Commandes"
            },
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Total des commandes"
                }
            },
            x: {
                title: {
                    display: true,
                    text: "Mois"
                }
            }
        }
    }
});

function remplirTableauCommandes() {
    const tbody = document.getElementById("orders-table-body");
    tbody.innerHTML = "";
    commandesChart.data.labels.forEach((mois, index) => {
        const total = commandesChart.data.datasets[0].data[index];
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${mois}</td>
                <td>${total}</td>
                <td>
                    <button onclick="modifierCommande(${index})">Modifier</button>
                    <button onclick="supprimerCommande(${index})">Supprimer</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

remplirTableauCommandes();
