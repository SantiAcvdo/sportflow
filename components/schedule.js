const ScheduleModule = {
    init() {
        this.render();
    },

    render() {
        const events = Storage.getEvents();
        const tbody = document.getElementById('scheduleTable');

        if (events.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Sin eventos programados</td></tr>';
            return;
        }

        tbody.innerHTML = events.map(e => `
            <tr>
                <td>${e.date}</td>
                <td>${e.time}</td>
                <td><span class="badge badge-warning">${e.type}</span></td>
                <td>${e.location}</td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="ScheduleModule.edit(${e.id})">✏️ Editar</button>
                    <button class="btn btn-sm btn-danger" onclick="ScheduleModule.delete(${e.id})">🗑️ Eliminar</button>
                </td>
            </tr>
        `).join('');
    },

    add(data) {
        Storage.addEvent(data);
        this.render();
        showNotification('✅ Evento programado', 'success');
    },

    edit(id) {
        alert(`Editando evento ID: ${id}`);
    },

    delete(id) {
        if (confirm('¿Eliminar este evento?')) {
            const events = Storage.getEvents().filter(e => e.id !== id);
            Storage.saveEvents(events);
            this.render();
            showNotification('✅ Evento eliminado', 'success');
        }
    }
};
