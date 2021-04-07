fetch("https://api.mocki.io/v1/b043df5a").then(response=>response.json()).
then(data=>
    {
        for(let i=0;i<data.length;i++)
        document.write("city:"+data[i].city +"name:"+data[i].name+"<br/>")}).catch(error=>console.log(error));