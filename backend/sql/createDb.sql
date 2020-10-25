CREATE TABLE Users(
    userID          INT PRIMARY KEY NOT NULL,
    username        TEXT NOT NULL,
    firstname       TEXT NOT NULL,
    surname         TEXT NOT NULL
);

CREATE TABLE Petitions(
    petitionID      INT PRIMARY KEY NOT NULL,
    title           TEXT NOT NULL,
    descript        TEXT NOT NULL,
    likeCount       INT NOT NULL,
    userID          INT NOT NULL
);

INSERT INTO Users VALUES (1, 'Dejmi', 'Damian', 'Zoltowski');
INSERT INTO Users VALUES (2, 'Kubi', 'Jakub', 'Smolka');
INSERT INTO Users VALUES (3, 'Chuj', 'Michal', 'Raszczuk');

INSERT INTO Petitions VALUES (1, 'Petition1', 'No to jest petycja 1', 0, 2);
INSERT INTO Petitions VALUES (2, 'Petition2', 'No to jest petycja 2', 5, 3);
INSERT INTO Petitions VALUES (3, 'Petition3', 'No to jest petycja 3', 12, 1);

ALTER TABLE ONLY Petitions 
    ADD CONSTRAINT petitions_fk FOREIGN KEY (userID) REFERENCES Users(userID);
