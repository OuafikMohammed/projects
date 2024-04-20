--- Creating has_interest  Table

Create Table has_interest 
(intID int ,cID int, phoneNumber varchar );

-- add primary key
alter table has_interest add primary key(intID , cID)


--- Creating call_schedule  Table
Create Table call_schedule 
(callID int primary key , callDate date , ctype varchar , cID int , callStatus varchar);


--- Creating contact  Table
Create Table contact 
(cID int primary key ,firstName varchar, lastName varchar 
 , phonenumber varchar(10), email varchar , age int, gender varchar, dateEnr date , cityID int);
 
-- deleting column
alter table has_interest drop column phoneNumber;

--adding foreign key 
alter table has_interest add foreign key(cID) references contact(cID);
alter table call_schedule add foreign key(cID) references contact(cID) ;

-- drop foreign key
alter table call_schedule drop constraint  call_schedule_cid_fkey;

-- on delete 
alter table call_schedule add foreign key(cID) references contact(cID) on delete cascade  ;

--- Creating interest  Table
Create Table interest 
(intID int primary key, intName varchar)

--adding foreign key 
alter table has_interest add foreign key(intID) references interest(intID);



--- Creating city  Table
Create Table city
(cityID int primary key , city varchar , country varchar)

-- add foreign key
alter table contact add foreign key(cityID) references city(cityID) ;

--- Creating interaction  Table
Create Table interaction
(interID int primary key, interDate date , satisfaction numeric(5,2) 
 , interStatus varchar , cID int 
 , sourceID int, productID int , foreign key (cID) references contact(cID))

--- Creating lead_source  Table
Create Table lead_source 
(sourceID int primary key , sourceName varchar)
--adding foreign key
alter table interaction add foreign key (sourceID) references lead_source(sourceID);


--- Creating product  Table
Create Table product 
(productID int primary key , pLabel varchar , price numeric(7,2) , categorie varchar) -- fix for transactions
--adding foreign key
alter table interaction add foreign key (productID) references product(productID);


-- delete column
alter table product drop column Plabel; 

-- add column
alter table product add column Plabel varchar;


-- rename column 
alter table product rename column Plabel to product_label;

-- modify type 
alter table product alter column product_label type varchar(20)

-- rename Table
alter table product rename  to produit;
alter table produit rename to product;


--- inserting Data

--- interaction
insert into interaction
values(0,'2024-03-20',80.50,'sold',null , null , null), 
(1,'2024-01-20',50.80,'sold',null , null , null), 
(2,'2024-01-05',null,'lead',null , null , null),
(3,'2024-03-26',90.00,'sold',null , null , null), 
(4,'2023-10-10',80.50,'sold',null , null , null), 
(5,'2024-02-20',null,'lead',null , null , null), 
(6,'2024-03-20',80.50,'sold',null , null , null),
(7,'2023-12-10',99.99,'sold',null , null , null), 
(8,'2024-03-20',10.00,'sold',null , null , null), 
(9,'2024-03-19',null,'lead',null , null , null), 
(10,'2024-01-18',90.80,'sold',null , null , null), 
(11,'2024-03-18',null,'lead',null , null , null), 
(12,'2023-10-20',null,'lead',null , null , null); 

--- lead source
insert into lead_source
values(0,'Social Media'),
(1,'Email'),
(2,'Call'),
(3,'Ads');

update  interaction set sourceID = 2 where satisfaction between 80 and  84;
update  interaction set sourceID = 0 where satisfaction > 85;
update  interaction set sourceID = 3 where satisfaction between  10 and 55;
update  interaction set sourceID = 1 where satisfaction is null;





--- products 
insert into product (productID,product_label,price,categorie)
values
    (0, 'Bicycle', 500.00, 'Sporting Goods'),
    (1, 'Laptop', 1200.00, 'Electronics'),
    (2, 'Headphones', 100.00, 'Electronics'),
    (3, 'Smartphone', 800.00, 'Electronics'),
    (4, 'T-shirt', 20.00, 'Apparel'),
    (5, 'Jeans', 50.00, 'Apparel'),
    (6, 'Watch', 150.00, 'Accessories'),
    (7, 'Sunglasses', 80.00, 'Accessories'),
    (8, 'Backpack', 70.00, 'Accessories'),
    (9, 'Umbrella', 15.00, 'Accessories'),
    (10, 'Desk', 200.00, 'Furniture'),
    (11, 'Chair', 100.00, 'Furniture'),
    (12, 'Printer', 300.00, 'Electronics'),
    (13, 'Keyboard', 50.00, 'Electronics'),
    (14, 'Mouse', 30.00, 'Electronics'),
    (15, 'Book', 10.00, 'Books'),
    (16, 'Pen', 2.00, 'Stationery'),
    (17, 'Notebook', 5.00, 'Stationery'),
    (18, 'Guitar', 400.00, 'Musical Instruments'),
    (19, 'Drums', 800.00, 'Musical Instruments'),
    (20, 'Microphone', 150.00, 'Audio Equipment');
update  interaction set productID = 0 where interID in (0,1,12);
update  interaction set productID = 1 where interID in (2,3);
update  interaction set productID = 2 where interID in (4,5);
update  interaction set productID = 3 where interID in (6,7);
update  interaction set productID = 4 where interID in (8,9);
update  interaction set productID = 5 where interID in (10,11);


--- call
insert into call_schedule 
values(0,'2024-04-20','sales',null,'done' ),
(1,'2024-05-23','sales',null,'todo'),
(2,'2024-06-10','close',null , 'todo'),
(3,'2024-04-20','sales',null , 'done'),
(4,'2024-04-13','sales',null, 'todo'),
(6,'2024-05-18','close',null, 'done'),
(7,'2024-06-20','sales',null, 'todo'),
(8,'2024-05-02','close',null, 'done');


--contact
insert into contact
values (0, 'Ahmed', 'Karoum', 'male', '2024-01-05', null),
    (1, 'John', 'Doe', 'male', '2024-03-16', null),
    (2, 'Michael', 'Johnson', 'male', '2024-01-18', null),
    (3, 'Emily', 'Brown', 'female', '2024-03-20', null);
	
-- update interaction
update  interaction set cID = 0 where interID in (1,2);
update  interaction set cID = 3 where interID in (8,6,0,3);
update  interaction set cID = 1 where interID in (12 , 10,9);
update  interaction set cID = 2 where interID in (11,7,5,4);

-- update call_schedule
update  call_schedule set cID = 0 where callID in (0,1) ;
update  call_schedule set cID = 1 where callID in (2,3) ;
update  call_schedule set cID = 2 where callID in (4,5) ;
update  call_schedule set cID = 3 where callID in (6,7,8) ;


--interest
insert into interest
values (0,'Fitness'),
(1,'Adventure'),
(2,'Tech'),
(3,'Travel'),
(4, 'Socializing'),
(5,'Reading');

insert into interest values(6,'Watching TV');

-- has_interest
insert into has_interest
values (0,0),
(3,0),
(2,1),
(5,1),
(0,2),
(3,3),
(1,3),
(4,3);


-- city
insert into city 
values(0,'London','UK'),
(1,'Casablanca', 'Maroc'),
(2,'Rabat' , 'Maroc');

-- update contact
update  contact set cityID = 1 where cID in(0,3);
update  contact set cityID = 0 where cID = 1;
update  contact set cityID = 2 where cID = 2;

update contact 
set phonenumber = '0680123540' , age =20 , email ='Ahmed13@gmail.com' , gender = 'male' , dateenr = '2024-01-05' 
where cID = 0;
update contact 
set phonenumber = '0780403014' , age =50 , email ='Micheal0513@gmail.com' , gender = 'male' , dateenr = '2024-01-18' 
where cID = 2;
update contact 
set phonenumber = '0735641898' , age =38 , email ='JonDOe20187@gmail.com' , gender = 'male' , dateenr = '2024-03-16' 
where cID = 1;
update contact 
set phonenumber = '0690674409' , age =27 , email ='Emi2059@gmail.com' , gender = 'female' , dateenr = '2024-03-20' 
where cID = 3;


--- Queries:


--- how many interaction to each lead source(Group By , count):
select l.* , i.num from lead_source as l join (select sourceID, count(interID) as num from interaction group by sourceID) as i on l.sourceID = i.sourceID;

-- count:
--- best selling product:
 select pr.* from product as pr join (select count(cID) as sumi, productID from interaction   where interStatus = 'sold' group by productID order by sumi desc limit 1) as i on i.productID = pr.productID;

-- max:
-- using max:
select pr.* from (select * from (select count(cID) as so, productID    from interaction where interStatus = 'sold' group by productID ) where so =  (select max (si) as maxi from (select count(cID) as si from interaction where interStatus = 'sold' group by productID ))) as ci join product as pr on pr.productID = ci.productID ;

-- min:
-- least expensive sold product:
select * from product where price = (select min(price)  from product where exists (select distinct productID from interaction where interStatus = 'sold' and interaction.productID = product.productID) ); 


-- sum:
--- how many evrey customer spent:
select sold.cID , sum(price) from product as pr join (select * from interaction where interStatus = 'sold') as sold on sold.productID = pr.productID group by sold.cID


-- avg:
--- average   satisfaction level of a client:
select avg(satisfaction) , cID from interaction  group by cID;

-- all products from least selling to best selling(order by):
select pr.* , num from product as pr join(select count(cID) as num  , productID from interaction where interStatus = 'sold' group by productID ) as sold on sold.productID = pr.productID order by num asc;

--- all types of joins ---

-- full join:
select * from interest i full join has_interest has on i.intID  = has.intID;

-- left join:
select * from interest i left join has_interest has on i.intID  = has.intID;

-- right join:
select * from has_interest has right join interest i on i.intID  = has.intID;

-- natural join:
-- without repeating intID doesn't use on:
select * from interest i  natural join has_interest has;


-- intersect:
--select interest in common between Micheal and Ahmed:
select intname from has_interest as ah join interest as i on i.intID = ah.intID  where cID = (select cID from contact where firstname = 'Ahmed') intersect (select intname from has_interest as ah join interest as i on i.intID = ah.intID  where cID = (select cID from contact where firstname = 'Michael') )  ;


-- all possible matches (Cross Join)
-- match every contact with every possible interest they can have:
select * from contact  co cross join has_interest hi ;

--- union & union all
-- all contact that have tech interest and all that  bought Sporting Goods product :
select cID from has_interest as has join  interest as inter on inter.intID = has.intID where intname ='Tech' union (select cID  from interaction as i join product as pr on pr.productID = i.productID where categorie = 'Sporting Goods');
-- same with duplicated values:
select cID from has_interest as has join  interest as inter on inter.intID = has.intID where intname ='Tech' union all (select cID  from interaction as i join product as pr on pr.productID = i.productID where categorie = 'Sporting Goods');


-- unordered products name  (except):
select cID (select product_label from product as pr join (select productID from product except (select distinct productID from interaction where interStatus = 'sold' )) as unordered on unordered.productID = pr.productID;

-- subqueries:

--- select all products not sold:(correlated subquery) 
select *  from product as pr where not exists(select count(cID) from interaction as i where interStatus = 'sold' and i.productID =  pr.productID  group by productID)

-- any
-- price bigger than  atleast one price of product :
select * from product where price > any (select price from product)

-- all
-- price bigger or equals than all other prices :
select * from product where price >= all (select price from product)







