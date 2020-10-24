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
    CONSTRAINT fk_users FOREIGN KEY (id) REFERENCES Users(id)
);