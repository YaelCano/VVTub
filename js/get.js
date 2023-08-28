const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '219c9d8956msh59d5178ab85fbf9p1159e9jsn66a291f5d2e4',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};


export  const SearchAll = async(p1)=>{
    options.method = 'GET';
    const peticion = await fetch(`https://youtube138.p.rapidapi.com/channel/search/?id=UC8fkwsjcI_MhralEX1g4OBw&q=${p1}&hl=en&gl=US`, options);
    const json = await peticion.json();
    let h = 0, cont = 0;
    let array = json.contents.map((val,id)=>{
        if(val.playlist) return undefined;
        cont++;
        if(cont<=10) h = 30*cont;

        return `<li><a href=""></a></li>`;
    })
    document.querySelector("#active").style.heigth =`${h}px`;
    document.querySelector("#SearchAll").innerHTML = null;
    Document.querySelector("#SearchAll").insertAdjacentHTML("beforeend", array.join(" "));
    
}