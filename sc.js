const navigasi     = document.querySelectorAll('.bar-nav span');
const cons         = document.querySelector('.content')
const recom        = document.querySelector('.recommends');
const daftar_teman = document.querySelectorAll('.box-frends');
const tambah_teman = document.querySelectorAll('.box-content');
const hapus        = document.querySelectorAll('.hapus');
const tambah       = document.querySelectorAll('.tambah');



navigasi[0].addEventListener('click',function(){
    cons.style.display = 'block';
    recom.style.display ='none';
});

navigasi[1].addEventListener('click',function(){
    cons.style.display = 'none';
    recom.style.display ='block';
});


for (let i = 0; i < hapus.length; i++) {
    hapus[i].addEventListener('click',function(){
                
        daftar_teman[i].style.display ='none';
    })
}


for (let i = 0; i < hapus.length; i++) {
    tambah[i].addEventListener('click',function(){
        tambah_teman[i].style.display ='none';
          
        A[i] = 1;
          
        if (i == 1) {
            B[0] =1;   
        }else if (i == 2) {
            C[0] =1;   
        }else if (i == 3) {
            D[0] =1;   
        }else if (i == 4) {
            E[0] =1;   
        }else if (i == 5) {
            F[0] =1;   
        }else if (i == 6) {
            G[0] =1;   
        }

    })
}



















