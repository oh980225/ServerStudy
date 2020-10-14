const groupMixer = {
    mix: (memberArray) => {
        if (memberArray instanceof Array) {
            const mixedObj = memberArray.sort(function () {
                // -0.5 ~ 0.5 값을 랜덤으로 리턴! 이를 통해 +,0,- 랜덤 -> 그에 해당하게 랜덤 sort!
                return 0.5 - Math.random(); 
            });
            const mixedArray = [];
            mixedObj.filter(index => {
                mixedArray.push(index);
            })
            return mixedArray;
        }
    },
};

module.exports = groupMixer;