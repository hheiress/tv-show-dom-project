//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  console.log(episodeList);
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  for(item of episodeList){
    let getResults=item ;
    let name=getResults.name;
    let season=getResults.season;
    let airdate= getResults.airdate;
    let imageLink =getResults.image.medium;
    let description=getResults.summary;
    
    let getArticle=document.querySelector("#main-container");
    let getMovie=document.createElement("div");
    getMovie.className="article"
    getArticle.appendChild(getMovie);
    let setName=document.createElement("h3");
    getMovie.appendChild(setName);
    setName.className="name-movie";
    setName.innerHTML=name;
    let getSeason=document.createElement("p");
    getSeason.innerHTML=season + " season";
    getSeason.className="season";
    getMovie.appendChild(getSeason);
    getSeason.className="season";
 
    let getAirDate=document.createElement("p");
    getAirDate.innerHTML=airdate;
    getMovie.appendChild(getAirDate);
    getAirDate.className="season";
    let setImage=document.createElement("img");
    setImage.setAttribute("src", imageLink)
    getMovie.appendChild(setImage);
    
    let getSummary=document.createElement("p");
    getSummary.innerHTML=description;
    getMovie.appendChild(getSummary);
    getSummary.className="description";

    let stripe=document.createElement("hr");
    getMovie.appendChild(stripe);
}}
    
window.onload = setup;
