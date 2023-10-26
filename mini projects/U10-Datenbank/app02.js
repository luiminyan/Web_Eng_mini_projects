// install the sequelize module
const Sequelize =  require('sequelize');
// create sequelize object, to connect with 'ConsultingDB'
const sequelize = new Sequelize('mysql://root:@localhost:3306/consultingdb');
// create tables
// table: Firmen / Modell: Firm
class Firm extends Sequelize.Model{}
Firm.init({
    titel: Sequelize.STRING
}, {sequelize, modelName: 'firm'});
// table Mitarbeiter
class Mitarbeiter extends Sequelize.Model{}
Mitarbeiter.init({
    vnname: Sequelize.STRING,
    beitritt: Sequelize.DATE
}, {sequelize, modelName:'mitarbeiter'});
// table projekten
class Projekt extends Sequelize.Model{}
Projekt.init({
    titel: Sequelize.STRING
}, {sequelize, modelName:'projekt'});
// table Mitarbeiter_zu_Projekt
class MitarbeiterProjektRelationship extends Sequelize.Model{}
MitarbeiterProjektRelationship.init({
    rolle: Sequelize.STRING
}, {sequelize, modelName:'mitarbeiter_projekt'});

// create association: one(Firm) to many(Mitarbeiter)
Firm.hasMany(Mitarbeiter);
Mitarbeiter.belongsTo(Firm);

// create association: many to many
Projekt.belongsToMany(Mitarbeiter, {through: MitarbeiterProjektRelationship});
Mitarbeiter.belongsToMany(Projekt, {through: MitarbeiterProjektRelationship});

sequelize.sync({force: true}).then(()=>{
    // define func.
    let datatransfer= async()=>{
        // add init data
        const firm01 = await Firm.create({
            id: 3,
            titel: 'Web-App Consulting Bochum'
        });
        const mitarbeiter01 = await Mitarbeiter.create({
            vnname: 'Michaela Lehr',
            beitritt: '20.10.1992'
        }).then(mitarbeiter=>{
            // create connection with Firm
            mitarbeiter.setFirm(firm01);
        });
        const mitarbeiter02 = await Mitarbeiter.create({
            vnname: 'Michael Wanyoike',
            beitritt: '02.05.2002'
        }).then(mitarbeiter=>{
            // create connection with Firm
            mitarbeiter.setFirm(firm01);
        });
        const mitarbeiter03 = await Mitarbeiter.create({
            vnname: 'James Hibbard',
            beitritt: '01.04.2010'
        }).then(mitarbeiter=>{
            // create connection with Firm
            mitarbeiter.setFirm(firm01);
        });
        const mitarbeiter04 = await Mitarbeiter.create({
            vnname: 'Karolina Gawron',
            beitritt: '01.04.2020'
        }).then(mitarbeiter=>{
            // create connection with Firm
            mitarbeiter.setFirm(firm01);
        });
        // projects
        const projekt01 = await Projekt.create({
            id: 21,
            titel: 'ABC Navigator'
        });
        const projekt02 = await Projekt.create({
            id: 22,
            titel: 'Facility Manager 2.0'
        });

        // mitarbeiter_project relationship
        const mitarbeiterProjectRelationship01 = await MitarbeiterProjektRelationship.create({
            mitarbeiterId: 1,
            projektId: 21,
            rolle:'PL'
        });
        const mitarbeiterProjectRelationship02 = await MitarbeiterProjektRelationship.create({
            mitarbeiterId: 2,
            projektId: 22,
            rolle:'PL'
        });
        const mitarbeiterProjectRelationship03 = await MitarbeiterProjektRelationship.create({
            mitarbeiterId:3,
            projektId:21,
            rolle:'QM'
        });
        const mitarbeiterProjectRelationship04 = await MitarbeiterProjektRelationship.create({
            mitarbeiterId:4,
            projektId: 21,
            rolle:'PM'
        });
        // close DB
        sequelize.close();
    };
});