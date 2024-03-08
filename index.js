const msgContain = () => {
    
    const msgInc = {

        day: ["On Monday", "On Tuesday", "On Wednesday", "On Thursday", 
                "On Friday", "On Saturday", "On Sunday"],

        wish: ["you'll find", "you'll get", "you'll receive", "you'll win"],

        luck: ["money", "gift", "chocolate", "car"]

    };
    const message = [];

    for(let words in msgInc) {
        let randomMessage = Math.floor(Math.random() * msgInc[words].length);

        message.push(msgInc[words][randomMessage]);
    }
    return message.join(' ');

};
console.log(msgContain());