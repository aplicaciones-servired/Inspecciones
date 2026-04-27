
export const inspections = [
    //{ name: 'Inspección de bicicleta', value: 'bicicleta' },
    { name: 'Inspección de bodega', value: 'bodega' },
    { name: 'Inspección de botiquín', value: 'botiquin' },
    { name: 'Inspección de camilla', value: 'camilla' },
    { name: 'Inspección de extintores', value: 'extintores' },
    { name: 'Inspección de herramientas', value: 'herramientas' },
    { name: 'Inspección de locativa', value: 'locativa' },
    { name: 'Inspección de motocicleta', value: 'motocicleta' },
    { name: 'Inspección de protección', value: 'protecion' },
  { name: 'Seguimiento de login', value: 'seguimiento_login' },
  ]

export type InspectionKey =
  | 'bodega'
  | 'botiquin'
  | 'camilla'
  | 'extintores'
  | 'herramientas'
  | 'locativa'
  | 'motocicleta'
  | 'protecion'
  | 'seguimiento_login'

type DialogConfig = {
  order: string[]
  labels: Record<string, string>
  hiddenKeys?: string[]
}

export const inspectionDialogConfig: Record<InspectionKey, DialogConfig> = {
  bodega: {
    order: ['fecha_inspeccion', 'responsable_inspeccion', 'responsable_documento', 'lugar_inspeccion', 'ubicacion', 'pregunta1', 'pregunta2', 'pregunta3', 'pregunta4', 'pregunta5', 'pregunta6', 'pregunta7', 'pregunta8', 'pregunta9', 'pregunta10', 'pregunta11', 'pregunta12', 'observacion'],
    hiddenKeys: ['id'],
    labels: {
      fecha_inspeccion: 'Fecha de inspeccion',
      responsable_inspeccion: 'Responsable de la inspeccion',
      responsable_documento: 'Documento',
      lugar_inspeccion: 'Lugar de inspeccion',
      'lugar de inspeccion': 'Lugar de inspeccion',
      ubicacion: 'Ubicacion',
      pregunta1: 'La bodega esta protegida contra el acceso no autorizado, robo de articulos o incendio premeditado',
      pregunta2: 'Las luminarias se encuentran por lo menos a 1 metro desde los articulos almacenados, para evitar la inflamacion por calor radiante',
      pregunta3: 'Los pisos son regulares, de facil limpieza y con pendiente adecuada para el drenaje del agua',
      pregunta4: 'Se encuentran senalizadas las areas de almacenamiento, salidas de emergencia, areas de circulacion, extintores y equipos de primeros auxilios',
      pregunta5: 'Existe una distancia minima de 70 cm entre estante y pared',
      pregunta6: 'Los elementos se encuentran apilados segun su forma (regular en la base, irregulares en la parte superior)',
      pregunta7: 'Las superficies de transito se encuentran libres de elementos y obstaculos',
      pregunta8: 'Los elementos se encuentran almacenados por tipo y son de facil acceso segun su frecuencia de uso',
      pregunta9: 'Los elementos se encuentran ordenados y limpios',
      pregunta10: 'Se verifica regularmente la vigencia y funcionalidad de los elementos almacenados',
      pregunta11: 'La bodega esta libre de insectos y roedores',
      pregunta12: 'Se cuenta con extintor y botiquin adecuado para el tipo de materiales almacenados',
      observacion: 'Observacion',
    },
  },
  botiquin: {
    order: ['fecha_inspeccion', 'responsable_inspeccion', 'responsable_documento', 'documento', 'lugar_inspeccion', 'lugar de inspeccion', 'pregunta1', 'ubicacion1', 'capacidad1', 'observacion1', 'pregunta2', 'ubicacion2', 'capacidad2', 'observacion2', 'pregunta3', 'ubicacion3', 'capacidad3', 'observacion3', 'pregunta4', 'ubicacion4', 'capacidad4', 'observacion4', 'pregunta5', 'ubicacion5', 'capacidad5', 'observacion5', 'pregunta6', 'ubicacion6', 'capacidad6', 'observacion6', 'pregunta7', 'ubicacion7', 'capacidad7', 'observacion7', 'pregunta8', 'ubicacion8', 'capacidad8', 'observacion8', 'pregunta9', 'ubicacion9', 'capacidad9', 'observacion9', 'pregunta10', 'ubicacion10', 'capacidad10', 'observacion10', 'pregunta11', 'ubicacion11', 'capacidad11', 'observacion11', 'pregunta12', 'ubicacion12', 'capacidad12', 'observacion12', 'pregunta13', 'ubicacion13', 'capacidad13', 'observacion13', 'pregunta14', 'ubicacion14', 'capacidad14', 'observacion14', 'pregunta15', 'ubicacion15', 'capacidad15', 'observacion15', 'pregunta16', 'ubicacion16', 'capacidad16', 'observacion16', 'nota'],
    hiddenKeys: ['id'],
    labels: {
      fecha_inspeccion: 'Fecha de inspeccion',
      responsable_inspeccion: 'Responsable de la inspeccion',
      responsable_documento: 'Documento',
      documento: 'Documento',
      lugar_inspeccion: 'Lugar de inspeccion',
      'lugar de inspeccion': 'Lugar de inspeccion',
      pregunta: 'Elemento/material',
      ubicacion: 'Ubicacion',
      capacidad: 'Capacidad',
      observacion: 'Observacion',
      nota: 'Nota',
    },
  },
  camilla: {
    order: ['fecha_inspeccion', 'responsable_inspeccion', 'lugar', 'lugar_inspeccion', 'ubicacion', 'senalizacion', 'aceso', 'estado', 'instalacion', 'correas', 'inmovilizador', 'observacion', 'ubicacion1', 'senalizacion1', 'aceso1', 'estado1', 'instalacion1', 'correas1', 'inmovilizador1', 'observacion1'],
    hiddenKeys: ['id'],
    labels: {
      fecha_inspeccion: 'Fecha de inspeccion',
      responsable_inspeccion: 'Responsable de la inspeccion',
      lugar: 'Lugar de inspeccion',
      lugar_inspeccion: 'Lugar de inspeccion',
      ubicacion: 'Ubicacion',
      senalizacion: 'Senalizacion',
      aceso: 'Acceso',
      estado: 'Estado',
      instalacion: 'Instalacion',
      correas: 'Correas',
      inmovilizador: 'Inmovilizador',
      observacion: 'Observacion',
    },
  },
  extintores: {
    order: ['fecha_inspeccion', 'responsable_inspeccion', 'responsable_documento', 'lugar_inspeccion', 'numero', 'tipo', 'ubicacion', 'capacidad', 'proxima_recarga', 'golpes', 'manometro', 'pasador_seguridad', 'manguera', 'boquilla', 'manija', 'cilindro', 'pintura', 'senalizacion', 'acceso', 'visibilidad', 'observacion', 'recomendaciones'],
    hiddenKeys: ['id'],
    labels: {
      fecha_inspeccion: 'Fecha de inspeccion',
      responsable_inspeccion: 'Responsable de la inspeccion',
      responsable_documento: 'Documento',
      lugar_inspeccion: 'Lugar de inspeccion',
      numero: 'Numero',
      tipo: 'Tipo',
      ubicacion: 'Ubicacion',
      capacidad: 'Capacidad',
      proxima_recarga: 'Proxima recarga',
      golpes: 'Golpes',
      manometro: 'Manometro',
      pasador_seguridad: 'Pasador de seguridad',
      manguera: 'Manguera',
      boquilla: 'Boquilla',
      manija: 'Manija',
      cilindro: 'Cilindro',
      pintura: 'Pintura',
      senalizacion: 'Senalizacion',
      acceso: 'Acceso',
      visibilidad: 'Visibilidad',
      observacion: 'Observacion',
      recomendaciones: 'Recomendaciones',
    },
  },
  herramientas: {
    order: ['fecha_inspeccion', 'responsable_inspeccion', 'pregunta1', 'pregunta2', 'pregunta3', 'pregunta4', 'pregunta5', 'pregunta6', 'pregunta7', 'pregunta8', 'pregunta9', 'pregunta10', 'pregunta11', 'pregunta12', 'pregunta13', 'pregunta14', 'pregunta15', 'pregunta16', 'pregunta17', 'pregunta18', 'pregunta19', 'pregunta20', 'pregunta21', 'pregunta22', 'pregunta23', 'pregunta24', 'pregunta25', 'pregunta26', 'pregunta27', 'pregunta28', 'pregunta29', 'pregunta30', 'pregunta31', 'pregunta32', 'pregunta33', 'pregunta34', 'pregunta35', 'pregunta36', 'pregunta37', 'pregunta38', 'pregunta39', 'pregunta40', 'pregunta41', 'pregunta42', 'pregunta43', 'pregunta44', 'observaciones'],
    hiddenKeys: ['id'],
    labels: {
      fecha_inspeccion: 'Fecha de inspeccion',
      responsable_inspeccion: 'Responsable de la inspeccion',
      pregunta: 'Item de herramienta',
      observaciones: 'Observaciones',
    },
  },
  locativa: {
    order: ['fecha_inspeccion', 'responsable_inspeccion', 'responsable_documento', 'lugar_inspeccion', 'pregunta1', 'calificacion1', 'observacion1', 'pregunta2', 'calificacion2', 'observacion2', 'pregunta3', 'calificacion3', 'observacion3', 'pregunta4', 'calificacion4', 'observacion4', 'pregunta5', 'calificacion5', 'observacion5', 'pregunta6', 'calificacion6', 'observacion6', 'pregunta7', 'calificacion7', 'observacion7', 'pregunta8', 'calificacion8', 'observacion8', 'pregunta9', 'calificacion9', 'observacion9', 'pregunta10', 'calificacion10', 'observacion10', 'pregunta11', 'calificacion11', 'observacion11', 'pregunta12', 'calificacion12', 'observacion12', 'imagen_observacion'],
    hiddenKeys: ['id'],
    labels: {
      fecha_inspeccion: 'Fecha de inspeccion',
      responsable_inspeccion: 'Responsable de la inspeccion',
      responsable_documento: 'Documento',
      lugar_inspeccion: 'Lugar de inspeccion',
      pregunta: 'ASPECTO A EVALUAR',
      calificacion: 'Calificacion',
      observacion: 'Observacion',
      imagen_observacion: 'Imagen de observacion',
    },
  },
  motocicleta: {
    order: ['fecha', 'hora', 'Hora', 'nombre', 'cedula', 'placa', 'kilometraje', 'empresa', 'salud', 'casco', 'botas', 'profundidad', 'luces', 'bocina', 'espejos', 'aceite', 'freno', 'cadena', 'soat', 'obervaciones', 'observacion'],
    hiddenKeys: ['id'],
    labels: {
      fecha: 'Fecha de inspeccion',
      hora: 'Hora',
      Hora: 'Hora',
      nombre: 'Nombre',
      cedula: 'Cedula',
      placa: 'Placa',
      kilometraje: 'Kilometraje',
      empresa: 'Empresa',
      salud: 'Salud',
      casco: 'Casco',
      botas: 'Botas',
      profundidad: 'Profundidad',
      luces: 'Luces',
      bocina: 'Bocina',
      espejos: 'Espejos',
      aceite: 'Aceite',
      freno: 'Freno',
      cadena: 'Cadena',
      soat: 'SOAT',
      obervaciones: 'Observacion',
      observacion: 'Observacion',
    },
  },
  protecion: {
    order: ['fecha_inspeccion', 'responsable_inspeccion', 'lugar', 'cargo', 'pregunta1', 'observacion1', 'pregunta2', 'observacion2', 'pregunta3', 'observacion3', 'pregunta4', 'observacion4', 'pregunta5', 'observacion5', 'pregunta6', 'observacion6', 'pregunta7', 'observacion7', 'pregunta8', 'observacion8', 'pregunta9', 'observacion9', 'pregunta10', 'observacion10', 'pregunta11', 'observacion11', 'pregunta12', 'observacion12', 'pregunta13', 'observacion13', 'pregunta14', 'observacion14', 'pregunta15', 'observacion15', 'pregunta16', 'observacion16'],
    hiddenKeys: ['id'],
    labels: {
      fecha_inspeccion: 'Fecha de inspeccion',
      responsable_inspeccion: 'Responsable de la inspeccion',
      lugar: 'Lugar',
      cargo: 'Cargo',
      pregunta: 'Elemento de proteccion',
      observacion: 'Observacion',
    },
  },
  seguimiento_login: {
    order: ['fecha', 'cedula', 'nombre', 'empresa'],
    hiddenKeys: ['id'],
    labels: {
      fecha: 'Fecha y hora',
      cedula: 'Cedula',
      nombre: 'Nombre',
      empresa: 'Empresa',
    },
  },
}

export const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "/api_data/api";