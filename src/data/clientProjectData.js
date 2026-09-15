export const CLIENT_PROJECT = {
  id: 'PROJ-ENSANCHE-2026',
  clientName: 'Alejandro Gómez & Marta Morales',
  projectName: 'Vivienda Ensanche',
  address: 'Gran Vía Marqués del Turia, 48 - Ensanche, Valencia',
  surface: '175 m²',
  typology: 'Reforma Integral de Alta Calidad & Restauración Patrimonial',
  progressPercent: 78,
  currentPhase: 'Fase 04 · Revestimientos de Microcemento, Madera & Luminotecnia',
  estimatedCompletion: 'Diciembre 2026',
  assignedTeam: [
    { name: 'Carlos Navarro', role: 'Director de Proyecto / Socio', phone: '+34 627 283 053', email: 'carlos@nos-arquitectura.com' },
    { name: 'Elena Soriano', role: 'Arquitecta 3D & Coordinadora de Obra', phone: '+34 665 335 398', email: 'elena@nos-arquitectura.com' }
  ],
  milestones: [
    { id: 1, title: 'Fase 01: Concepto & Distribución Espacial', date: 'Mayo 2026', status: 'completed' },
    { id: 2, title: 'Fase 02: Licencia Municipal de Obra (Ayto. Valencia)', date: 'Julio 2026', status: 'completed' },
    { id: 3, title: 'Fase 03: Demoliciones, Refuerzo Estructural & Red de Clima', date: 'Agosto 2026', status: 'completed' },
    { id: 4, title: 'Fase 04: Pavimento continuo, Carpinterías a Medida & Baños', date: 'Septiembre - Octubre 2026', status: 'active' },
    { id: 5, title: 'Fase 05: Mobiliario, Luminarias, Limpieza Técnica & Entrega', date: 'Noviembre - Diciembre 2026', status: 'pending' }
  ],
  documents: [
    {
      id: 'DOC-01',
      name: 'PL-01 · Plano de Distribución Definitiva (Planta Cotas & Superficies)',
      category: 'Planos Técnicos',
      format: 'PDF',
      size: '4.8 MB',
      date: '2026-06-18',
      version: 'v3.2',
      status: 'Aprobado por Cliente'
    },
    {
      id: 'DOC-02',
      name: 'PL-03 · Plano de Instalaciones Eléctricas, Foseados & Escenas Lumínicas',
      category: 'Planos Técnicos',
      format: 'PDF',
      size: '6.2 MB',
      date: '2026-07-22',
      version: 'v2.0',
      status: 'En Ejecución'
    },
    {
      id: 'DOC-03',
      name: 'PL-06 · Detalle Constructivo de Encuentros: Microcemento y Roble Francés',
      category: 'Planos Técnicos',
      format: 'DWG / PDF',
      size: '3.1 MB',
      date: '2026-08-10',
      version: 'v1.4',
      status: 'En Obra'
    },
    {
      id: 'DOC-04',
      name: 'MC-01 · Memoria Técnica de Calidades, Neuroarquitectura y Materiales',
      category: 'Memorias & Calidades',
      format: 'PDF',
      size: '8.4 MB',
      date: '2026-06-25',
      version: 'v2.1',
      status: 'Firmado'
    },
    {
      id: 'DOC-05',
      name: 'LIC-VAL-2026 · Resolución Favorable de Licencia de Obra Mayor (Ayto. Valencia)',
      category: 'Licencias & Visados',
      format: 'PDF',
      size: '1.9 MB',
      date: '2026-07-14',
      version: 'Oficial',
      status: 'Concedida'
    },
    {
      id: 'DOC-06',
      name: 'CERT-03 · Certificación Económica Nº3 de Avance de Obra (Agosto 2026)',
      category: 'Económico & Presupuesto',
      format: 'PDF',
      size: '2.5 MB',
      date: '2026-09-02',
      version: 'Auditado',
      status: 'Abonado'
    }
  ],
  renders: [
    {
      id: 'RND-01',
      title: 'Salón Principal y Galería de Luz',
      space: 'Zona de Día',
      image: '/images/vivienda-ensanche-interior.webp',
      description: 'Luz natural matutina a través de las carpinterías restauradas. Pavimento continuo en microcemento color arena cálida y molduras modernistas recuperadas.',
      specs: 'Orientación Este · Altura libre 3.40m · Iluminación indirecta regulable 2700K'
    },
    {
      id: 'RND-02',
      title: 'Isla de Cocina y Comedor Diáfano',
      space: 'Cocina & Comedor',
      image: '/images/la-coveta-detail.webp',
      description: 'Muebles de suelo a techo en madera de roble natural aceitado sin tirador visible, encimera de cuarcita y placa de inducción con extracción integrada.',
      specs: 'Madera de roble FSC · Encimera Taj Mahal · Electrodomésticos integrados Miele'
    },
    {
      id: 'RND-03',
      title: 'Detalle de Acabados & Muestras Sensoriales',
      space: 'Materialidad',
      image: '/images/moodboard-materiales.webp',
      description: 'Combinación táctil de caliza natural, lino lavado crudo, madera al aceite y latón envejecido seleccionados en el estudio.',
      specs: 'Materiales 100% libres de COVs · Texturas mate de bajo brillo'
    },
    {
      id: 'RND-04',
      title: 'Baño Principal en Mármol Travertino',
      space: 'Zona de Noche',
      image: '/images/notaria-detail.webp',
      description: 'Lavabo doble esculpido en bloque monolítico de piedra natural con grifería empotrada en latón cepillado.',
      specs: 'Piedra travertino apomazado · Mampara estriada translúcida'
    }
  ],
  siteDiary: [
    {
      id: 'DIARY-04',
      date: '12 de Septiembre de 2026',
      author: 'Carlos Navarro (Director de Obra)',
      title: 'Aplicación de la primera capa de microcemento y montaje de falso techo foseado',
      content: 'Esta semana se ha culminado el tendido de las instalaciones de climatización invisible por aerotermia. Ya hemos aplicado la base reguladora del pavimento continuo en la zona de noche. El tono arena seleccionado dialoga a la perfección con la luz de primera hora de la mañana.',
      photos: ['/images/vivienda-ensanche.webp']
    },
    {
      id: 'DIARY-03',
      date: '28 de Agosto de 2026',
      author: 'Elena Soriano (Coordinación Técnica)',
      title: 'Restauración artesanal de las molduras originales de escayola',
      content: 'El maestro artesano escayolista ha completado el saneado y reposición de los florones del techo del salón principal. Se ha respetado escrupulosamente la geometría original de 1918.',
      photos: ['/images/vivienda-ensanche-interior.webp']
    },
    {
      id: 'DIARY-02',
      date: '14 de Agosto de 2026',
      author: 'Marc Ribera (Arquitecto Técnico)',
      title: 'Ensayo de estanqueidad de fontanería y replanteo de tabiquería seca',
      content: 'Superadas las pruebas de presión hidráulica sin incidencias. Replanteada la distribución de la suite principal y vestidor.',
      photos: ['/images/notaria-detail.webp']
    }
  ]
};
