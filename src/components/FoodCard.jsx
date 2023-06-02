import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthContextProvider';
import { json } from 'react-router-dom';
import Swal from 'sweetalert2';

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    const {user} = useContext(AuthContex)

    const handleAddToCard = item =>{
      
      if(user){
        fetch('http://localhost:5000/cards', {
          method : 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(item)
        }).then(res => res.json())
        .then(data => console.log(data))

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Item has been added to card ',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Your must login',
          showConfirmButton: false,
          timer: 1500
        })
      }



    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
              <button onClick={() => handleAddToCard(item)} className="btn btn-primary">Add to card</button>
            </div>
          </div>
        </div>
    );
};

export default FoodCard;