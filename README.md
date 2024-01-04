# Application
+ Framework : Express.Js
+ Architecture : REST API
+ ORM : Sequelize
+ RDBMS : PostgreSQL 16
+ Node Version : 20.10.0 LTS
+ Relationship : + [categories] one-to-many [products] && + [products] one-to-many [product_assets]

# Tools
+ esLint (AirB&B style)
+ dotEnv
+ nodemon

# Feature
+ CRUD Products
+ CRUD Assets
+ Read All Assets include Product
+ Read All Product include Category and Assets
+ CRUD Categories

# API
+ dokumentation at request.rest file (using REST Client)

# To-do list
1. Buat API untuk melakukan Create, Update, dan Delete data Produk. (done)
    
   **Optional :** Buat API untuk melakukan Create, Update dan Delete data Kategori. (done)
    
2. Buat API untuk melakukan Create, Update, dan Delete data Asset Produk. (done)
3. Buat API untuk mendapatkan seluruh Data Produk beserta kategori asset-assetnya. (done)
    
    **Optional :** Berikan parameter pada endpoint untuk melakukan sorting berdasarkan harga produk.
    
4. Buat API untuk mendapatkan seluruh Data Asset dan tampilkan nama Produk dari aset tersebut. (done)

> Gunakan Express.js dan library eloquent ORM untuk javascript (disarankan menggunakan Sequelize). (done)