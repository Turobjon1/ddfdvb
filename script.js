let btn = document.getElementById('buttn')

let parol = document.getElementById('parol')


let username = document.getElementById('username')




btn.addEventListener('click', ()=>{
    if (parol.value ==  1234 && username.value == 5678  )  {
        alert('siz spacegga kirdingiz')
    }else{
        alert('parol yoki id xato')
    }     
})