const products = [ 
    {
        id: '1',
        nombre: 'IBM model B beamspring',
        stock: 10,
        categoria: 'switches',
        descripcion:'Switch táctil capacitivo para teclados beamspring. Unidad.',
        precio: 16000,
        rutaImagen: 'https://media.discordapp.net/attachments/1151022569395343400/1151022874728083487/image.png?width=372&height=559'
      },
      {
        id: '2',
        nombre: 'Cherry MX Nixdorf clear',
        stock: 10,
        categoria: 'switches',
        descripcion:'Switch lineal resistivo MX. Edición especial Nixdorf; CIRCA 1980. Unidad.',
        precio: 1000,
        rutaImagen: 'https://media.discordapp.net/attachments/1151022569395343400/1151023765719887902/image.png?width=372&height=559'
      },
      {
        id: '3',
        nombre: 'Alps SKCM blue',
        stock: 10,
        categoria: 'switches',
        descripcion:'Switch táctil resistivo SKCM blue (unidad).',
        precio: 4000,
        rutaImagen: 'https://media.discordapp.net/attachments/1151022569395343400/1151026423633563689/image.png?width=372&height=559'
      },
      {
        id: '4',
        nombre: 'Keycap DSA 1U',
        stock: 10,
        categoria: 'keycaps',
        descripcion:'Keycap DSA MX de una unidad.',
        precio: 1000,
        rutaImagen: 'https://media.discordapp.net/attachments/1151022569395343400/1151026777821564949/image.png?width=372&height=559'
      },
      {
        id: '5',
        nombre: 'Keycap SA 1U',
        stock: 10,
        categoria: 'keycaps',
        descripcion:'Keycap SA MX de una unidad.',
        precio: 1500,
        rutaImagen: 'https://media.discordapp.net/attachments/1151022569395343400/1151028190840619038/image.png?width=372&height=559'
      },
      {
        id: '6',
        nombre: 'Keycap IBM M/F',
        stock: 10,
        categoria: 'keycaps',
        descripcion:'Keycap M/F IBM original de una unidad',
        precio: 3000,
        rutaImagen: 'https://media.discordapp.net/attachments/1151022569395343400/1151033895039537182/image.png?width=372&height=559'
      },
      {
        id: '7',
        nombre: 'Arduino Pro Micro',
        stock: 10,
        categoria: 'micros',
        descripcion:'Arduino Pro Micro (producto genérico, no original).',
        precio: 5000,
        rutaImagen: 'https://media.discordapp.net/attachments/1151022569395343400/1151029915869782126/image.png?width=372&height=559'
      },
      {
        id: '8',
        nombre: 'DMA Commonsense controlador capacitivo CYPRESS',
        stock: 10,
        categoria: 'micros',
        descripcion:'Placa CYPRESS con Commonsense instalado por nosotros.',
        precio: 9000,
        rutaImagen: 'https://media.discordapp.net/attachments/1151022569395343400/1151030116227493960/image.png?width=372&height=559'
      },
      {
        id: '9',
        nombre: 'xWhatsit controlador capacitivo 32U2',
        stock: 10,
        categoria: 'micros',
        descripcion:'Placa personalizada xWhatsit rev4 plug & play.',
        precio: 11000,
        rutaImagen: 'https://media.discordapp.net/attachments/1151022569395343400/1151030297014575124/image.png?width=372&height=559'
      }

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
  }

  export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find (prod => prod.id === productId))
        }, 500)
    })
  }

  export const getProductsByCategory = (productCat) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.filter (prod => prod.categoria === productCat))
        }, 500)
    })
  }