import React from 'react';

const Product = {
  id: 'MUG-ART',
  name: ' Mug with Art',
  price: 25,
  description: `
  Cool mug with JPB Art

`,
  category: 'Mugs',
  sources: [
    'https://www.vistaprint.ca/pdc/en-ca?workId=f3679fe5-6466-4925-8f1a-7a4e458d3997',    
  ],
  images: [{
    image:'mug-front.png',
    alt: 'Mug with Art - Front'
  },
 {
    image:'mug-back.png',
    alt: 'Mug with Art - Back'
  },
]

};

export default Product;