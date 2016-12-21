var config = [
    { name: "WoodSword", atk: 100, id: "1" },
    { name: "IronSword", atk: 100, id: "2" },
];
// json -> configClass -> Sword (实体)
// 
var GLOBAL_INDEX = 0;
var Sword = (function () {
    function Sword() {
    }
    var d = __define,c=Sword,p=c.prototype;
    return Sword;
}());
egret.registerClass(Sword,'Sword');
var SwordConfig = (function () {
    function SwordConfig() {
    }
    var d = __define,c=SwordConfig,p=c.prototype;
    return SwordConfig;
}());
egret.registerClass(SwordConfig,'SwordConfig');
// atk 
// is -> 继承 ; has ->组合
//关于样式，在逻辑层指定规则.
var Hero = (function () {
    function Hero() {
    }
    var d = __define,c=Hero,p=c.prototype;
    p.changeShipInTeam = function (heroToUp, heroToDown) {
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var PanelA = (function () {
    function PanelA(hero) {
        //var container = PropertiesDisplayFactory.createAllDescription(hero.properties);错误的参数
    }
    var d = __define,c=PanelA,p=c.prototype;
    return PanelA;
}());
egret.registerClass(PanelA,'PanelA');
var hero = new Hero();
//hero.properties[PropertyName.ATTACK];
//# sourceMappingURL=Test_1214.js.map