const proovedorModelo = {
    cif: '',
    nombre: '',
    actividad: '',
    direccion: '',
    localidad: '',
    codigoPostal: '',
    telefono: ''
  };
  
  const proovedores = [
    {
      cif: 'A12345678',
      nombre: 'Tibaja S.L.',
      actividad: 'Suministro de construcción',
      direccion: 'Calle de los Proveedores, 123',
      localidad: 'A Coruña',
      codigoPostal: '15060',
      telefono: '111222333'
    },
    {
      cif: 'B87654321',
      nombre: 'Ecolimpio',
      actividad: 'Servicios de limpieza y mantenimiento',
      direccion: 'Avenida del Ejército, 456',
      localidad: 'Pueblo Ayuntamiento',
      codigoPostal: '12345',
      telefono: '444555666'
    },
    {
      cif: 'C98765432',
      nombre: 'Jardines Niebla',
      actividad: 'Servicios de jardinería y paisajismo',
      direccion: 'Plaza de la Jardinería, 789',
      localidad: 'Cambre',
      codigoPostal: '15679',
      telefono: '777888999'
    },
    {
      cif: 'D54321098',
      nombre: 'Delta',
      actividad: 'Suministro de equipos informáticos',
      direccion: 'Calle de la Tecnología, 321',
      localidad: 'A Coruña',
      codigoPostal: '15008',
      telefono: '123456789'
    },
    {
      cif: 'E65432109',
      nombre: 'Altitus',
      actividad: 'Servicios de consultoría financiera',
      direccion: 'Avenida de las Finanzas, 987',
      localidad: 'Sada',
      codigoPostal: '15004',
      telefono: '987654321'
    }
  ];

  
const getProovedores = (req,res) => {
  res.json(proovedores)
};

const getProovedoreByCif = (req,res) => {
  const cif = req.params.cif;
  const proovedorCif = proovedores.find(a => a.cif === cif);
  if (!proovedorCif) {
    res.status(404).json({ message: 'Proveedor no encontrado' });
  } else { res.json(proovedorCif)}
  };

const postProovedor = (req,res) => {
  const proovedor = req.body
  const cif= proovedor.cif;
  try {
  if (
    !proovedores.find(a => a.cif === cif) )  {
  proovedores.push(proovedor)
  res.status(201).json({message:'Proovedor insertado'})}
  else {
    console.log('provoedor ya insertado')
    res.status(409).json({message:'Proovedor ya almacenado'})}
}  catch {res.status(403).json({message:'No se ha podido insertar el proovedor'})}}


const putProovedor = (req,res) => {
  const proovedor =req.body;
  const cif = proovedor.cif;
  const idx=proovedores.find(a => a.cif ===cif);
  try {
    if (idx) {
      for (let propiedad in proovedor) {
        if (proovedor[propiedad] !== idx[propiedad]) {
          idx[propiedad] = proovedor[propiedad];
        }
      }    
      res.status(200).json({ message: 'Proveedor modificado', proveedor: idx });
    } else {
      res.status(404).json({ message: 'No se ha encontrado el proveedor' });
    }
  } catch {
    res.status(400).json({ message: 'No es posible completar la operación' });
  }
};

const deleteProovedor = (req,res) => {
  const cif=req.params.cif;
  const idx= proovedores.findIndex(a=>a.cif===cif)
  if (idx !== -1) {
    proovedores.splice(idx, 1);
    res.status(200).json({ message: 'Proveedor eliminado'});
  } else {
    res.status(404).json({ message: 'Proveedor no encontrado' });
  }}


module.exports = { getProovedores, getProovedoreByCif, postProovedor, putProovedor, deleteProovedor };
