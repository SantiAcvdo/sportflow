class Authentication {
    static DEFAULT_USERS = [
        {
            email: 'admin@club.com',
            password: 'Demo123!',
            name: 'Administrador',
            role: 'admin'
        },
        {
            email: 'director@club.com',
            password: 'Demo123!',
            name: 'Director',
            role: 'director'
        },
        {
            email: 'coach@club.com',
            password: 'Demo123!',
            name: 'Entrenador',
            role: 'coach'
        },
        {
            email: 'player@club.com',
            password: 'Demo123!',
            name: 'Jugador',
            role: 'player'
        }
    ];

    static ROLES_PERMISSIONS = {
        admin: ['players', 'teams', 'statistics', 'schedule', 'notifications', 'settings', 'dashboard'],
        director: ['players', 'teams', 'statistics', 'schedule', 'notifications', 'settings', 'dashboard'],
        coach: ['players', 'statistics', 'schedule', 'notifications', 'dashboard'],
        player: ['dashboard', 'notifications']
    };

    static initialize() {
        const users = JSON.parse(localStorage.getItem('auth_users') || '[]');
        if (users.length === 0) {
            localStorage.setItem('auth_users', JSON.stringify(this.DEFAULT_USERS));
        }
    }

    static login(email, password, rememberMe = false) {
        const users = JSON.parse(localStorage.getItem('auth_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            return { success: false, message: 'Correo o contraseña incorrectos' };
        }

        const sessionData = {
            email: user.email,
            name: user.name,
            role: user.role,
            loginTime: new Date().toISOString()
        };

        sessionStorage.setItem('sportflow_session', JSON.stringify(sessionData));

        if (rememberMe) {
            localStorage.setItem('sportflow_lastUser', JSON.stringify({ email: user.email, name: user.name }));
        }

        return { success: true, message: 'Inicio de sesión exitoso' };
    }

    static register(email, password, name, role = 'player') {
        const users = JSON.parse(localStorage.getItem('auth_users') || '[]');

        if (users.some(u => u.email === email)) {
            return { success: false, message: 'Este correo ya está registrado' };
        }

        if (!this.validatePassword(password)) {
            return { success: false, message: 'La contraseña debe tener al menos 8 caracteres, incluir mayúscula y número' };
        }

        users.push({ email, password, name, role });
        localStorage.setItem('auth_users', JSON.stringify(users));

        return { success: true, message: 'Registro exitoso. Por favor inicia sesión' };
    }

    static logout() {
        sessionStorage.removeItem('sportflow_session');
    }

    static getCurrentUser() {
        const session = sessionStorage.getItem('sportflow_session');
        return session ? JSON.parse(session) : null;
    }

    static isAuthenticated() {
        return this.getCurrentUser() !== null;
    }

    static checkSession() {
        if (!this.isAuthenticated()) {
            window.location.href = 'index.html';
            return false;
        }
        return true;
    }

    static hasRole(requiredRole) {
        const user = this.getCurrentUser();
        if (!user) return false;
        return user.role === requiredRole;
    }

    static canAccess(module) {
        const user = this.getCurrentUser();
        if (!user) return false;
        return this.ROLES_PERMISSIONS[user.role]?.includes(module) || false;
    }

    static validatePassword(password) {
        const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regex.test(password);
    }

    static getLastUser() {
        const lastUser = localStorage.getItem('sportflow_lastUser');
        return lastUser ? JSON.parse(lastUser) : null;
    }

    static removeLastUser() {
        localStorage.removeItem('sportflow_lastUser');
    }
}

// Inicializar autenticación
Authentication.initialize();
