import React from 'react';
import {Link} from 'react-router-dom';

class ProfileFavorites extends React.Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);




  }

  handleSubmit(id){

    return(e => {
      e.preventDefault();
      this.props.deleteFavorite(id);
    })

  }

  componentWillMount(){

  }

  render(){
    // const {my_restaurants} = this.props;
    // if(Object.keys(my_restaurants).length === 0){
    //   return null;
    // }
    var rest_key_arr = [];

    for(let x = 0; x < this.props.my_favorites.length ;x++){
      if(rest_key_arr.includes(this.props.my_favorites[x].restaurant_id) !== true){
        rest_key_arr.push(this.props.my_favorites[x].restaurant_id);
      }
    }


    var my_favorite_restaurants = [];

    for(let x = 0; x < rest_key_arr.length; x++){
      my_favorite_restaurants.push(this.props.restaurantsIndex[rest_key_arr[x]]);
    }

    for(let x = 0; x < my_favorite_restaurants.length; x++){
      my_favorite_restaurants[x].fav_key = this.props.my_favorites[x].id;

    }



    return(
      <div>

        <ul className = "profile-restaurants-index-ul">
          {my_favorite_restaurants.map( (rest) => (

            <li className = "profile-restaurants-index-li"
            key = {rest.id}>

                    <div className = "profile-restaurants-index-div-left">

                      <Link to={`/restaurants/${rest.id}`}>
                        <img className = "thumbnail" src={rest.thumbnail}/>
                      </Link>

                        <h2> {rest.name} </h2>
                        <h3> {rest.address} </h3>
                        <h3> {rest.city} , {rest.state}</h3>

                    </div>

                    <div className = "profile-restaurants-index-div-right">
                      <button type="button" onClick={this.handleSubmit(rest.fav_key)}> Delete </button>
                      <br/>
                      <br/>

                    </div>


            </li>

          ))}

        </ul>


      </div>
    );





  }
}

// const {my_restaurants} = this.props;
// if(Object.keys(my_restaurants).length === 0){
//   return null;
// }
//
// return(
//   <div>
//
//     <ul className = "profile-restaurants-index-ul">
//       {my_restaurants.map( (rest) => (
//
//         <li className = "profile-restaurants-index-li"
//         key = {rest.id}>
//
//                 <div className = "profile-restaurants-index-div-left">
//
//                   <Link to={`/restaurants/${rest.id}`}>
//                     <img className = "thumbnail" src={rest.thumbnail}/>
//                   </Link>
//
//                     <h2> {rest.name} </h2>
//                     <h2> {rest.address} </h2>
//                     <h2> {rest.city} , {rest.state}</h2>
//
//                 </div>
//
//                 <div className = "profile-restaurants-index-div-right">
//                   <button type="button" onClick={this.handleSubmit(rest.id)}> Delete </button>
//                   <br/>
//                   <br/>
//
//                 </div>
//
//
//         </li>
//
//       ))}
//
//     </ul>
//
//
//   </div>
// );
// }

export default ProfileFavorites;
