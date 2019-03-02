const GITHUB_URL = 'https://api.github.com/search/repositories';

function getDataFromApi(searchTerm,callback){
    const setting={
        url:GITHUB_URL,
        type:'GET',
        dataType:'json',
        data:{
            q:`${searchTerm}`
        },
        success:callback
    };
    $.ajax(setting);
}


function displayGithubSearchData(data){
    const result = data.items[0];
    results=`
    <img src='${result.owner.avatar_url}'/>
    <h2>${result.owner.login}</h2>
    <h3>StarCount:<span class="glyphicon glyphicon-star"></span>${result.stargazers_count}</h3>
    <span>Watchers:${result.watchers}</span>

    `;
    $('.js-search-results').html(results);
}

function watchSubmit(){
    $('.js-search-from').submit(event => {
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        queryTarget.val("");
        getDataFromApi(query, displayGithubSearchData);
    })
}

$(watchSubmit());