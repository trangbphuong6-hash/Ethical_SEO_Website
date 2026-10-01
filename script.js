lucide.createIcons();

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const darkIcon = document.getElementById('theme-dark-icon');
    const lightIcon = document.getElementById('theme-light-icon');
    if(darkIcon && lightIcon) {
        darkIcon.classList.toggle('hidden');
        lightIcon.classList.toggle('hidden');
    }
}

let xrayActive = false;
function toggleHiddenTextXray() {
    xrayActive = !xrayActive;
    const el = document.getElementById('hidden-text-element');
    const label = document.getElementById('btn-toggle-xray');
    if(el && label) {
        if(xrayActive) {
            el.className = "hidden-text-revealed my-2 font-mono";
            label.innerText = "Tắt Chế Độ X-Ray";
        } else {
            el.className = "hidden-text-simulation my-2";
            label.innerText = "Bật Chế Độ X-Ray Vạch Mặt Bot";
        }
    }
}

// Khởi tạo Chart.js nếu tồn tại canvas ở trang index
const chartCanvas = document.getElementById('dashboardTrafficChart');
if(chartCanvas) {
    const ctx = chartCanvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
            datasets: [
                {
                    label: 'White-Hat (Bền Vững)',
                    data: [1000, 1800, 3200, 5000, 7800, 12000],
                    borderColor: '#22c55e',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    fill: true,
                    tension: 0.3
                },
                {
                    label: 'Black-Hat (Bị Phạt / De-index)',
                    data: [1200, 6000, 15000, 1200, 100, 0],
                    borderColor: '#f43f5e',
                    backgroundColor: 'rgba(244, 63, 94, 0.1)',
                    fill: true,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } }
        }
    });
}