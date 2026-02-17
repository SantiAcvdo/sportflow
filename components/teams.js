const TeamsModule = {
    init() {
        this.render();
    },

    render() {
        const teams = Storage.getTeams();
        const grid = document.getElementById('teamsGrid');
        
        if (teams.length === 0) {
            grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 2rem;">No hay equipos registrados</div>';
            return;
        }

        grid.innerHTML = teams.map(t => `
            <div class="card">
                <h3>${t.name}</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                    <strong>Categoría:</strong> ${t.category}<br>
                    <strong>Entrenador:</strong> ${t.coach}
                </p>
                <button class="btn btn-secondary" style="width: 100%; margin-bottom: 0.5rem;">📋 Ver Detalles</button>
                <button class="btn btn-danger" style="width: 100%;" onclick="TeamsModule.delete(${t.id})">🗑️ Eliminar</button>
            </div>
        `).join('');
    },

    add(data) {
        Storage.addTeam(data);
        this.render();
        showNotification('✅ Equipo creado exitosamente', 'success');
    },

    delete(id) {
        if (confirm('¿Eliminar este equipo?')) {
            const teams = Storage.getTeams().filter(t => t.id !== id);
            Storage.saveTeams(teams);
            this.render();
            showNotification('✅ Equipo eliminado', 'success');
        }
    }
};
