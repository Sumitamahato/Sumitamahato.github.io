const toggle = document.querySelector(".mobile-menu")
const header = document.querySelector(".navbar")

const  toggleleNavebar = () =>{
    header.classList.toggle("active")
}
toggle.addEventListener("click", ()=> {
    toggleleNavebar()
}
)


    function downloadresume(){
        window.open("https://drive.google.com/file/d/1OOUqgBVJK6Ge0tHOMRRD1vrfobEz3vms/view?usp=share_link","_blank")

    }
    // document.querySelector(".mobile-menu").addEventListener("click",()=>{
    //     document.querySelector(".mobile-menu").setAttribute("class","show")
    // })