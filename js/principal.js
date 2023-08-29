let videoInfo = async()=>{
    let pet = await fetch("../storage/Channel-details.json")
    let peticion = await fetch("../storage/videos.json");
    let inf = await peticion.json();
    let perfi = await pet.json();
    let seleccion = document.querySelector("#container-list");
    seleccion.insertAdjacentHTML("beforeend",/*html*/`
    ${inf.contents.map((val)=>/*html*/`
        <div  class="vid-list">
        <a href="play-video.html"><img src="${val.video.thumbnails[0].url}" class="thumbnai1"></a>
            <div class="flex-div">
                <img src="${perfi.avatar[0].url}">
                <div class="vid-info">
                    <a href="play-video.html">${val.video.title}</a>
                    <p>${perfi.title}</p>
                    <p>${val.video.stats.views} views &bull; ${val.video.publishedTimeText}</p>
                </div>
            </div>
        </div>
        `)}
`)}


// let videoLateral = async()=>{
//     let pet = await fetch("../storage/Channel-details.json");
//     let peticion = await fetch("../storage/Channel Search.json");
//     let inf = await peticion.json();
//     let perfi = await pet.json();
//     let seleccion = document.querySelector("#side-video");
//     seleccion.insertAdjacentHTML("beforeend",/*html*/`
//     ${inf.contents.map((value)=>/*html*/`
//         <div id="side-video" class="side-video-list">
//         <a href="" class="small-thumbnail"><img src="${value.video.thumbnails[2].url}"></a>                
//         <div class="vid-info">
//             <a href="">Best video in th word</a>
//             <p>Eze pis</p>
//             <p>${value.video.stats.views} views &bull; ${value.video.publishedTimeText}</p>
//         </div>
//         </div>
//     `)}    
// `)}
videoInfo();
/*videoLateral();*/