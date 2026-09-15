export const INITIAL_SPRINTS = [
  {
    id: 'sprint-14',
    name: 'Sprint 14 · Ejecución Ensanche & Renders Coveta',
    goal: 'Completar planos de instalaciones Ensanche y entrega de renders fotorrealistas de La Coveta',
    startDate: '2026-09-08',
    endDate: '2026-09-22',
    status: 'active'
  },
  {
    id: 'sprint-13',
    name: 'Sprint 13 · Licencias Alfinach & Cimentación Albir',
    goal: 'Subsanación de requerimientos de licencia municipal en Moncada y replanteo de cimentación',
    startDate: '2026-08-25',
    endDate: '2026-09-07',
    status: 'completed'
  },
  {
    id: 'sprint-15',
    name: 'Sprint 15 · Proyecto Básico Ático Cirilo',
    goal: 'Presentación de anteproyecto y mediciones presupuestarias para Cirilo Amorós',
    startDate: '2026-09-23',
    endDate: '2026-10-07',
    status: 'future'
  }
];

export const INITIAL_TASKS = [
  {
    id: 'TASK-101',
    title: 'Modelado 3D de iluminación circadiana en Salón Ensanche',
    description: 'Ajustar la temperatura de color de las luminarias ocultas en foseados para simular atardecer.',
    status: 'in_progress',
    sprintId: 'sprint-14',
    assignee: {
      name: 'Elena Soriano',
      role: 'Arquitecta 3D & Renders',
      avatar: 'ES'
    },
    priority: 'high',
    points: 5,
    tag: 'Renders 3D',
    project: 'Vivienda Ensanche',
    dueDate: '2026-09-18'
  },
  {
    id: 'TASK-102',
    title: 'Revisión técnica de climatización por aerotermia y suelo radiante',
    description: 'Coordinar con ingeniero de instalaciones el paso de conductos por falso techo respetando molduras.',
    status: 'review',
    sprintId: 'sprint-14',
    assignee: {
      name: 'Carlos Navarro',
      role: 'Director de Proyecto',
      avatar: 'CN'
    },
    priority: 'urgent',
    points: 8,
    tag: 'Instalaciones',
    project: 'Vivienda Ensanche',
    dueDate: '2026-09-17'
  },
  {
    id: 'TASK-103',
    title: 'Selección de muestras de microcemento arena y mármol travertino',
    description: 'Recepción en estudio de las tres muestras de grano fino solicitadas para La Coveta.',
    status: 'done',
    sprintId: 'sprint-14',
    assignee: {
      name: 'Sofía Valero',
      role: 'Diseñadora de Interiores',
      avatar: 'SV'
    },
    priority: 'medium',
    points: 3,
    tag: 'Materiales',
    project: 'La Coveta',
    dueDate: '2026-09-12'
  },
  {
    id: 'TASK-104',
    title: 'Cálculo de transmitancia térmica en carpinterías de roble',
    description: 'Comprobar valores CTE DB-HE para cumplimiento de eficiencia energética clase A.',
    status: 'todo',
    sprintId: 'sprint-14',
    assignee: {
      name: 'Carlos Navarro',
      role: 'Director de Proyecto',
      avatar: 'CN'
    },
    priority: 'medium',
    points: 5,
    tag: 'Estructura & CTE',
    project: 'Casa en Alfinach',
    dueDate: '2026-09-20'
  },
  {
    id: 'TASK-105',
    title: 'Redacción de memoria descriptiva para Colegio de Arquitectos (COACV)',
    description: 'Visado colegial telemático de las modificaciones de distribución del ático.',
    status: 'in_progress',
    sprintId: 'sprint-14',
    assignee: {
      name: 'Marc Ribera',
      role: 'Arquitecto Técnico',
      avatar: 'MR'
    },
    priority: 'high',
    points: 5,
    tag: 'Licencias & Visado',
    project: 'Ático en Cirilo',
    dueDate: '2026-09-19'
  },
  {
    id: 'TASK-106',
    title: 'Presupuesto comparativo de subcontratas de carpintería metálica',
    description: 'Comparar ofertas recibidas de Cortizo y Schüco para los ventanales correderos.',
    status: 'todo',
    sprintId: 'sprint-14',
    assignee: {
      name: 'Marc Ribera',
      role: 'Arquitecto Técnico',
      avatar: 'MR'
    },
    priority: 'low',
    points: 3,
    tag: 'Presupuesto',
    project: 'Casa Albir',
    dueDate: '2026-09-21'
  },
  {
    id: 'TASK-107',
    title: 'Render exterior crepuscular con piscina desbordante',
    description: 'Postproducción en Photoshop de los reflejos en lámina de agua de Casa en Alfinach.',
    status: 'backlog',
    sprintId: 'backlog',
    assignee: {
      name: 'Elena Soriano',
      role: 'Arquitecta 3D & Renders',
      avatar: 'ES'
    },
    priority: 'medium',
    points: 5,
    tag: 'Renders 3D',
    project: 'Casa en Alfinach',
    dueDate: '2026-09-28'
  },
  {
    id: 'TASK-108',
    title: 'Visita de replanteo topográfico con dron en ladera',
    description: 'Comprobación de cotas de excavación previa a los muros de contención.',
    status: 'backlog',
    sprintId: 'backlog',
    assignee: {
      name: 'Carlos Navarro',
      role: 'Director de Proyecto',
      avatar: 'CN'
    },
    priority: 'high',
    points: 8,
    tag: 'Obra',
    project: 'Casa Albir',
    dueDate: '2026-10-02'
  }
];

export const TEAM_MEMBERS = [
  { id: 'CN', name: 'Carlos Navarro', role: 'Director de Proyecto / Socio', avatar: 'CN' },
  { id: 'ES', name: 'Elena Soriano', role: 'Arquitecta 3D & Renders', avatar: 'ES' },
  { id: 'SV', name: 'Sofía Valero', role: 'Diseñadora de Interiores', avatar: 'SV' },
  { id: 'MR', name: 'Marc Ribera', role: 'Arquitecto Técnico & Mediciones', avatar: 'MR' }
];
