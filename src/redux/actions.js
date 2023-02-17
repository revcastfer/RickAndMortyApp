function addFavorite(elemento){
	return{type:addFavorite, payload:elemento}
};


function deleteFavorite(id){
	return{type:deleteFavorite, payload:id}
};

