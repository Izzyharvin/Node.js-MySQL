var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bamazon_db',
});


connection.connect(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Connected!");
        processQuestions();
    }

});


function processQuestions() {
    connection.query("SELECT * FROM products", function (error, res) {
        if (error) {
            console.log(error);
        }
        console.log(res)
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
                    message: "What is the product Quanity you would like?",
                },
            ])
            .then(function (answer) {
                var itemId = answer.productId;
                var quantityAmount = answer.productQuanity;

                connection.query("SELECT * FROM products WHERE id = " + itemId,
                    function (error, res) {
                        var updatedQuantity = parseInt("SELECT * FROM products WHERE stock_quantity") - parseInt(quantityAmount);

                        if (res[0].stock_quantity >= quantityAmount) {
                            connection.query("UPDATE products SET ? WHERE ?",
                                [
                                    {
                                        quantityAmount: updatedQuantity
                                   },
                                    {
                                        id: itemId
                                    }
                                ]);
                        }
                        else {
                            console.log("Invalid Entry!");
                        }
                    })
                    .then(function () {
                        connection.end();
                    });
            });
    })
}
