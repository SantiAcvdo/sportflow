const NotificationsModule = {
    init() {
        this.render();
    },

    render() {
        const container = document.getElementById('notificationsList');
        const notifications = Storage.getNotifications();

        if (notifications.length === 0) {
            container.innerHTML = '<div style="text-align: center; color: var(--text-secondary); padding: 2rem;">Sin notificaciones</div>';
            return;
        }

        container.innerHTML = notifications.reverse().slice(0, 20).map(n => `
            <div style="background-color: rgba(2, 132, 199, 0.05); border-left: 3px solid var(--primary); padding: 1rem; margin-bottom: 0.5rem; border-radius: 0.25rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <strong>📢 ${n.title}</strong>
                    <span style="color: var(--text-secondary); font-size: 0.85rem;">${n.timestamp}</span>
                </div>
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0;">${n.message}</p>
            </div>
        `).join('');
    },

    add(data) {
        Storage.addNotification(data);
        this.render();
        showNotification('✅ Notificación enviada', 'success');
    }
};
