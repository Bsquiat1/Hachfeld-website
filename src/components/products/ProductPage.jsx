import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';


const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'Antiscalants(3)',
     
      
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4iEEBoDTAT7hyMxucdmGQWdXemaOln0YEg&usqp=CAU',
    },
    {
      id: 2,
      name: 'Chemical Dosing Pumps(2)',
     
     
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-RSJ4bY11b4rHGv4V2EPtqJOK--H6Jg6ow&usqp=CAU',
    },
    {
      id: 3,
      name: 'Lab Instruments(18)',
     
     
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG2_5VJc5Wy1MIjz0bb5kIsKKzNAIPopsAA&usqp=CAU',
    },
    {
      id: 4,
      name: 'Lab Meters And Probes(13)',
     
     
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETdbeg5xFiTid11LX0Qx9H5_1ygWkPaz-1A&usqp=CAU',
    },
    {
      id: 5,
      name: 'Online Analyzers And Sensors(4)',
     
     
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_nIFFh6ehRTeaNMixnZXZaqwfENmXxPOLA&usqp=CAU',
    },
    
    
   
  ];

  return (
    <div className="bg-gray-100 mt-16 ">
      <div className='flex-grow'>
      <div className="flex flex-col sm:flex-row ml-80 mr-96">
        <div className="sm:w-1/3 p-4  ml-4 sm:ml-0">
          <div className="mb-10 bg-gray-200 p-6 flex justify-center">
            <Link to="/contact"><button className="bg-blue-800 text-white text-2xl px-14 py-7 hover:bg-blue-700">
              Get a Free Quote
            </button></Link>
          </div>
          <div className="bg-gray-200 px-16 py-24">
            <h2 className="text-4xl font-bold mb-4 ">Contact Us</h2>
            <p className="text-black text-xl">Office 308, Lunga Lunga</p>
            <p className="text-black text-xl">Square,</p>
            <p className="text-xl mb-4">Industrial Area,</p>
            <p className="text-xl">+254 750 520 179</p>
            <p className="text-xl mb-4">+254 717 520 179</p>
            <p className="text-xl">info@hachfeld.co.ke</p>
            <p className="text-xl">sales@hachfeld.co.ke</p>
            <p className="text-xl">www.hachfeld.co.ke</p>
          </div>
        </div>
        <div className="sm:w-2/3 p-4">
          <h2 className="text-6xl font-bold">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6">
              <Link to={`/product/${product.id}`}>
                <img src={product.imageUrl} alt={product.name} className="w-full object-cover mb-4 h-96" />
                <h3 className="text-xl font-semibold">{product.name}</h3>
              </Link>
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
