
let initialState={
	myFavorites:[]
};


export default function Reducer(state=initialState,action){
	console.log(state);
	switch (action){

case 'addFavorite':
	let newFavorite=state.myFavorites.push(action.payload) ;
	return{newFavorite}

case 'deleteFavorite':
	let newState=state.myFavorites.filter(elemento=>elemento.id!=action.payload);
	return{myFavorites: newState};

default:
	return{...state};


	}


}