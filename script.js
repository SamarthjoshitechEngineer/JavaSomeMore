//
 //""https://i.pinimg.com/736x/64/8a/6c/648a6c2641c93468f6337de7076916de.jpg""https://cdn.wallpapersafari.com/83/97/ezUKlRj.webp""https://cdn.wallpapersafari.com/83/97/ezUKlRj.webp"
 // 
 let a=["https://i.pinimg.com/736x/64/8a/6c/648a6c2641c93468f6337de7076916de.jpg",
        "https://cdn.wallpapersafari.com/83/97/ezUKlRj.webp",
        "https://wallpapercave.com/wp/wp14827435.webp",
    "https://cdn.wallpapersafari.com/16/8/LNCGVnp.webp"];
let x=document.getElementById("main");
let s="";
for(let i=1;i<=9;i++){
     let c=Math.floor(Math.random()*5);
 s+=`<div class="card"><img src=${a[c]}></div>`;
}
x.innerHTML=s;
let y=document.getElementById("second");
let q="";
for(let i=1;i<=9;i++){
 q+=`<div class="card"><img src="https://cdn.wallpapersafari.com/83/97/ezUKlRj.webp"></div>`;
}
y.innerHTML=q;
let z=document.getElementById("third");
let p="";
for(let i=1;i<=9;i++){
    let t=Math.floor(Math.random()*5);
 p+=`<div class="card"><img src="https://wallpapercave.com/wp/wp14827435.webp"></div>`;
}
z.innerHTML=p;
let m=document.getElementById("four");
let r="";
for(let i=1;i<=9;i++){
 r+=`<div class="card"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b078b51d-69e4-497b-9f90-48e6521288cd/diepddg-3f1321f5-5d7c-4e12-a76c-5e255963c940.jpg/v1/fill/w_1280,h_732,q_75,strp/giant_pikachu_by_petetherock2002_diepddg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvYjA3OGI1MWQtNjllNC00OTdiLTlmOTAtNDhlNjUyMTI4OGNkXC9kaWVwZGRnLTNmMTMyMWY1LTVkN2MtNGUxMi1hNzZjLTVlMjU1OTYzYzk0MC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.h6VI4HItFXCkxYG7rhOQ5gHO60AnxYY2z_t9PV526sQ"></div>`;
}
m.innerHTML=r;