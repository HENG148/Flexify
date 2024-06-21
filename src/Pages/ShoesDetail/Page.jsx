import React, { useState, useEffect } from 'react'
import MainHeader from '../../components/Header/MainHeader'
import MainOption from '../../components/Header/SubHead/DropMenu/Page'
import { Breadcrumbs } from '../../components/Breadcrumb'
import { Product } from '../../data/Product'
import { useParams } from 'react-router-dom'

const ShoesDetail = () => {

  const [shoesDetail, setShoesDetail] = useState([]);
  const { id } = useParams();
  console.log(id)
  useEffect(() => {
    setShoesDetail(Product)
  }, []);
  

  const recommendData = shoesDetail.find(type => type.recommend)?.recommend || [];
  console.log(recommendData)
  const recommentDataSort = recommendData.find((shose)=> shose.id === id)
  console.log(recommentDataSort)

  return ( 
    <div></div>
  );
}
 
export default ShoesDetail;

// export default function ShoesDetail() {

//   const { id } = useParams();
//   const shoes = Recommend[id];

//   return (
//     <>
//       <div>
//         <div>
//           <MainHeader />
//           <MainOption />
//         </div>
//         <div>
//           <Breadcrumbs />
//         </div>

//         <div>
//           <p>{shoes.low}</p>
//         </div>
//       </div>
//     </>
//   )
// }
