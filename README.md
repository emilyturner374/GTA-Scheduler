![image](https://user-images.githubusercontent.com/47064751/139287546-0e213a46-6867-427d-b6b1-a3e40c6000a2.png)

## GTA-Scheduler Web App

### Initial Setup
- Install Node.js at https://nodejs.org/en/
- In the terminal, while in the project directory, install the required dependencies via ```pip install -r requirements.txt```
- Also, add a file to the project directory called .env
    - This file will be used to hold sensitive information, such as usernames, passwords, secret keys, etc.
- While in the frontend directory, install node modules via ```npm install``` and then run the build via ```npm run build```
- Go back to the project directory and run the server via ```python manage.py runserver```
- You should then see a url that leads to your localhost IP in the terminal, and enter that url into your web browser
- The result should be as follows:
![image](https://www.w3schools.com/react/screenshot_myfirstreact.png)
- Note: When making changes to the frontend code, you must run ```npm run build``` to apply those changes
