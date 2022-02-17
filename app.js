//array
var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]

//for loop to render elements
for (let i=0; i<warriors.length; i++){

    if (warriors[i].health >= 10 && warriors[i].damage >= 2 && warriors[i].warrior === true) {
        let ele = document.createElement("div");
        let nameEle = document.createElement("h1");
        let healthEle = document.createElement("h3");
        let damageEle = document.createElement("h3");
        let warriorEle = document.createElement("h3");
        nameEle.innerHTML=warriors[i].name;
        healthEle.innerHTML="Health: "+warriors[i].health;
        damageEle.innerHTML="Damage: "+warriors[i].damage;
        warriorEle.innerHTML="Warrior: "+warriors[i].warrior;
        ele.appendChild(nameEle);
        ele.appendChild(healthEle);
        ele.appendChild(damageEle);
        ele.appendChild(warriorEle);

        for (let j=0; j<warriors[i].name.length; j++) {
            console.log(warriors[i].name[j]);
            if (warriors[i].name[j] === "a" || warriors[i].name[j] === "A") {
                console.log("Found an A!");
                nameEle.style.color="red";
                healthEle.style.color="red";
                damageEle.style.color="red";
                warriorEle.style.color="red";
            }
        }
        document.body.appendChild(ele);
    }
}



// Only display characters that have
    // 10 or more health (number)
    // deal 2 or more damage (number)
    // and are a warrior (true/false)
    // If the character has the letter "A" in it, make the text red