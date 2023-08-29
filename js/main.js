let videoLateral = async()=>{
    let pet = await fetch("../storage/Channel-details.json");
    let peticion = await fetch("../storage/Channel Search.json");
    let inf = await peticion.json();
    let perfi = await pet.json();
    let seleccion = document.querySelector("#side-video");
    seleccion.insertAdjacentHTML("beforeend",/*html*/`
    ${inf.contents.map((value)=>/*html*/`
        <div id="side-video" class="side-video-list">
        <a href="" class="small-thumbnail"><img src="${value.video.thumbnails[2].url}"></a>                
        <div class="vid-info">
        <a href="">Best video in th word</a>
            <p>${perfi.title}</p>
            <p>${value.video.stats.views} views &bull; ${value.video.publishedTimeText}</p>
    </div>
        </div>
`).join(" ")}    
`)}

videoLateral();