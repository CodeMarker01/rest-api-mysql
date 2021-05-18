CREATE database todoTutorial;

CREATE TABLE todo(
    todo_id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL
)

INSERT INTO todo (description) VALUES ('cuoc');
INSERT INTO todo (description) VALUES ('song');
SELECT * FROM todo;