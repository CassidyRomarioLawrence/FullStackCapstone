const dB = require('../config');

const {hash, compare, hashSync } = require('bcrypt');

const { createToken } = require('../middleware/AuthenticateUser');

class User {
    login(req, res) {
        const {userEmail, userPassword} = req.body;
        const querySt = 
        `
        SELECT userName, userSurname, userGender, userEmail, userPassword, userImage, DATE_FORMAT(dateJoined, '%d-%m-%Y') AS user_joined,userRole
        FROM users
        WHERE userEmail = '${userEmail}';
        `;
        dB.query(querySt, async (err, data)=>{
            if(err) throw err;
            if((!data.length) || (data == null)) {
                res.status(401).json({err: 
                    "Incorrect email address"});
            }else {
                await compare(userPassword, 
                    data[0].userPassword, 
                    (uErr, uResult)=> {
                        if(uErr) throw uErr;
                        const jToken = 
                        createToken(
                            {
                                userEmail, userPassword  
                            }
                        );
                        res.cookie('Valid User',
                        jToken, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(uResult) {
                            res.status(200).json({
                                msg: 'Logged In',
                                jToken,
                                result: data[0]
                            })
                        }else {
                            res.status(401).json({
                                err: 'Incorrect password'
                            })
                        }
                    })
            }
        })     
    }
    fetchUsers(req, res) {
        const querySt = 
        `
        SELECT id, userName, userSurname, userGender, cellNumber, userEmail, userImage, DATE_FORMAT(dateJoined, '%d-%m-%Y') AS user_joined,userRole
        FROM users;
        `;
        
        dB.query(querySt, (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })
    }
    fetchUser(req, res) {
        const querySt = 
        `
        SELECT id, userName, userSurname, userGender, cellNumber, userEmail, userImage, DATE_FORMAT(dateJoined, '%d-%m-%Y') AS user_joined,userRole
        FROM users
        WHERE id = ?;
        `;
        
        dB.query(querySt,[req.params.id], 
            (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })

    }
    async createUser(req, res) {
        let info = req.body;
        info.userPassword = await 
        hash(info.userPassword, 15);
        let user = {
            userEmail: info.userEmail,
            userPassword: info.userPassword
        }
        
        const querySt =
        `INSERT INTO users
        SET ?;`;
        dB.query(querySt, [info], (err)=> {
            if(err) {
                res.status(401).json({err});
            }else {
                
                const jToken = createToken(user);
                res.cookie("Valid User", jToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({msg: "Successfully added new user."})
            }
        })    
    }
    updateUser(req, res) {
        let data = req.body;
        if(data.userPassword !== null || 
            data.userPassword !== undefined)
            data.userPassword = hashSync(data.userPassword, 15);
        const querySt = 
        `
        UPDATE users
        SET ?
        WHERE id = ?;
        `;
        
        dB.query(querySt,[data, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "User successfully updated."} );
        })    
    }
    deleteUser(req, res) {
        const querySt = 
        `
        DELETE FROM users
        WHERE id = ?;
        `;
        
        dB.query(querySt,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "User was successfully deleted."} );
        })    
    }
}

class Product {
    fetchProducts(req, res) {
        const querySt = `SELECT productId, category, prodName, artistName, prodDesc, prodPrice,prodImage,prodQuantity
        FROM products;`;
        dB.query(querySt, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const querySt = `SELECT productId, category, prodName, artistName, prodDesc, prodPrice,prodImage,prodQuantity
        FROM products
        WHERE productId = ?;`;
        dB.query(querySt, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addProduct(req, res) {
        const querySt = 
        `
        INSERT INTO products
        SET ?;
        `;
        dB.query(querySt,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to create new product."});
                }else {
                    res.status(200).json({msg: "Successfully created new product."});
                }
            }
        );    

    }
    updateProduct(req, res) {
        const querySt = 
        `
        UPDATE products
        SET ?
        WHERE productId = ?
        `;
        dB.query(querySt,[req.body, req.params.id],
            (err)=> {
                if (err) {
                    (console.log(err));
                    res.status(400).json({err: "Could not update product."});
                }else {
                    res.status(200).json({msg: "Product successfully updated"});
                }
            }
        );    

    }
    deleteProduct(req, res) {
        const querySt = 
        `
        DELETE FROM products
        WHERE productId = ?;
        `;
        dB.query(querySt,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "Unable to find product."});
            res.status(200).json({msg: "Successfully deleted product."});
        })
    }
}

class Cart {
    fetchCart(req, res) {
        const querySt = 
        `
        SELECT cartId,prodName, prodPrice, prodImage, artistName,quantity
        FROM users
        inner join carts on users.id = carts.user_id
        inner join products on carts.product_id = products.productId
        where carts.user_id = ${req.params.id};
        `;
        dB.query(querySt, (err, results)=> {
            if(err) console.log(err);
            res.status(200).json({results: results})
        });
    }
    addToCart(req, res) {
        const userId = req.params.id;
        const productData = req.body;
        productData.user_id = userId;
    
        const querySt = `
            INSERT INTO carts
            SET ?
        `;
    
        dB.query(querySt, [productData], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({ err: "Unable to insert into cart." });
            } else {
                res.status(200).json({ msg: "Event added to cart" });
            }
        });
    }
    
    updateItemFromCart(req, res){
        const querySt = 
        `
        UPDATE carts
        SET ?
        WHERE cartId = ?;
        `;
        dB.query(querySt,[req.body, req.params.id],
            (err)=> {
                if(err){
                    console.log(err);
                    res.status(400).json({err: "Unable to update cart."});
                }else {
                    res.status(200).json({msg: "Cart updated"});
                }
            }
        );    
    }
    deleteFromCart(req, res) {
        const querySt = `
            DELETE FROM carts
            WHERE user_id = ?;
        `;
        dB.query(querySt, [req.params.id], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({ err: "All cart items were not deleted." });
            } else {
                res.status(200).json({ msg: "Cart deleted." });
            }
        });
    }
    
    deleteItemFromCart(req, res) {
        const querySt = 
        `
        DELETE FROM carts
        WHERE cartId = ?;
        `;
        dB.query(querySt,[req.params.id], (err)=> {
            if(err){
                console.log(err);
                res.status(400).json({err: "The cart item was not deleted."});
            } else{
                res.status(200).json({msg: "A cart item was deleted"});
            }
        })
    }
}
module.exports = {
    User,
    Product,
    Cart
}