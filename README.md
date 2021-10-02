# Thinkful Pomodoro Timer Assignment

## Pomodoro Timer
The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student.

## Project Goals
A user should be able to select a study duration ranging from 5-60 minutes as well as a break duration ranging from 1-15 minutes. 
The use can then start the timer which will begin a countdown and display the time remaining in the study session. 
The application will trigger an alert when it reaches 0:00 and automatically begin the break session as reflected in the status display. 

## Project Implementation
This project requires state to be managed when a user clicks on buttons that increase/decrease the focus/break durations and also when they click play/pause or stop. 
Some fundamental React concepts that were explored in this project are:
* Managing state through the use of hooks such as useState
* Creating single responsibility functional components
* Ensuring props are read-only
* Writing JavaScript within JSX


## Tools and Technology
* Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
* Styled with Bootstrap 4.5.2 [Boostrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
* Deployed with [Netlify](https://www.netlify.com)
* JavaScript

## Project Preview
The default application view upon load.
![Default Display](preview-images/Pomodoro-Default.png)
Display during a study session. 
![Study Display](preview-images/Pomodoro-Status.png)
