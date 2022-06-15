// STRETCH
const cars = [
    {
        vin: '5NPEB4AC7CH346845',
        make: "toyota",
        model: 'hylux',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '4S2DF58XX34634707',
        make: "toyota",
        model: 'prius',
        mileage: 2150,
        title: 'clean',
    },
    {
        vin: '3C4PDCBGXET140582',
        make: "subaru",
        model: 'outback',
        mileage: 21000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate() 
    await knex('cars').insert(cars)
}

// this is the exact same as the function above
// exports.seed = function (knex) {
//     return knex('cars')
//         .truncate().then(() => {
//             return knex('cars').insert(cars)
//         })
// }