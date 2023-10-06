import AllProducts from '@/components/AllProducts';
import React from 'react';

export const metadata = {
     title: "All products page | Dashboard | Next Hero",
     description: "All products page | Dashboard | Next Hero",
   };
   

const AllProductsPage = () => {
     return (
          <div className='w-full mt-10'>
               <h2 className='my-5'>this is all products page</h2>
               <AllProducts></AllProducts>
          </div>
     );
};

export default AllProductsPage;