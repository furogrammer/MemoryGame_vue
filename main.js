
var total = 10;    //カードの枚数
//var array_cards = [];    //カードに表示する数値を格納する配列

var app = new Vue({
    el: "#playarea",
    data: {
        one: -1,
        two: -1,
        list_success: [],
        array_cards: [],
        isFirst: true
      },  
    computed: {
        cards: function () {
            var vm = this;
            //数字を2組ずつ作成
            for(i=1; i <= total/2; i++) {
                vm.array_cards.push(i,i);
                vm.list_success.push(0,0);
            }
            //array_cards配列の数値をランダムに並び替える
            vm.array_cards.sort(function() {
                return Math.random() - Math.random();
            });
            return vm.array_cards;
        },       
    },   
    methods: {
        isClick: function (index) {
            var vm = this;
            debugger;
            if(vm.isFirst){
                //１枚目                
                vm.one = index;
                vm.two = -1;
                vm.isFirst = false;
              }else{
                //2枚目
                vm.two = index;
                //1枚目と2枚目の値が同じ場合はli要素の背景色を赤にする
                if(vm.array_cards[vm.one] === vm.array_cards[vm.two]){
                    vm.list_success[vm.one] = 1;
                    vm.list_success[vm.two] = 1;
                }
                vm.isFirst = true;    
            }	
        },      
    },
});
