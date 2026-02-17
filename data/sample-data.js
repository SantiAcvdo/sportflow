// data/sample-data.js - Datos de Ejemplo

const SAMPLE_DATA = {
    players: [
        {
            id: 1,
            name: 'Carlos García',
            position: 'Portero',
            number: 1,
            email: 'carlos@club.com',
            phone: '+57 310 111 1111',
            status: 'Activo'
        },
        {
            id: 2,
            name: 'Juan Pérez',
            position: 'Defensa',
            number: 4,
            email: 'juan@club.com',
            phone: '+57 310 222 2222',
            status: 'Activo'
        },
        {
            id: 3,
            name: 'Miguel López',
            position: 'Centrocampista',
            number: 8,
            email: 'miguel@club.com',
            phone: '+57 310 333 3333',
            status: 'Activo'
        },
        {
            id: 4,
            name: 'Andrés Rodríguez',
            position: 'Delantero',
            number: 9,
            email: 'andres@club.com',
            phone: '+57 310 444 4444',
            status: 'Activo'
        }
    ],
    teams: [
        {
            id: 1,
            name: 'Plantilla Principal',
            category: 'Profesional',
            coach: 'Carlos Martínez',
            players: 11
        },
        {
            id: 2,
            name: 'Equipo Reserva',
            category: 'Profesional',
            coach: 'Ricardo López',
            players: 8
        }
    ],
    events: [
        {
            id: 1,
            date: '2026-02-18',
            time: '09:00',
            type: 'Entrenamiento',
            location: 'Cancha Principal'
        },
        {
            id: 2,
            date: '2026-02-20',
            time: '15:00',
            type: 'Partido Oficial',
            location: 'Estadio Municipal'
        }
    ],
    statistics: [
        {
            id: 1,
            playerId: 4,
            goals: 5,
            assists: 2,
            yellow: 1,
            red: 0,
            date: '2026-02-10'
        }
    ]
};

/**
 * Cargar datos de ejemplo en localStorage
 */
function loadSampleData() {
    if (!localStorage.getItem('sf_players')) {
        Storage.savePlayers(SAMPLE_DATA.players);
        Storage.saveTeams(SAMPLE_DATA.teams);
        Storage.saveEvents(SAMPLE_DATA.events);
        Storage.saveStatistics(SAMPLE_DATA.statistics);
    }
}

// Ejecutar al cargar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSampleData);
} else {
    loadSampleData();
}