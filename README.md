# Guac-A-Mole

## Table of contents
* Goal
* How to play
* Functionality/MVP
* WireFrames
* Technologies/Libraries
* Schedule

### Goal
The goal of the game is to get as many point as possible in alotted time for each level. Getting points is achieved by whacking (clicking) the avocados that pop up from flower pots. You need to hit (click) the avocado after it appears and before it dissapears. In the first level you need to achieve 10 point in 25 seconds. From level to level the points requirement will increase and the time that the avocados will be available to hit will decrease. If you do not achieve the points target you lose. 

### How to Play

When an avocado appears from a flower pot, click on it to score a point. 

 # Functionality & MVP's
In Guac-A-Mole, the player will be able:
 * Click on avocados to score point
 * View how much time if left
 * Use spacebar as a toggle to play and pause the game
 * View how many points they currently have


In addition the game will have:
 * a modal with the instructions
 * a countdown to start of the game. 


# Wireframe
 ![Screen Shot 2022-02-03 at 4 53 53 PM](https://user-images.githubusercontent.com/12519237/152435723-e5d61ccb-eae5-4698-9772-e92eff09011c.png)
 
 
 * Instructions will be a modal with the detailed instruction how to play and interact with the game
 * Start from level: for those that are feeling the challenge they don't need to start from the easier part of the game 
 * Level will display the current level
 * Goal will be the goal hits for the current level
 * Time left will be the amount of time remaining for the level
 * Hits/Points will display how many hits the player has in the level
 * Play/Pause will be a toggle button

# Technologies
* Canvas 
* Vanilla Javascript

# Implementation timeline
### Friday Afternoon & Weekend:
- Research and design layout
- Make the general layout of the board show up on the browser
- Organize seperation of concerns

### Monday
- Add game logic and test
- Work on time intervals for avocado pop-ups and time for each level 
- work on incrementing levels 

### Tuesday
- work on hitting avocados and scoring a point 
- work on keeping track of points and matching the level goal 
- Start pots and avocados 

### Wednesday 
- CSS styling
- Instruction modal 
- Play/pause 

### Thursday 
- Touch ups 
- Ensure no bugs 
- Deploy to github pages 
