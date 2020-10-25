CREATE TABLE Petitions(
    petitionID      SERIAL PRIMARY KEY NOT NULL,
    title           TEXT NOT NULL,
    descript        TEXT NOT NULL,
    likeCount       INT NOT NULL,
    petitor         TEXT NOT NULL
);

INSERT INTO Petitions VALUES (1, 'Petition1', 'No to jest petycja 1', 0, 'Jakub Smolka');
INSERT INTO Petitions VALUES (2, 'Petition2', 'No to jest petycja 2', 5, 'Michal Raszczuk');
INSERT INTO Petitions VALUES (3, 'Petition3', 'No to jest petycja 3', 12, 'Damian Zoltowski');
