const StatisticsModule = {
    init() {
        this.render();
    },

    render() {
        const stats = Storage.getStatistics();
        const players = Storage.getPlayers();
        const tbody = document.getElementById('statsTable');

        if (stats.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center;">Sin estadísticas registradas</td></tr>';
            return;
        }

        const playerMap = {};
        players.forEach(p => playerMap[p.id] = p.name);

        tbody.innerHTML = stats.map(s => `
            <tr>
                <td><strong>${playerMap[s.playerId] || 'Desconocido'}</strong></td>
                <td>1</td>
                <td><span style="color: var(--success); font-weight: 600;">${s.goals || 0}</span></td>
                <td><span style="color: var(--primary-light); font-weight: 600;">${s.assists || 0}</span></td>
                <td><span style="color: var(--warning); font-weight: 600;">${s.yellow || 0}</span></td>
                <td><span style="color: var(--danger); font-weight: 600;">${s.red || 0}</span></td>
            </tr>
        `).join('');
    },

    add(data) {
        Storage.addStatistic(data);
        this.render();
        showNotification('✅ Estadísticas registradas', 'success');
    }
};
