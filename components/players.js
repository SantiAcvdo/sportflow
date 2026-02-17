// components/players.js - Módulo Gestión de Jugadores

const PlayersModule = {
    init() {
        this.render();
        this.attachEventListeners();
    },

    render() {
        const players = Storage.getPlayers();
        this.renderTable(players);
    },

    renderTable(players) {
        const tbody = document.getElementById('playersTable');
        
        if (players.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No hay jugadores registrados</td></tr>';
            return;
        }

        tbody.innerHTML = players.map(p => `
            <tr>
                <td><strong>${p.name}</strong></td>
                <td>${p.position}</td>
                <td><span class="badge badge-success">${p.number}</span></td>
                <td>${p.email}</td>
                <td><span class="badge badge-success">${p.status || 'Activo'}</span></td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="PlayersModule.edit(${p.id})">✏️ Editar</button>
                    <button class="btn btn-sm btn-danger" onclick="PlayersModule.delete(${p.id})">🗑️ Eliminar</button>
                </td>
            </tr>
        `).join('');
    },

    add(data) {
        Storage.addPlayer(data);
        this.render();
        showNotification('✅ Jugador agregado exitosamente', 'success');
    },

    edit(id) {
        alert(`Editando jugador ID: ${id}`);
    },

    delete(id) {
        if (confirm('¿Eliminar este jugador?')) {
            Storage.deletePlayer(id);
            this.render();
            showNotification('✅ Jugador eliminado', 'success');
        }
    },

    attachEventListeners() {
        // Evento para agregar jugador
    }
};

// Inicializar cuando se cargue el módulo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('playersTable')) {
            PlayersModule.init();
        }
    });
} else {
    PlayersModule.init();
}