CREATE TABLE Petitions (
    petitionID      SERIAL PRIMARY KEY,
    title           TEXT NOT NULL,
    descript        TEXT NOT NULL,
    likeCount       INT NOT NULL,
    petitor         TEXT NOT NULL
);

INSERT INTO Petitions(title, descript, likeCount, petitor) VALUES ('Petition1', 'No to jest petycja 1', 0, 'Jakub Smolka');
INSERT INTO Petitions(title, descript, likeCount, petitor) VALUES ( 'Petition2', 'No to jest petycja 2', 5, 'Michal Raszczuk');
INSERT INTO Petitions(title, descript, likeCount, petitor) VALUES ( 'Petition3', 'No to jest petycja 3', 12, 'Damian Zoltowski');
