<?php

$data = [
    [
        'nama' => "Kodrat Pamungkas",
        'gambar' => "logo.jpg",
    ],

    [
        'nama' => "Wahyu Pratama",
        'gambar' => "wahyu.jpg",
    ],

    [
        'nama' => "Muhammad Arif",
        'gambar' => "arif.jpg",
    ],

    [
        'nama' => "Putri Rahmawati",
        'gambar' => "putri.jpg",
    ],

    [
        'nama' => "Dinda Fatimah",
        'gambar' => "dinda.jpg",
    ],

    [
        'nama' => "Alex Septian",
        'gambar' => "alex.jpg",
    ],
    [
        'nama' => "Jhosua pasaribu",
        'gambar' => "jhosua.jpg",
    ],
]


?>



<html>
<head>
    <link rel="stylesheet" href="style.css">
    <title>Friends Recomendations</title>
</head>

<body>
    <div id="container">

        <nav>
            <div class="navigasi-bar">
                <span class="logo"><img src="img/logo.jpg" alt="" srcset=""></span>
                <span class="user">^ Kodrat</span>
                <div class="bar-nav">
                    <span class="">Daftar Teman</span>
                    <span>Friends Recomendations</span>
                </div>

            </div>            
        </nav>

        <section class="content">
            <?php foreach($data as $_data) :?>
                    <div class="box-frends">
                        <img src="img/<?php echo $_data["gambar"]; ?>" class="img-box" alt="">
                        <h3 class="name"><?php echo $_data["nama"]; ?></h3>
                        <div class="hapus">Hapus Pertemanan</div>
                    </div>
            <?php endforeach ?>
        
        </section>

        <section class="recommends">
            <?php foreach($data as $_data) :?>
                    <div class="box-content">
                        <img src="img/<?php echo $_data["gambar"]; ?>" class="img-box" alt="">
                        <h3 class="name"><?php echo $_data["nama"]; ?></h3>
                        <span class="tambah">Tambah Pertemanan</h4></span>
                    </div>
            <?php endforeach ?>

        </section>

        <footer>
            <div class="footer-box"></div>
        </footer>

    </div>



    <script src="sc.js"></script>
    <script src="array.js"></script>
</body>
</html>
