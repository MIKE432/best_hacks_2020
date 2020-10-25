CREATE TABLE Petitions (
    petitionID      SERIAL PRIMARY KEY,
    title           TEXT NOT NULL,
    descript        TEXT NOT NULL,
    likeCount       INT NOT NULL,
    petitor         TEXT NOT NULL
);

INSERT INTO Petitions(title, descript, likeCount, petitor) VALUES ('Petycja w sprawie wprowadzenia kaucji na opakowania plastikowe', 
                                    'Plastik jest szkodliwym tworzywem i powinniśmy zacząć ponosić skutki związane z jego używaniem
                                    i w tym celu powinnismy nałożyć na producentów jak i konsumentów produktów w plastikowych opakowaniach akcyzę.',
                                    123, 
                                    'Jakub Smolka');
INSERT INTO Petitions(title, descript, likeCount, petitor) VALUES ('Petycja o zwiększenie możliwości termicznego przekształcania odpadów poprzez 
                                    prawne dopuszczenie możliwości ich działania w zwiększonych mocach przerobowych', 
                                    'Rozwiązanie to pozwoliłoby przede wszystkim na zwiększenie możliwości odzysku energetycznego odpadów wobec braku możliwości innych sposobów 
                                    ich zagospodarowania, a co za tym idzie zmniejszenie produkcji CO2.',
                                    237,
                                    'Michal Raszczuk');
INSERT INTO Petitions(title, descript, likeCount, petitor) VALUES ('Petycja o zakup elektrycznych autokarów komunikacji miejskiej w celu stopniowego ich wdrażania na miejsce 
                                    autobusów spalinowych',
                                    'Pojazdy spalinowe produkują ok. 900g CO2 na każdy przejechany kilometr. Według badań z 2016 roku emisje z transportu stanowiły 25% całkowitych emisji CO2 
                                    w Unii Europejskiej. Zmiana pojazdów spalinowych na elektryczne pozwoliłaby na znaczne zmniejszenie emisji gazu cieplarnianego, co 
                                    przyczyniłoby się na zdrowszą atmosferę oraz dłuższe i bardziej komfortowe życie człowieka na naszej planecie.',
                                    12,
                                    'Damian Zoltowski');
