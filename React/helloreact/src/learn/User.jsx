import { useState } from "react"
import Card from "./Card";

const User = () => {

  let [fruits] = useState(["apple", "mango", "banana", "pomegranate", "etc"]);


  // return (
  //   <div>
  //     {/* <ul>
  //         {
  //           fruits.map(fruit=><li>{fruit}</li>)
  //         }
  //       </ul> */}
  //     <div className="container mt-3 mb-3">
  //       <div className="row row-cols-1 row-cols-md-3 g-4">
  //         {
  //           fruits.map(fruit =>
  //             <div className="col">
  //               <div className="card h-100 border-5 border-dark">
  //                 <img src="https://hips.hearstapps.com/hmg-prod/images/pomegranate-1558625011.jpg" className="card-img-top" alt="..." height="200px" />
  //                 <div className="card-body">
  //                   <h5 className="card-title">{fruit}</h5>
  //                   <p className="card-text">{fruit} is a very tasty fruit</p>
  //                 </div>
  //               </div>
  //             </div>)
  //         }
  //       </div>
  //     </div>
  //   </div>
  // )


  return (
    <div className="container mt-3 mb-3">
      <div className="row row-cols-1 row-cols-md-6 g-4">
      {
        fruits.map((fruit,i)=><Card  fal={fruit}  key={i} />)
      }
      </div>
      </div>
  );
}

export default User
