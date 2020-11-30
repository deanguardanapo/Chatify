# Chatify - A Personal Chat System
Chatify is a personal chat system that consists of having both real-time users and a "Chatify Chatter" bot. Chatify is a useful tool that allows users to enter different chat rooms and interact with different people over different topics. 

## Getting Started
Personal chat systems are widely used amongst individuals throughout the world and act as a great source of communication. 
The following instructions will aid you to run this project on your local machine for development and testing purposes.

### Requirements
* GitHub Account
* JacaScript
* HTML
* CSS
* Visual Studio Code (or environment of chosen)

### Installing
1. Clone the repository
```
$ git clone git@github.com:deanguardanapo/Chatify.git
```
2. Make sure that you have the correct dependencies installed through an integrated terminal to the project (in Visual Studio Code).
```
$ <PATH DIRECTORY HERE>\Chatify > npm install
```
3. Run the code through the terminal. 
```
$ <PATH DIRECTORY HERE>\Chatify > npm run dev
```
### Features
* **Register** - The register page allows for the user to create an account with their email and name.
![](/Images/reg1.JPG)
* **Error Checking** - Pictured below are error checks to make sure that the user has both a reliable/real email and password that is greater than or equal to six characters.
![](/Images/reg2.JPG)
![](/Images/reg3.JPG)
* **Login Page** - The login page allows you to login to your newly created account.
![](/Images/reg4.JPG)
* **Database** - We have chosen to utilize MongoDB as our database for it will display the users name, email, password (encrypted), and the time stamp for which the account was created.
![](/Images/reg5.JPG)
* **Home Page** - The homepage allows for the user to select a username and "room" of choice.
![](/Images/chat1.JPG)
* **Select Room** - The select room option allows for you access a drop down list of different chat room(s) that you can enter. Each room is titled differently so you can select one that matches the topic of your choice.
![](/Images/chat2.jpg)
* **Chat Room** - Once you have chosen your room of choice in the last step and have proceeded on to click the "Join Chat" button, you will then be redicted to the chat room itself. 
![](/Images/chat3.JPG)
* **New Join** - Now that you have established yourself into the chat you and have been greeted by the Chatify Chatter Bot, you will be able to view the "Room Name" as well as the "Users" in the room with you. Pictured below is an example of what it looks like for another user to enter the chat room (the Bot also notifies you when someone enters the chat room). You are also able to view the username of the person who sent the message along with a time stamp. In addition, you will be able to see the new user is now present on the left side of the screen under "users."
![](/Images/chat4.JPG)
* **Chatting** - Similar to the Chatify Chatter, user messages will also be visible with the username and timestamp on the top left corner of the chat. 
![](/Images/chat5.JPG)
* **User Leave** - Pictured below is example of what the Chatify Chatter will notify you of when a user leaves the chat room that you are in. The "Users" section on the left hand side is also updated.
![](/Images/chat6.JPG)

## Authors 
* **Dean Guardanapo** - [GitHub](https://github.com/Deanguardanapo)
* **Emilio Chavoya** - [GitHub](https://github.com/emiliochavoya98)
* **Prem Dhar** - [GitHub](https://github.com/PremDh)
* **Hewan Mekuria** - [GitHub](https://github.com/hewich)
