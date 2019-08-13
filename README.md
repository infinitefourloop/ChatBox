# ChatBox
ChatBox is a Single Page Application for real-time, bidirectional online messaging using Socket.io. Authenticated users are able to chat with other users while authorized users are able to update or delete owned messages.

[Frontend repo](https://github.com/infinitefourloop/ChatBox) :speech_balloon: [Backend repo](https://github.com/infinitefourloop/ChatBox-backend)

[Client deploy](https://infinitefourloop.github.io/ChatBox/) :speech_balloon: [Heroku deploy](https://young-springs-61213.herokuapp.com/)

## Technologies Used

| Frontend      | Backend    |
| ------------- |------------|
| Javascript    | Node.js    |
| HTML          | Express.js |
| jQuery        | MongoDB    |
| CSS/SCSS      | Heroku     |
| Bootstrap     | [Socket.io](https://socket.io/)  |


## The Development
This group project split our four members into four roles: Scrum Master ([@brettdoyle44](https://github.com/brettdoyle44)), Front-End Lead ([@fofombi](https://github.com/fofombi)), Back-End Lead ([@ekmy318](https://github.com/ekmy318)) and Quality Assurance ([@elody-ramirez](https://github.com/elody-ramirez)).

Our group, the Infinitefourloop, reviewed the team guideline, created a scrum plan and began to code. Every morning and afternoon started with a stand up where we shared our most recent work, current progress and any code walls we hit. In the end, with open communication, collaborative programming and git flow rules, Chatbox was born!

ChatBox is a single page application that allows a user to join a chatroom to exchange messages in a one-to-many relationship. The user is able to sign up, sign in, change password and sign out. The user owned message resource can be created, updated and destroyed (read by all authenticated users in the chatroom).

#### Catalog of routes
| HTTP   | Paths          |
| ------ |----------------|
| GET    | /messages      |
| POST   | /messages/:id  |
| PATCH  | /messages/:id  |
| DELETE | /messages/:id  |

Wireframe and Entity Relationship Diagram developed during Infinitefourloop's first team meeting.
![wireframe](https://i.imgur.com/be3AzNp.jpg)


![ERD](https://i.imgur.com/pkb9nUK.jpg)


## Problem-strategy
The trickest part of this project was familiarizing ourselves with [Socket.io](https://socket.io/) as no one on the team had prior experience working with websockets. This part, as well as all other parts in the project were all managable as we followed a best practice when working in a group:

1. :question: Break down the problem to simple blocks - What specifically am I trying to achieve?
2. :books: Still stuck? Search the web for similar issues.
3. :couple: Still stuck? Brainstorm with a teammate.
4. :outbox_tray: Still stuck? Submit an issue to the instructional team.

Most importantly, follow the golden rule: :mega: **CONSOLE LOG EVERYTHING.** :mega:


## User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to join a chat room.
- As a signed in user in a room, I would like to see all messages in the chat room.
- As a signed in user in a room, I would like to send my own messages to the chat room.
- As a signed in user in a room, I would like to update my own messages to the chat room.
- As a signed in user in a room, I would like to delete my own messages to the chat room.

## Future Iterations
- Display how long ago a message was sent
- Allow users to join different channels in a chat room
- Allow users to send private messages
