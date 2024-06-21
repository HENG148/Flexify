
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  let breadcrumbPath = '';
  
  return (
    <div className="breadcrumbs">
      <Link to='/'>Home</Link>
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        console.log(pathnames, breadcrumbPath);
        
        return isLast ? (
          <span key={breadcrumbPath}>/ {name}</span>
        ) : (
          <span key={breadcrumbPath}>
            {" "}
            / <Link to={breadcrumbPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  )
}
// import React from "react";
// import { Link, useLocation } from 'react-router-dom'

// export const Breadcrumb = () => {
//   const location = useLocation();

//   let crumbLink = '';
//   const crumbPath = location.pathname.split('/')
//     .filter((path) => path !== ''
//       .map((crumb, idx, array) => {
      
//         return (
//           <React.Fragment key={crumb}>
//             <Link to={crumbLink}>
//               {crumb}
//             </Link>
//             {idx < array.length - 1 && <span> /</span>}
//           </React.Fragment>
//         )
//       }))
  
//   return (
//     <>
//       <div>
//         {crumbPath}
//       </div>
//     </>
//   )
// }