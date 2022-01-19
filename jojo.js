let planet = {
    name: "planeta",
    radius: 0,
    ves: 0,
    number: 0
};
let system = {
    name: "System",
    planets: [planet]
};

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите сколько планет вы хотите иметь в системе (работает ток с 3)', (answer) => {
    let sys1 = Object.create(system);
    sys1.name = "ONEE";
    function makeplanet(number, ves, radius, name) {
        return {
            number,
            ves,
            radius,
            name
        };
    }
    for(let i = 0; i<answer;i++)
{
    sys1.planets[i] = makeplanet(i+1,Math.floor(Math.random() * 100) + 1,Math.floor(Math.random() * 50) + 1,'planet'+(i+1));
}
    function Shows() {
        console.log('Your system: ', sys1.name);
        for (let plan of sys1.planets) {
            console.log(plan);
        }
    }
    Shows();
    sys1.planets[2] = sys1.planets[0];
    sys1.planets[3] = makeplanet(4,55,55,"SIRIUS??");
    sys1.name = "System of boy next door";
    Shows();

    rl.close();
});
