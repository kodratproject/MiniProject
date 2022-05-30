const tag = document.createElement('span');
const text = document.createTextNode('Tidak Di Temukan DATA');

tag.appendChild(text);


let A =[0,1,0,0,0,0,0];
let B =[1,0,1,1,0,0,0];
let C =[0,1,0,0,0,0,1];
let D =[0,1,0,0,1,0,1];
let E =[0,0,0,1,0,1,0];
let F =[0,0,0,0,1,0,1];
let G =[0,0,1,1,0,1,0];



for (let k = 0; k < A.length; k++) {
    if (A[k] !== 1) {
        daftar_teman[k].style.display = 'none';
    }else{
        if(k == 1){
            for (let y = 0; y < B.length; y++) {
                if (B[y] == 1 && B[y] !== A[y] ) {
                    tambah_teman[y].style.display = 'block';
                    tambah_teman[0].style.display = 'none';
                    tambah_teman[1].style.display = 'none';
                }else{
                    if(B[y] == A[y]){
                        tambah_teman[k].style.display = 'none';
                        tambah_teman[y].style.display = 'none';
                    }

                }
            }
        }
        else if(k == 2){
            for (let y = 0; y < C.length; y++) {
                if (C[y] == 1 && C[y] !== A[y]) {
                    tambah_teman[y].style.display = 'block';
                    tambah_teman[0].style.display = 'none';
                    tambah_teman[2].style.display = 'none';
                }
            }
        }else if(k == 3){
            for (let y = 0; y < D.length; y++) {
                if (D[y] == 1 && D[y] !== A[y]) {
                    tambah_teman[y].style.display = 'block';
                    tambah_teman[3].style.display = 'none';
                    tambah_teman[0].style.display = 'none';
                }else{
                }
            }
        }
        else if(k == 4){
            for (let y = 0; y < E.length; y++) {
                if (E[y] == 1 && E[y] !== A[y]) {
                    tambah_teman[y].style.display = 'block';
                    tambah_teman[4].style.display ='none';
                    tambah_teman[0].style.display = 'none';
                }
            }
          }else if(k == 5){
            for (let y = 0; y < F.length; y++) {
                if (F[y] == 1 && F[y] !== A[y]) {
                    tambah_teman[y].style.display = 'block';
                    tambah_teman[5].style.display = 'none';
                    tambah_teman[0].style.display = 'none';
                }
            }
        }else if(k == 6){
            for (let y = 0; y < G.length; y++) {
                if (G[y] == 1 && G[y] !== A[y]) {
                    tambah_teman[y].style.display = 'block';
                    tambah_teman[0].style.display = 'none';
                    tambah_teman[6].style.display = 'none';
                }
            }
        }else{
        }
        
    }
    
}

if (A[1] == 1 && A[2] == 1 && A[3] == 1 && A[4] == 1 && A[5] == 1 && A[6] == 1) {
     recom.appendChild(tag);
    tag.style.fontSize ='30px';
    tag.style.marginLeft ='200px';
}

    //CONSOLE 
    console.log('A  : ',A[0],A[1],A[2],A[3],A[4],A[5],A[6]);
    console.log('B  : ',B[0],B[1],B[2],B[3],B[4],B[5],B[6]);
    console.log('C  : ',C[0],C[1],C[2],C[3],C[4],C[5],C[6]);
    console.log('D  : ',D[0],D[1],D[2],D[3],D[4],D[5],D[6]);
    console.log('E  : ',E[0],E[1],E[2],E[3],E[4],E[5],E[6]);
    console.log('F  : ',F[0],F[1],F[2],F[3],F[4],F[5],F[6]);
    console.log('G  : ',G[0],G[1],G[2],G[3],G[4],G[5],G[6]);
