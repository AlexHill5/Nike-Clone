drop table if exists cart, users;


create table cart(
    id serial primary key,
    userid int,
    shoesid int,
    inventoryid int,
    shoeimg text,
    shoename text,
    shoesize int,
    shoeprice int
);

insert into cart (userid, shoesid, inventoryid, shoeimg, shoename, shoesize, shoeprice)
values (1, 1, 1, 'https://s3.us-east-2.amazonaws.com/nikeshoeimages/air-huarache-mens-shoe.jpg', 'Air Hurache', 11, 0);


create table users(
    id serial primary key,
    firstname text,
    lastname text,
    email text
);

insert into users(firstname, lastname, email) 
values (' BEN', 'VEGAL', '@test');

