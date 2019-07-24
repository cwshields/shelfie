INSERT INTO product ( imgurl, productname, price ) 
VALUES ( $1, $2, $3 );
SELECT * FROM product;
-- DELETE FROM product WHERE price=''