const MoviesUrl="https://ngmovies.herokuapp.com/api/getMovies";

function showMovies(){
    $.ajax({
        url:MoviesUrl,
        type:'GET',
        dataType:'json',
        success:function(data){
            for(i=0;i<data.length;i++){
                $('#moviesList').append(data[i].name+"</br>")
            }
        }
    })
}
