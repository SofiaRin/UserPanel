var config = [
    { name: "WoodSword", atk: 100, id: "1" },
    { name: "IronSword", atk: 100, id: "2" },
]

// json -> configClass -> Sword (实体)
// 
var GLOBAL_INDEX = 0;

class Sword {
    uid: number;
    cid: number;
    constructor() {

    }
}

class SwordConfig {

}
// atk 
// is -> 继承 ; has ->组合
//关于样式，在逻辑层指定规则.


class Hero {
    properties: Properties;

    changeShipInTeam(heroToUp, heroToDown) {


    }
/*
    mountEquipment(equip: Equipment, hero: Hero) {
        User.packages.remove(equip);
        hero.mount(equip);
    }
*/
}

class PanelA {

    constructor(hero: Hero) {
        //var container = PropertiesDisplayFactory.createAllDescription(hero.properties);错误的参数

    }
}


var hero = new Hero();

//hero.properties[PropertyName.ATTACK];











