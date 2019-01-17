DROP TABLE IF EXISTS ITEMS;
CREATE TABLE ITEMS (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`price` INT NOT NULL,
`stock` INT NOT NULL,
`name` CHAR(127) CHARACTER SET utf8 NOT NULL
);

INSERT INTO ITEMS(price, stock, name) VALUES(10, 20, "PC Mouse");
INSERT INTO ITEMS(price, stock, name) VALUES(15, 10, "PC Keyboard");
INSERT INTO ITEMS(price, stock, name) VALUES(200, 50, "PC Screen 17\"");
INSERT INTO ITEMS(price, stock, name) VALUES(75, 31, "LED Desk Lamp");
INSERT INTO ITEMS(price, stock, name) VALUES(1500, 5, "Multimedia Laptop");
INSERT INTO ITEMS(price, stock, name) VALUES(250, 30, "Googol Smartphone");
INSERT INTO ITEMS(price, stock, name) VALUES(150, 40, "Simsang Smartphone");
INSERT INTO ITEMS(price, stock, name) VALUES(300, 42, "Knuth: The Art of Programming");
INSERT INTO ITEMS(price, stock, name) VALUES(49, 23, "Python 3: Beginners Course");
INSERT INTO ITEMS(price, stock, name) VALUES(15, 32, "Coffee Mug");
