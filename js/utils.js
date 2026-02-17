const Utils = {
    // Validación
    isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    isValidPhone(phone) {
        const regex = /^\+?[\d\s\-()]{10,}$/;
        return regex.test(phone);
    },

    // Formateo
    formatDate(date) {
        return new Date(date).toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    formatTime(time) {
        return new Date(`2000-01-01T${time}`).toLocaleTimeString('es-CO', {
            hour: '2-digit',
            minute: '2-digit'
        });
    },

    formatDateTime(dateString) {
        return new Date(dateString).toLocaleString('es-CO');
    },

    // Búsqueda
    searchInArray(array, query, fields) {
        if (!query.trim()) return array;
        const lowerQuery = query.toLowerCase();
        return array.filter(item =>
            fields.some(field => String(item[field]).toLowerCase().includes(lowerQuery))
        );
    },

    // Notificaciones
    showNotification(message, type = 'success', duration = 3000) {
        const container = document.getElementById('notificationContainer') || createNotificationContainer();
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        container.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    },

    // Almacenamiento
    setLocalStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Error al guardar en localStorage:', e);
            return false;
        }
    },

    getLocalStorage(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Error al leer localStorage:', e);
            return defaultValue;
        }
    },

    // ID generador
    generateId() {
        return Date.now() + Math.random().toString(36).substr(2, 9);
    },

    // Clonación
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },

    // Ordenamiento
    sortArray(array, field, ascending = true) {
        const sorted = [...array];
        sorted.sort((a, b) => {
            if (ascending) {
                return a[field] > b[field] ? 1 : -1;
            } else {
                return a[field] < b[field] ? 1 : -1;
            }
        });
        return sorted;
    }
};

function createNotificationContainer() {
    const container = document.createElement('div');
    container.id = 'notificationContainer';
    container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        max-width: 400px;
    `;
    document.body.appendChild(container);
    return container;
}

// Exportar globalmente
const showNotification = (msg, type, duration) => Utils.showNotification(msg, type, duration);