// declaire local vue components
var ComponentA = {
    // options
};

var ComponentB = {
    components: {
        // VL中错误：不是等号赋值，而是使用:
        "component-a": ComponentA
    }
};

var ComponentC = {};

var vm = new Vue({
    components: {
        "component-b": ComponentB,
        "component-c": ComponentC
    }
});

// 注册顺序： root instance: [B: [A], C]