var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'root',
    database:'bamazon_db',
});


connection.connect(function(error) {
    if(error) {
        console.log(error);
    }
    else {
        console.log("Connected!");
    }

    products();
});


function products() {
    connection.query("SELECT * FROM products", function (response, error) {
        if (error) {
            console.log(error);
        }

        processQuestions();
    });
}


function processQuestions() {
    connection.query("SELECT * FROM products", function(response, error) {
        if (error) {
            console.log(error);
        }

        inquirer
        .prompt([
            {
                name: "productId",
                type: "input",
                message: "What is the product ID?",
            },
            {
                name: "productQuanity",
                type: "input",
                message: "What is the product [Quanity] you would like?",
            },
        ])
        .then(function(answer) {
            connection.query("SELECT * FROM products WHERE ?")
            function(response, error) {
                var itemId = answer.productId;
                var quantityAmount = answer.productQuanity;
                if (quantityAmount >= itemId) {
                    // This is where the takes the answer from the question and updates the database
                }
                else {
                    console.log("Invalid Entry");
                }
            } 
        });
        
        connection.end();
    })
}
