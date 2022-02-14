
# phonics-sounds

![Sounds-preview](https://user-images.githubusercontent.com/29425781/153875788-5cf5d186-478e-4de6-b6b6-203ea494c57d.gif)

## 👨‍💻 Demo

Check out the website: [Phonics Sounds](https://focused-swirles-0bc3a1.netlify.app/)

## 🗣️ About this project

I want to create a phonics sound page that I can save on my phone and have to hand when reading with my daughter who's just started learning to read. I often need to find out what a certain sound is and end up googling it every time. I need something quick and easy to click on. 

Simple idea - a list of sounds to listen to ✔️

Small stretch goal - flip whole page and it has images (e.g fox for f) instead of the letter ✔️

Stretch goal - login and track progress through the sounds
Stretch goal 2 - games

## 🎨 Design

Inspired by [Nature Sounds App by Lay](https://dribbble.com/shots/8832668-Nature-Sounds-App) on Dribbble I created [this design](https://www.figma.com/file/rGauNq8bzvkADENejijRWX/Phonics-design?node-id=0%3A1) in Figma.

I want it to be bright and fun for me to be able to use with my kids.


## 🎬 Starting out

I've created a React app with React Router v6 to manage different pages. I was going to keep this a simple JavaScript website but if I go for my stretch goals I think this will be easier with React. I've created the 3 pages so far, and created the divs for all the sounds. I used map() to loop through the array of sounds and also assigned each a random background colour from the ones chosen in the design. Stumbling block so far, how to make the buttons square?

## Adding games

This project was supposed to be just for me, but then my husband added an Issue for a game. This will mean me and my daughter can play with the website together. I've created a quick guess the first sound of the image game. I would like to add another two games, progressing in difficulty.


## 👨‍💻 Contributing

- Any contributions you make are **greatly appreciated**.
- Check out my [contribution guidelines](https://github.com/hellodeborahuk/phonics-sounds/blob/main/Contributing.md) for more information.

## 🛡️ License
Phonics sounds is licensed under the MIT License - see the [LICENSE file](https://github.com/hellodeborahuk/phonics-sounds/blob/main/LICENSE) for details.

## 👇 Prerequisites

Before installation, please make sure you have already installed following tools:
- [Git](https://git-scm.com/downloads)
- [NodeJs](https://nodejs.org/en/download/)

## 🛠️ Installation Steps

1. Fork the project
2. Clone the project
3. Navigate to the project directory `cd phonics-sounds`
4. Install dependencies with `npm install`
5. Run `npm start`
