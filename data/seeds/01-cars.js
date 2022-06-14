// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: "toyota",
        model: 'hylux',
        milage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1111111111111',
        make: "toyota",
        model: 'prius',
        milage: 2150,
        title: 'clean',
    },
    {
        vin: '1111111111111',
        make: "subaru",
        model: 'outback',
        milage: 21000,
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