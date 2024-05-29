// Requerir Express
const express = require('express');

// Instancia de Express
const app = express();

// Definir el puerto 3000 y comenzar a escuchar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Crear objeto con la información del equipo N3
const grupoDeTrabajo = {
    proyecto: "Taller clase 8-9",
    nombre: "Grupo de Desarrollo de App Web",
    miembros: [
        { nombre: "Yuverly Verdezoto", rol: "Scrum Master" },
        { nombre: "Luis Guaygua", rol: "Desarrollador Backend" },
        { nombre: "Lenin Proaño", rol: "Desarrollador Frontend" },
        { nombre: "Eduardo Caza", rol: "Desarrollador Backend" },
        { nombre: "Mateo Garzón", rol: "Desarrollador Frontend" }
    ]
};

// Definir la ruta "/" con una petición GET
app.get('/', (req, res) => {
    res.json(grupoDeTrabajo);
});

// Información de productos
app.get('/products', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Productos Khaos Studio</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }
            h1 {
                color: #333;
            }
            ul {
                list-style-type: none;
                padding: 0;
            }
            li {
                background-color: #0fff;
                margin: 10px 0;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .product {
                display: flex;
                align-items: center;
            }
            .product-info {
                flex: 1;
            }
        </style>
    </head>
    <body>
        <h1>Productos Khaos Studio</h1>
        <ul>
            <li class="product">
                <div class="product-info">
                    <h2>Guerra de Cartas</h2>
                    <p>Un emocionante juego de estrategia con cartas.</p>
                </div>
            </li>
            <li class="product">
                <div class="product-info">
                    <h2>Vida Feliz</h2>
                    <p>Un juego de simulación de vida donde tomas decisiones importantes.</p>
                </div>
            </li>
            <li class="product">
                <div class="product-info">
                    <h2>El Juego</h2>
                    <p>Una experiencia inmersiva en un mundo de aventuras.</p>
                </div>
            </li>
        </ul>
    </body>
    </html>
    `);
});

// Datos de los integrantes del grupo
const integrantes = [
  { id: 1, nombre: 'Eduardo Caza', sexo: 'Masculino', apodo: 'Edu' },
  { id: 2, nombre: 'Lenin Proaño', sexo: 'Masculino', apodo: 'Ignel' },
  { id: 3, nombre: 'Mateo Garzón', sexo: 'Masculino', apodo: 'Guesitos' },
  { id: 4, nombre: 'Luis Guaygua', sexo: 'Masculino', apodo: 'Kairos' },
  { id: 5, nombre: 'Yuverly Verdezoto', sexo: 'Masculino', apodo: 'Hidokun' }
];

// Ruta para obtener información de todos los integrantes
app.get('/integrantes', (req, res) => {
  res.json(integrantes);
});

// Ruta para obtener información de un integrante por su id
app.get('/integrantes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const integrante = integrantes.find(integrante => integrante.id === id);
  
  if (integrante) {
    res.json(integrante);
  } else {
    res.status(404).send('Integrante no encontrado');
  }
});

// Manejo de una ruta que no sea encontrada
app.use((req,res)=>{
    res.status(404).send("Página no encontrada - 404")
})



// Requerir Express
const express = require('express');

// Instancia de Express
const app = express();

// Definir el puerto 3000 y comenzar a escuchar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Crear objeto con la información del equipo N3
const grupoDeTrabajo = {
    proyecto: "Taller clase 8-9",
    nombre: "Grupo de Desarrollo de App Web",
    miembros: [
        { nombre: "Yuverly Verdezoto", rol: "Scrum Master" },
        { nombre: "Luis Guaygua", rol: "Desarrollador Backend" },
        { nombre: "Lenin Proaño", rol: "Desarrollador Frontend" },
        { nombre: "Eduardo Caza", rol: "Desarrollador Backend" },
        { nombre: "Mateo Garzón", rol: "Desarrollador Frontend" }
    ]
};

// Definir la ruta "/" con una petición GET
app.get('/', (req, res) => {
    res.json(grupoDeTrabajo);
});

// Información de productos
app.get('/products', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Productos Khaos Studio</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }
            h1 {
                color: #333;
            }
            ul {
                list-style-type: none;
                padding: 0;
            }
            li {
                background-color: #0fff;
                margin: 10px 0;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .product {
                display: flex;
                align-items: center;
            }
            .product-info {
                flex: 1;
            }
        </style>
    </head>
    <body>
        <h1>Productos Khaos Studio</h1>
        <ul>
            <li class="product">
                <div class="product-info">
                    <h2>Guerra de Cartas</h2>
                    <p>Un emocionante juego de estrategia con cartas.</p>
                </div>
            </li>
            <li class="product">
                <div class="product-info">
                    <h2>Vida Feliz</h2>
                    <p>Un juego de simulación de vida donde tomas decisiones importantes.</p>
                </div>
            </li>
            <li class="product">
                <div class="product-info">
                    <h2>El Juego</h2>
                    <p>Una experiencia inmersiva en un mundo de aventuras.</p>
                </div>
            </li>
        </ul>
    </body>
    </html>
    `);
});

// Datos de los integrantes del grupo
const integrantes = [
  { id: 1, nombre: 'Eduardo Caza', sexo: 'Masculino', apodo: 'Edu' },
  { id: 2, nombre: 'Lenin Proaño', sexo: 'Masculino', apodo: 'Ignel' },
  { id: 3, nombre: 'Mateo Garzón', sexo: 'Masculino', apodo: 'Guesitos' },
  { id: 4, nombre: 'Luis Guaygua', sexo: 'Masculino', apodo: 'Kairos' },
  { id: 5, nombre: 'Yuverly Verdezoto', sexo: 'Masculino', apodo: 'Hidokun' }
];

// Ruta para obtener información de todos los integrantes
app.get('/integrantes', (req, res) => {
  res.json(integrantes);
});

// Ruta para obtener información de un integrante por su id
app.get('/integrantes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const integrante = integrantes.find(integrante => integrante.id === id);
  
  if (integrante) {
    res.json(integrante);
  } else {
    res.status(404).send('Integrante no encontrado');
  }
});

// Manejo de una ruta que no sea encontrada
app.use((req,res)=>{
    res.status(404).send("Página no encontrada - 404")
})



