CREATE TABLE Users(
    id          INT PRIMARY KEY NOT NULL,
    username    CHAR(25) NOT NULL,
    firstname   CHAR(50) NOT NULL,
    surname     CHAR(50) NOT NULL
);

CREATE TABLE Petitions (
    id          INT PRIMARY KEY NOT NULL,
    title       CHAR(50) NOT NULL,
    descript    TEXT NOT NULL,
    likeCount   INT NOT NULL,
    CONSTRAINT fk_users FOREIGN KEY (id) REFERENCES Users(id)
);

INSERT INTO Users VALUES (1, 'Dejmi', 'Damian', 'Zoltowski');
INSERT INTO Users VALUES (2, 'Kubi', 'Jakub', 'Smolka');
INSERT INTO Users VALUES (3, 'Chuj', 'Michal', 'Raszczuk');

INSERT INTO Petitions VALUES (1, 'Petition1', 'No to jest petycja 1', 0);
INSERT INTO Petitions VALUES (2, 'Petition2', 'No to jest petycja 2', 5);
INSERT INTO Petitions VALUES (3, 'Petition3', 'No to jest petycja 3', 12);
