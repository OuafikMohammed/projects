create table EMPLOYES(emloyee_id int primary key , first_name varchar(30) , last_name varchar(30), email varchar(30) , hire_date date , gender varchar , salary varchar(25) , coffeeshop_id  int);
create table SHOPS (coffeeshop_id int primary key , coffeshop_name varchar(25) , city_id int)
create table Fournisseurs(coffeeshop_id int , coffee_type varchar(30) , supplier_name varchar(45))
create table Locations(city_id int primary key , city varchar(15), country varchar(15))

-- ADD FOREIGN KEY 
alter table SHOPS 
add foreign key (city_id) references Locations(city_id)
-- ADD PRIMARY KEY 
alter table Fournisseurs
add primary key (supplier_name ,coffeeshop_id)
-- ADD FOREIGN KEY 
alter table Fournisseurs
add foreign key (coffeeshop_id) references shops(coffeeshop_id)
-- AFFICHER LES TABLES  --
select * from locations
-- INSERT VALUES 
insert into  Employes VALUES (501599 , 'Carson' , 'Mosconi' , 'cmosconi@census.gov' , '2015-08-29' , 'M' , 32973, NULL),(144108 , 'Khalil' , 'Corr' , 'kcorr@github.io', '2014-04-23' ,' M' , 52802, NULL )
insert into Locations VALUES (1,'LosAngeles', 'United States' ),( 2 , 'New York' , 'United States'),(3 , 'London' , 'United Kingdom')
insert into SHOPS VALUES (1 , 'Common Grounds' , NULL),(2 , 'Early Rise' , 2),(3 , 'Ancient Bean ' , 3),( 4, 'Urban Grid ' , 4),(5 , 'Tembling Cup ' , 5)
insert into Fournisseurs VALUES (1 , 'Beans and Barley ' ,'Arabica'),(1 , 'Cool Beans ' ,'Robusta'),(2 , ' Vanilla Bean' ,'Liberica'),(2 , 'Beans and Barley ' ,'Arabica'),(2 , 'Cool Beans ' ,'Robusta'),(3 , 'Bean me up' ,'Exclesa'),(3 , ' Vanilla Bean' ,'Liberica'),(3 , 'Cool Beans ' ,'Robusta'),(3 , 'Beans and Barley ' ,'Arabica'),(4 , ' Vanilla Bean' ,'Liberica'),(4 , 'Bean me up' ,'Exclesa'),(5 , 'Beans and Barley ' ,'Arabica')

-- UPDATE VALUES
update shops
set city_id = 1 whre
-- 
update employes 
set coffeeshop_id = 1;

select * from Fournisseurs