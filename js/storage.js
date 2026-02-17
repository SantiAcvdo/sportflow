// js/storage.js - Sistema de Almacenamiento Local

const Storage = {
    // ==================== JUGADORES ====================
    getPlayers() {
        return JSON.parse(localStorage.getItem('sf_players') || '[]');
    },
    
    savePlayers(players) {
        localStorage.setItem('sf_players', JSON.stringify(players));
    },
    
    addPlayer(player) {
        const players = this.getPlayers();
        players.push({
            id: Date.now(),
            ...player
        });
        this.savePlayers(players);
        return players[players.length - 1];
    },
    
    updatePlayer(id, updates) {
        const players = this.getPlayers();
        const index = players.findIndex(p => p.id === id);
        if (index !== -1) {
            players[index] = { ...players[index], ...updates };
            this.savePlayers(players);
        }
        return players[index];
    },
    
    deletePlayer(id) {
        const players = this.getPlayers().filter(p => p.id !== id);
        this.savePlayers(players);
    },

    // ==================== EQUIPOS ====================
    getTeams() {
        return JSON.parse(localStorage.getItem('sf_teams') || '[]');
    },
    
    saveTeams(teams) {
        localStorage.setItem('sf_teams', JSON.stringify(teams));
    },
    
    addTeam(team) {
        const teams = this.getTeams();
        teams.push({
            id: Date.now(),
            ...team
        });
        this.saveTeams(teams);
        return teams[teams.length - 1];
    },

    // ==================== ESTADÍSTICAS ====================
    getStatistics() {
        return JSON.parse(localStorage.getItem('sf_statistics') || '[]');
    },
    
    saveStatistics(stats) {
        localStorage.setItem('sf_statistics', JSON.stringify(stats));
    },
    
    addStatistic(stat) {
        const stats = this.getStatistics();
        stats.push({
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            ...stat
        });
        this.saveStatistics(stats);
        return stats[stats.length - 1];
    },

    // ==================== EVENTOS ====================
    getEvents() {
        return JSON.parse(localStorage.getItem('sf_events') || '[]');
    },
    
    saveEvents(events) {
        localStorage.setItem('sf_events', JSON.stringify(events));
    },
    
    addEvent(event) {
        const events = this.getEvents();
        events.push({
            id: Date.now(),
            ...event
        });
        this.saveEvents(events);
        return events[events.length - 1];
    },

    // ==================== NOTIFICACIONES ====================
    getNotifications() {
        return JSON.parse(localStorage.getItem('sf_notifications') || '[]');
    },
    
    saveNotifications(notifications) {
        localStorage.setItem('sf_notifications', JSON.stringify(notifications));
    },
    
    addNotification(notification) {
        const notifications = this.getNotifications();
        notifications.push({
            id: Date.now(),
            timestamp: new Date().toLocaleString(),
            ...notification
        });
        this.saveNotifications(notifications);
        return notifications[notifications.length - 1];
    },

    // ==================== INFORMACIÓN DEL CLUB ====================
    getClubInfo() {
        return JSON.parse(localStorage.getItem('sf_club_info') || '{}');
    },
    
    saveClubInfo(info) {
        localStorage.setItem('sf_club_info', JSON.stringify(info));
    },

    // ==================== LIMPIAR TODO ====================
    clearAll() {
        localStorage.clear();
    }
};