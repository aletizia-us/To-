function calculate(){
    
    var budgetInput = +document.getElementById("budget").value;

    //Monthly Costs = rent = utilities
    //using + in font of any assigned value will turn it into a number
    var rentInput = +document.getElementById("rent").value;
    var utilitiesInput = +document.getElementById("utilities").value;

    var monthlyCosts = rentInput + utilitiesInput;

    //netBudget
    var netBudget = budgetInput - monthlyCosts


    //saving priorities
    function selectPriority(){
        var highPriority = netBudget - (80 / 100) * netBudget;
        var mediumPriority = netBudget - (50 / 100) * netBudget;
        var lowPriority = netBudget - (20 / 100) * netBudget;

        var high = [highPriority, "high"];
        var medium = [mediumPriority, "medium"];
        var low = [lowPriority, "low"];

        if (high <= priceOItem){
            document.getElementById("result") .innerHTML = "You are not allowed to buy this";
        }
        else if (medium <= priceOItem){
            document.getElementById("result") .innerHTML = "You are allowed to buy this";
        }
        else if (low <= priceOItem){
            document.getElementById("result") .innerHTML = "You are allowed to buy this";
        }
    }

    //new item
    var priceOItem = +document.getElementById("price").value;

    //total budget

    selectPriority();
    alert(totalBudget);
}