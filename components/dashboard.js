// components/dashboard.js - Módulo Dashboard

const DashboardModule = {
    init() {
        this.renderDashboard();
        this.attachEventListeners();
    },

    renderDashboard() {
        const players = Storage.getPlayers();
        const teams = Storage.getTeams();
        const events = Storage.getEvents();
        const statistics = Storage.getStatistics();
        const notifications = Storage.getNotifications();

        document.getElementById('totalPlayers').textContent = players.length;
        document.getElementById('totalTeams').textContent = teams.length;
        document.getElementById('totalEvents').textContent = events.length;
        document.getElementById('totalNotifications').textContent = notifications.length;

        this.renderRecentActivities();
    },

    renderRecentActivities() {
        const tbody = document.getElementById('activitiesTable');
        const activities = [];

        // Obtener últimas actividades
        const players = Storage.getPlayers().slice(-3);
        const events = Storage.getEvents().slice(-2);

        players.forEach(p => {
            activities.push({
                type: '👤 Jugador',
                description: `${p.name} registrado`,
                date: 'Hoy',
                status: 'Completado'
            });
        });

        events.forEach(e => {
            activities.push({
                type: '📅 Evento',
                description: `${e.type} en ${e.location}`,
                date: e.date,
                status: 'Programado'
            });
        });

        if (activities.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: var(--text-secondary);">Sin actividades registradas</td></tr>';
            return;
        }

        tbody.innerHTML = activities.map(a => `
            <tr>
                <td>${a.type}</td>
                <td>${a.description}</td>
                <td>${a.date}</td>
                <td><span class="badge badge-${a.status === 'Completado' ? 'success' : 'warning'}">${a.status}</span></td>
            </tr>
        `).join('');
    },

    attachEventListeners() {
        // Eventos específicos del dashboard
    }
};