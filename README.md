
Nama game: Capit Cash
Packagename: com.altomedia.capitcash
Developer: ALTOMEDIA
Contact: altomediaindonesia@gmail.com 
========================================


GAME DESIGN DOCUMENT

CLAW MACHINE – PRIZE CATCHER

BAB 1 – KONSEP GAME

Nama Game

Claw Machine – Prize Catcher

Genre

- Arcade
- Casual
- Physics Simulation
- Collection Game

Platform

- Android
- Mode Portrait (9:16)

Target Pemain

- Anak-anak
- Remaja
- Dewasa
- Semua usia

Deskripsi

Game ini mensimulasikan mesin capit hadiah seperti yang ada di pusat permainan. Pemain menggunakan token untuk memainkan mesin, menggerakkan capit ke posisi yang diinginkan, kemudian menurunkan capit untuk mengambil hadiah. Hadiah yang berhasil diambil masuk ke koleksi pemain dan dapat dijual, ditukar, atau digunakan untuk membuka mesin baru.

Tujuan Utama

- Mengumpulkan hadiah.
- Melengkapi koleksi.
- Mendapatkan hadiah langka.
- Menyelesaikan misi.
- Meng-upgrade mesin.
- Membuka mesin baru.

---

BAB 2 – GAMEPLAY LOOP

Alur Permainan

Splash Screen

↓

Loading Asset

↓

Menu Utama

↓

Pilih Mesin

↓

Gunakan Token

↓

Mesin Aktif

↓

Pemain Menggerakkan Capit

↓

Tekan Tombol

↓

Capit Bergerak Turun

↓

Capit Menutup

↓

Capit Terangkat

↓

Capit Bergerak ke Area Pengeluaran

↓

Capit Membuka

↓

Hadiah Jatuh

↓

Perhitungan Hadiah

↓

Hadiah Masuk Inventori

↓

Reward Misi Diperiksa

↓

Main Lagi atau Keluar

Gameplay Inti

Setiap permainan hanya memerlukan waktu sekitar 15–30 detik agar ritmenya cepat dan membuat pemain ingin terus mencoba.

---

BAB 3 – TAMPILAN ANTARMUKA (UI)

Splash Screen

- Logo game
- Nama game
- Animasi lampu arcade
- Progress loading

Menu Utama

- Tombol Play
- Koleksi
- Inventori
- Toko
- Upgrade
- Misi
- Achievement
- Pengaturan

HUD Saat Bermain

Bagian atas:

- Token
- Coin
- Diamond
- Level pemain

Bagian tengah:

- Area mesin capit
- Hadiah
- Rel mesin
- Capit
- Lubang hadiah

Bagian bawah:

- Joystick kiri-kanan
- Tombol Drop
- Tombol Auto (opsional)
- Tombol Keluar

Popup

- Hadiah diperoleh
- Level naik
- Misi selesai
- Token habis
- Konfirmasi keluar

---

BAB 4 – SISTEM MESIN CAPIT

Komponen Mesin

- Kabin mesin
- Kaca depan
- Lampu LED
- Rel horizontal
- Motor penggerak
- Tali baja
- Capit tiga penjepit
- Area hadiah
- Lubang pengeluaran

Status Mesin

Idle

↓

Menunggu Token

↓

Aktif

↓

Capit Bergerak

↓

Turun

↓

Menjepit

↓

Naik

↓

Menuju Lubang

↓

Melepas Hadiah

↓

Reset

↓

Idle

Sistem Kredit

1 token = 1 kali bermain.

Jika token habis:

- Mesin terkunci.
- Tombol bermain dinonaktifkan.
- Pemain diarahkan ke toko atau menonton iklan (jika tersedia).

---

BAB 5 – SISTEM FISIKA DAN PERGERAKAN CAPIT

Pergerakan Capit

Capit bergerak:

- Kiri
- Kanan
- Turun
- Naik

Setelah tombol ditekan:

- Posisi horizontal terkunci.
- Capit hanya bergerak vertikal hingga selesai.

Animasi Capit

Idle

↓

Geser Horizontal

↓

Turun

↓

Capit Terbuka

↓

Capit Menutup

↓

Mengangkat Hadiah

↓

Bergerak ke Tengah

↓

Capit Membuka

↓

Hadiah Jatuh

↓

Capit Kembali ke Posisi Awal

Properti Fisika Hadiah

Setiap hadiah memiliki:

- Massa
- Ukuran
- Bentuk
- Titik berat
- Gesekan
- Pantulan
- Rotasi
- Gaya gravitasi

Properti Capit

- Kekuatan genggam
- Kecepatan turun
- Kecepatan naik
- Sudut bukaan capit
- Lebar bukaan
- Lama menjepit

Kondisi Berhasil

Hadiah dianggap berhasil jika:

- Terjepit dengan stabil.
- Tidak terlepas selama perjalanan.
- Berhasil dijatuhkan ke lubang pengeluaran.

Kondisi Gagal

Permainan dianggap gagal apabila:

- Capit tidak mengenai hadiah.
- Jepitan terlalu lemah.
- Hadiah terlepas saat diangkat.
- Hadiah jatuh kembali ke dalam mesin sebelum mencapai area pengeluaran.

Tingkat Kesulitan

Easy

- Capit lebih kuat.
- Hadiah tidak terlalu padat.
- Peluang menang tinggi.

Normal

- Keseimbangan antara kekuatan capit dan posisi hadiah.

Hard

- Jepitan lebih lemah.
- Hadiah bertumpuk.
- Banyak hadiah besar menghalangi hadiah kecil.
- Membutuhkan posisi capit yang sangat presisi.


GAME DESIGN DOCUMENT

CLAW MACHINE – PRIZE CATCHER

BAB 6 – SISTEM HADIAH DAN TINGKAT KELANGKAAN

Tujuan Sistem Hadiah

Hadiah merupakan objek utama yang diperebutkan pemain. Setiap hadiah memiliki nilai, ukuran, berat, dan tingkat kelangkaan yang berbeda sehingga setiap permainan terasa unik.

Kategori Hadiah

Boneka

- Teddy Bear
- Panda
- Kucing
- Anjing
- Kelinci
- Harimau
- Beruang
- Dino
- Unicorn
- Naga

Mainan

- Mobil
- Robot
- Pesawat
- Helikopter
- Tank
- Puzzle
- Rubik
- Action Figure
- Gundam
- Balok

Makanan

- Cokelat
- Permen
- Biskuit
- Keripik
- Snack
- Minuman
- Jelly
- Wafer

Hadiah Digital

- Coin
- Diamond
- Voucher
- Mystery Box
- Skin
- Tiket Premium

---

Tingkat Kelangkaan

Common

Uncommon

Rare

Epic

Legendary

Mythic

Ultimate

---

Contoh Peluang Muncul

Common : 45%

Uncommon : 25%

Rare : 15%

Epic : 8%

Legendary : 5%

Mythic : 1.8%

Ultimate : 0.2%

---

Data Hadiah

Setiap hadiah memiliki:

ID

Nama

Kategori

Ukuran

Berat

Harga jual

Kelangkaan

Model 2D

Thumbnail

Animasi

Suara

---

BAB 7 – SISTEM EKONOMI

Game menggunakan beberapa mata uang.

Token

Digunakan untuk bermain.

1 Token = 1 Kali Main

---

Coin

Digunakan untuk:

Upgrade

Membeli Token

Membeli Tema

Membeli Mesin

---

Diamond

Digunakan untuk:

Unlock Mesin Premium

Upgrade Instan

Membeli Skin

Mempercepat Progress

---

Ticket

Digunakan untuk Event.

---

Mystery Key

Digunakan membuka Mystery Machine.

---

Cara Mendapatkan Mata Uang

Login Harian

Menyelesaikan Misi

Achievement

Menjual Hadiah

Event

Lucky Spin

Menonton Iklan

Top Up

---

BAB 8 – SISTEM UPGRADE MESIN

Pemain dapat meningkatkan performa mesin.

Upgrade

Kekuatan Capit

Level 1–20

Semakin tinggi level semakin kuat menjepit.

---

Kecepatan Gerak

Mempercepat:

Gerak kanan

Gerak kiri

Turun

Naik

---

Panjang Tali

Semakin panjang semakin mudah menjangkau hadiah.

---

Akurasi

Mengurangi goyangan saat turun.

---

Lucky Bonus

Menambah peluang hadiah langka.

---

Auto Grab

Membantu menentukan posisi terbaik.

---

Premium Claw

Capit khusus dengan kekuatan lebih besar.

---

BAB 9 – INVENTORI DAN KOLEKSI

Semua hadiah tersimpan dalam inventori.

Menu Inventori

Grid Hadiah

Filter

Cari

Urutkan

Jual

Favorit

---

Detail Hadiah

Nama

Kategori

Kelangkaan

Harga

Tanggal Didapat

Jumlah

Status

---

Album Koleksi

Pemain dapat mengumpulkan seluruh seri hadiah.

Jika satu seri lengkap akan mendapat:

Coin

Diamond

Token

Skin

Badge

---

Gudang

Apabila inventori penuh:

Jual

Perbesar Gudang

Gunakan Diamond

---

BAB 10 – MISI DAN ACHIEVEMENT

Misi Harian

Main 3 kali.

Menang 1 hadiah.

Jual hadiah.

Upgrade mesin.

Login.

---

Misi Mingguan

Main 100 kali.

Dapatkan Rare.

Dapatkan Epic.

Dapatkan Legendary.

Naik Level.

---

Achievement

Kolektor Pemula

Mengambil 10 hadiah.

Kolektor Ahli

Mengambil 100 hadiah.

Master Claw

Mengambil 500 hadiah.

Legend Hunter

Mendapatkan Legendary pertama.

Ultimate Hunter

Mendapatkan hadiah Ultimate.

Millionaire

Mengumpulkan 1.000.000 Coin.

Upgrade Master

Semua upgrade mencapai level maksimum.

Collector King

Melengkapi seluruh koleksi hadiah.

Reward Achievement

Coin

Diamond

Token

Frame Profil

Avatar Eksklusif

Skin Mesin

Efek Animasi

Gelar (Title) yang dapat ditampilkan pada profil pemain.



GAME DESIGN DOCUMENT

CLAW MACHINE – PRIZE CATCHER

BAB 11 – LEVEL, MESIN, DAN TEMA

Sistem Level Pemain

Pemain memperoleh Experience (EXP) setiap selesai bermain, baik menang maupun kalah.

Sumber EXP

- Bermain
- Mendapatkan hadiah
- Menyelesaikan misi
- Achievement
- Event

Contoh Level

Level 1 : 0 EXP

Level 2 : 100 EXP

Level 3 : 250 EXP

Level 4 : 500 EXP

Level 5 : 900 EXP

Dan seterusnya dengan kebutuhan EXP yang semakin besar.

---

Unlock Mesin

Semakin tinggi level, semakin banyak mesin yang dapat dimainkan.

Mesin 1

Classic Claw

Hadiah:

- Boneka
- Mainan

---

Mesin 2

Candy Machine

Hadiah:

- Snack
- Permen
- Cokelat

---

Mesin 3

Robot Machine

Hadiah:

- Robot
- Mobil
- Pesawat

---

Mesin 4

Fantasy Machine

Hadiah:

- Unicorn
- Naga
- Monster
- Magic Box

---

Mesin 5

Golden Machine

Hadiah:

- Diamond
- Voucher
- Premium Box
- Legendary Item

---

Tema Mesin

Tema dapat diubah tanpa memengaruhi gameplay.

Contoh tema:

- Arcade Classic
- Candy World
- Space Galaxy
- Underwater
- Jungle
- Halloween
- Christmas
- Sakura Jepang
- Cyberpunk
- Neon Future

Setiap tema mengubah:

- Background
- Lampu LED
- Musik
- Efek suara
- Dekorasi mesin
- Warna UI

---

BAB 12 – EFEK VISUAL DAN AUDIO

Efek Visual

Lampu LED

- Berkedip perlahan saat idle.
- Menyala lebih terang saat bermain.
- Berkedip cepat saat menang.

Refleksi Kaca

- Efek pantulan cahaya.
- Efek transparansi.
- Highlight pada sudut kaca.

Efek Capit

- Bayangan.
- Kilau logam.
- Animasi motor.
- Getaran kecil saat berhenti.

Efek Hadiah

- Pantulan cahaya.
- Rotasi saat jatuh.
- Debu ringan saat berbenturan.

Efek Kemenangan

- Konfeti.
- Kilauan bintang.
- Cahaya emas.
- Zoom kamera singkat.
- Animasi tulisan "Congratulations!"

---

Efek Audio

Musik

- Musik arcade ceria.
- Loop tanpa jeda.
- Volume dapat diatur.

Efek Suara

- Koin masuk.
- Tombol ditekan.
- Motor rel bergerak.
- Motor tali turun.
- Capit membuka.
- Capit menutup.
- Hadiah terbentur.
- Hadiah jatuh.
- Kemenangan.
- Level naik.
- Misi selesai.

---

BAB 13 – AI MESIN DAN PELUANG MENANG

Konsep AI

AI mengatur perilaku mesin agar permainan terasa realistis seperti mesin arcade sungguhan.

AI tidak mengatur hadiah secara langsung, tetapi memengaruhi kekuatan capit dan peluang keberhasilan.

---

Faktor yang Dihitung

- Berat hadiah.
- Posisi hadiah.
- Sudut capit.
- Luas jepitan.
- Upgrade pemain.
- Tingkat keberuntungan.
- Tingkat kesulitan mesin.

---

Contoh Perilaku

Percobaan 1–5

- Capit normal.
- Peluang menang rendah.

Percobaan 6–10

- Capit sedikit lebih kuat.

Percobaan berikutnya

- Peluang menang meningkat secara bertahap.

Catatan: Sistem ini harus tetap adil dan transparan. Pada mode tertentu, peluang dapat ditampilkan kepada pemain.

---

Faktor Keberhasilan

- Posisi capit tepat di tengah hadiah.
- Hadiah tidak terhalang.
- Berat sesuai kemampuan capit.
- Jepitan stabil.
- Tidak terbentur hadiah lain saat diangkat.

---

Faktor Kegagalan

- Jepitan mengenai tepi hadiah.
- Hadiah terlalu berat.
- Hadiah tersangkut.
- Sudut jepitan tidak seimbang.
- Hadiah terlepas saat perjalanan menuju lubang pengeluaran.

---

BAB 14 – SISTEM PENYIMPANAN DATA

Semua progres pemain disimpan secara otomatis.

Data yang Disimpan

- Nama pemain.
- Level.
- EXP.
- Coin.
- Diamond.
- Token.
- Inventori.
- Koleksi.
- Mesin yang terbuka.
- Tema yang dimiliki.
- Upgrade mesin.
- Pengaturan audio.
- Pengaturan grafis.
- Statistik permainan.
- Riwayat hadiah.
- Achievement.
- Misi harian.
- Misi mingguan.

---

Statistik

- Total permainan.
- Total kemenangan.
- Total kekalahan.
- Hadiah Common.
- Hadiah Rare.
- Hadiah Epic.
- Hadiah Legendary.
- Akurasi capit.
- Persentase kemenangan.
- Total waktu bermain.

---

Save System

- Auto Save.
- Save saat keluar.
- Save setelah mendapatkan hadiah.
- Save setelah upgrade.
- Save setelah menyelesaikan misi.

---

BAB 15 – ARSITEKTUR PROYEK ANDROID STUDIO

Struktur Modul

UI Module

Mengelola:

- Menu utama.
- HUD.
- Popup.
- Inventori.
- Toko.
- Pengaturan.

---

Game Module

Mengelola:

- Gameplay.
- Status permainan.
- Skor.
- Token.
- Perhitungan hadiah.

---

Claw Controller

Mengatur:

- Gerakan horizontal.
- Gerakan vertikal.
- Animasi buka/tutup capit.
- Posisi awal capit.

---

Physics Module

Mengatur:

- Gravitasi.
- Tabrakan.
- Gesekan.
- Massa hadiah.
- Rotasi objek.

---

Prize Module

Mengelola:

- Daftar hadiah.
- Spawn hadiah.
- Kelangkaan.
- Nilai hadiah.
- Inventori.

---

Economy Module

Mengatur:

- Coin.
- Diamond.
- Token.
- Harga item.
- Upgrade.

---

Save Module

Mengatur:

- Penyimpanan lokal.
- Sinkronisasi cloud (opsional).
- Backup data.

---

Audio Module

Mengelola:

- Musik.
- Efek suara.
- Volume.
- Getaran.

---

Animation Module

Mengatur:

- Animasi capit.
- Animasi hadiah.
- Efek kemenangan.
- Efek UI.
- Transisi antar layar.

Seluruh modul dibuat terpisah agar mudah dipelihara, dikembangkan, dan ditambahkan fitur baru seperti event musiman, mesin baru, atau mode permainan tambahan tanpa mengubah struktur inti aplikasi.


GAME DESIGN DOCUMENT

CLAW MACHINE – PRIZE CATCHER

BAB 16 – STRUKTUR FOLDER DAN ASSET

Struktur Folder

app/
│
├── assets/
│   ├── audio/
│   ├── fonts/
│   ├── animation/
│   ├── particles/
│   ├── localization/
│   └── config/
│
├── res/
│   ├── drawable/
│   ├── mipmap/
│   ├── layout/
│   ├── values/
│   ├── anim/
│   ├── animator/
│   ├── menu/
│   └── raw/
│
├── java/
│   ├── activity/
│   ├── adapter/
│   ├── controller/
│   ├── manager/
│   ├── physics/
│   ├── model/
│   ├── database/
│   ├── helper/
│   └── utils/

---

Asset Gambar

- Splash Screen
- Logo
- Background Menu
- Background Mesin
- Mesin Capit
- Rel Mesin
- Tali
- Capit
- Lampu LED
- Bayangan
- Tombol UI
- Ikon Coin
- Ikon Diamond
- Ikon Token
- Ikon Inventori
- Ikon Misi
- Ikon Achievement
- Ikon Pengaturan

---

Asset Audio

- Musik Menu
- Musik Gameplay
- Suara Koin
- Suara Motor
- Suara Capit
- Suara Hadiah
- Suara Menang
- Suara Kalah
- Suara Tombol
- Suara Level Up

---

BAB 17 – DAFTAR ASSET LENGKAP

Asset Mesin

- Kabin Mesin
- Kaca
- Rel Horizontal
- Motor
- Tali
- Capit 3 Jari
- Lubang Hadiah
- Lampu LED
- Panel Kontrol

---

Asset Hadiah

Kategori Boneka

- Teddy
- Panda
- Kucing
- Kelinci
- Beruang
- Unicorn
- Dino
- Naga

Kategori Mainan

- Mobil
- Robot
- Pesawat
- Helikopter
- Bola
- Puzzle
- Action Figure

Kategori Premium

- Mystery Box
- Diamond Box
- Golden Box
- Voucher Box

---

Asset UI

- Tombol Play
- Tombol Shop
- Tombol Upgrade
- Tombol Koleksi
- Tombol Inventori
- Tombol Keluar
- Popup
- Progress Bar
- Slider
- Scroll
- Panel

---

Asset Efek

- Confetti
- Sparkle
- Smoke
- Glow
- Shadow
- Explosion Light
- Coin Burst
- Diamond Shine

---

BAB 18 – FLOWCHART DAN STATE MACHINE

State Mesin

Idle

↓

Insert Token

↓

Ready

↓

Move Horizontal

↓

Drop Claw

↓

Close Claw

↓

Lift Claw

↓

Move To Prize Exit

↓

Release Prize

↓

Prize Check

↓

Reward

↓

Reset

↓

Idle

---

State Hadiah

Spawn

↓

Diam

↓

Tertabrak

↓

Terjepit

↓

Terangkat

↓

Terlepas

↓

Masuk Lubang

↓

Masuk Inventori

---

State Pemain

Login

↓

Menu

↓

Pilih Mesin

↓

Main

↓

Reward

↓

Upgrade

↓

Main Lagi

↓

Logout

---

BAB 19 – MONETISASI DAN LIVE OPS

Monetisasi

Iklan

Rewarded Ads

- Tambahan Token
- Coin
- Diamond
- Kesempatan bermain lagi

Interstitial Ads

- Ditampilkan setelah beberapa permainan (opsional dan tidak mengganggu).

Banner Ads

- Hanya di menu, tidak saat gameplay.

---

Pembelian Dalam Aplikasi

Paket Coin

Paket Diamond

Paket Token

Starter Pack

Premium Pass

Exclusive Machine

Exclusive Theme

---

Event Musiman

Halloween

Natal

Tahun Baru

Imlek

Ramadan

Kemerdekaan

Event Kolaborasi

Setiap event memiliki:

- Hadiah eksklusif
- Mesin khusus
- Tema khusus
- Misi khusus

---

Login Harian

Hari 1
Coin

Hari 2
Token

Hari 3
Diamond

Hari 4
Mystery Box

Hari 5
Rare Prize

Hari 6
Epic Prize

Hari 7
Legendary Box

---

BAB 20 – MASTER PROMPT GENERATE GAME

Buat sebuah game Android portrait berjudul Claw Machine – Prize Catcher dengan gaya visual 2D HD yang cerah, modern, dan menarik. Gameplay mensimulasikan mesin capit arcade yang realistis menggunakan sistem fisika. Pemain menggunakan token untuk menggerakkan capit ke kiri dan kanan, kemudian menekan tombol untuk menurunkan capit, menjepit hadiah, mengangkatnya, membawanya ke area pengeluaran, dan menjatuhkannya ke kotak hadiah.

Sediakan berbagai kategori hadiah seperti boneka, mainan, snack, voucher, coin, diamond, dan mystery box dengan tingkat kelangkaan mulai dari Common, Uncommon, Rare, Epic, Legendary, Mythic, hingga Ultimate. Setiap hadiah memiliki ukuran, berat, bentuk, dan nilai yang berbeda sehingga interaksi fisika terasa alami.

Tambahkan sistem level pemain, pengalaman (EXP), misi harian dan mingguan, achievement, koleksi, inventori, upgrade kekuatan capit, peningkatan akurasi, peningkatan kecepatan, serta berbagai tema mesin yang dapat dibuka. Gunakan efek visual seperti lampu LED, refleksi kaca, partikel konfeti, kilau hadiah, dan animasi halus. Sertakan musik bergaya arcade dan efek suara yang responsif.

Bangun proyek dengan arsitektur modular yang memisahkan UI, gameplay, kontrol capit, sistem fisika, ekonomi, inventori, audio, animasi, dan penyimpanan data. Optimalkan performa agar berjalan lancar pada perangkat Android kelas menengah ke bawah, dengan sistem penyimpanan lokal dan opsi sinkronisasi cloud di masa depan. Desain antarmuka harus sederhana, mudah dipahami, responsif terhadap berbagai ukuran layar, dan memberikan pengalaman bermain yang adiktif serta memuaskan.




