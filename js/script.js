const c_form = document.getElementById('c-form');
c_form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const data = new FormData(c_form)
    const actualData = {}
    data.forEach((value, key)=>{
        actualData[key]  = value
    })
    const stringData = JSON.stringify(actualData)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8000/api/addmember', true)
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.send(stringData)

    xhr.onload = ()=>{
        if(xhr.status ==200){
            c_form.reset();
            console.log(xhr.responseText);
        }else{
            console.log(xhr.statusText);
        }
    }
    console.log(stringData);
})

