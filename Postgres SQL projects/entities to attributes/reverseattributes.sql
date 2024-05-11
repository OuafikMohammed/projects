CREATE TABLE Employes (
	DEPNO int,
	NAAME CHAR(1),
	SAL int
);

INSERT INTO Employes (DEPNO , NAAME , SAL) VALUES
(1,'A', 100),
(2,'B', 120),
(3,'C', 90),
(4,'D', 170),
(5,'E', 50);

create table Attributs (
	Attribut_ID int primary key,
	Nom_attribut TEXT
);
insert into Attributs (Attribut_ID,Nom_attribut) VALUES 
(1 ,'DEPNO'),
(2 ,'NAAME'),
(3 , 'SAL')

CREATE TABLE Employes_temp AS
SELECT
    Attribut_ID From Employes AS Employe_ID,
    (SELECT Attribut_ID FROM Attributs WHERE Nom_attribut = 'ID') AS Attribut_1,
    (SELECT Attribut_ID FROM Attributs WHERE Nom_attribut = 'Nom') AS Attribut_2,
    (SELECT Attribut_ID FROM Attributs WHERE Nom_attribut = 'Prénom') AS Attribut_3,
    (SELECT Attribut_ID FROM Attributs WHERE Nom_attribut = 'Âge') AS Attribut_4,
    (SELECT Attribut_ID FROM Attributs WHERE Nom_attribut = 'Sexe') AS Attribut_5
