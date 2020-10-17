//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  for(item of episodeList){
    let getResults=item ;
    let name=getResults.name;
    let season=getResults.season;
    let airdate= getResults.airdate;
    let imageLink =getResults.image.medium;
    let description=getResults.summary;
    let readMore=getResults._links.self.href;
    console.log(readMore);
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

    let getMoreInfo=document.createElement("button");

    let srcLinkInfo=document.createElement("a");
    srcLinkInfo.setAttribute("href", readMore);
    getMoreInfo.appendChild(srcLinkInfo);
    getMovie.appendChild(getMoreInfo);

    let stripe=document.createElement("hr");
    getMovie.appendChild(stripe);
}}

   let inputResult=document.querySelector("#fname");
   let resultOfSearch=inputResult.value;
  
   inputResult.addEventListener("keypress", function (e, item){
    console.log(inputResult.value);
     if (e.key === 'Enter') {
     
     const allEpisodes = getAllEpisodes();
     let filtered = allEpisodes.filter((item)=>{ 
       if (item.name.includes(inputResult.value) || item.summary.includes(inputResult.value)){
          return true;
        }
       }
     )
     console.log(filtered);
     let getArticle=document.querySelector("#main-container");
     getArticle.innerHTML="";
     makePageForEpisodes(filtered);
    }
});   
 
let appearField=document.querySelector("#inputbtn");
appearField.addEventListener("click", getField);
function getField(){
  let searchField = document.querySelector("#fname");
  searchField.style.display="inline";
}
window.onload = setup;
