// install sequelize modul
const Sequelize = require('sequelize');
// connect with database "CoffeeShopDB"
const sequelize = new Sequelize('mysql://root@localhost:3306/coffeeshopdb');
// create tabelle / modelle Shops
class Shop extends Sequelize.Model{}
Shop.init({
    shopName: Sequelize.STRING,
    openAt: Sequelize.TIME,
    closeAt: Sequelize.TIME
    }, {sequelize, modelName:'shop'}
);
// create table coffee
class Coffee extends Sequelize.Model{}
Coffee.init({
    coffeeName: Sequelize.STRING,
    price: Sequelize.DOUBLE
},{sequelize, modelName:'coffee'});

// create assiciation: 1 Shop has n Coffee, 1 Coffee belongs to 1 Shop
Shop.hasMany(Coffee);
Coffee.belongsTo(Shop);     // Fremdschlüssel wird automatisch hinzugefuegt

// .sync: send information into DB
sequelize.sync({force: true}).then(()=>{
    let datatransfer = async()=>{
        const coffeeHouse = await Shop.create({
            // also give value of id
            id: 6,
            shopName: 'Manhatten Mug',
            openAt: '09:00',
            closeAt: '18:00'
        });
        // take foreign key from Shop table
        const coffee01 = await Coffee.create({
            id: 1,
            coffeeName: 'Cappuccino',
            price: 2.50
        }).then(coffee=>{
            coffee.setShop(coffeeHouse);
        });
        const coffee02 = await Coffee.create({
            id: 2,
            coffeeName: 'Late Macchiato',
            price: 3.25
        }).then(coffee=>{
            coffee.setShop(coffeeHouse);
        });
        const coffee03 = await Coffee.create({
            id: 3,
            coffeeName: 'Espresso',
            price: 3.00
        }).then(coffee=>{
            coffee.setShop(coffeeHouse);
        });

        // close DB connection
        sequelize.close();
    };
    datatransfer();
});