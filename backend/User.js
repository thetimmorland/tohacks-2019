
// I need a way to lookup the customer by email address and token
// Users table needs to have:    Id, Email, Password, Name, OrgName
// should I change this to have a users, students, and posters tables?
// Postings table needs to have: Id, posterId, Title, description, defaultNumHours
// HoursCompleted table needs:             posterId, studentId, postingId, numHours

// CREATE TABLE POSTING (
//     TITLE VARCHAR(255),
//     JOB_POSITION VARCHAR(255),
//     DESRIPTION VARCHAR(255),
//     POSTER_ID int,
//     EXPECTED_HOURS int,
//     ID int NOT NULL PRIMARY KEY auto_increment
//     )

// CREATE TABLE USERS (
//     EMAIL VARCHAR(255),
//     PWD VARCHAR(255),
//     KIND ENUM ('student', 'poster'),
//     ORG VARCHAR(255),
//     INTERESTS VARCHAR(255),
//     SKILLS VARCHAR(255),
//     ID int NOT NULL PRIMARY KEY auto_increment
//     )

// CREATE TABLE JOBS (
//     POSTING_ID int,
//     VOLUNTEER_ID int,
//     HOURS_COMPLETED int,
//     COMMENTS VARCHAR(255),
//     ID int NOT NULL PRIMARY KEY auto_increment
//     )

