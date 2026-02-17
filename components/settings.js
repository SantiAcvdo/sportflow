const SettingsModule = {
    init() {
        this.loadClubInfo();
    },

    loadClubInfo() {
        const info = Storage.getClubInfo();
        if (Object.keys(info).length > 0) {
            document.getElementById('clubName').value = info.name || '';
            document.getElementById('clubEmail').value = info.email || '';
            document.getElementById('clubPhone').value = info.phone || '';
            document.getElementById('clubCity').value = info.city || '';
            document.getElementById('clubVenue').value = info.venue || '';
        }
    },

    saveClubInfo() {
        const info = {
            name: document.getElementById('clubName').value,
            email: document.getElementById('clubEmail').value,
            phone: document.getElementById('clubPhone').value,
            city: document.getElementById('clubCity').value,
            venue: document.getElementById('clubVenue').value
        };
        Storage.saveClubInfo(info);
        showNotification('✅ Información guardada exitosamente', 'success');
    }
};
