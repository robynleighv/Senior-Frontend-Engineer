# PRODUCTION READINESS

## Requirements

- The movement of the robot is still a little jerky. To make this better, I would store the co-ordinates coming in via the websocket so that I could determine a current position and a target position and be able to calculate an even distribution of that distance over a period of time. This would mean the robots position would be showing as slightly behind its live position but, this could possibly be rectified with a button in the FE to allow a user to update the robot to it's current position if they needed that. Storing the values may also allow for evalution of each set of co-ordinates to make sure they have actually changed before trying to move the robot

- I've revisited the movement of the rotation a few times and I'm still not convinced the robot is taking the shortest route to the direction it needs to be facing so I'd like to understand this further to try and rectify this before it went out to production

- There is a little prop drilling between the Scene.tsx and the Robot.tsx. I added this to quickly allow for easy testing of the Scene but, I would be wanting to move this out to some sort of state management, such as React context

- I would like to investigate further testing of the 3D scene and the things within it. I would also write a component test for the Digit.tsx component to test that the correct styling is applied when each of the digits (0-9) are passed in

- To be production ready, there would need to be some error handling around if the websocket drops (gracefully or not) or if the connection is not established to begin with. As this is a consistent feed of data, I could perhaps use this to check if the data drops because I can assume, if after 2-3 seconds, I have not had an update that the connection has closed

- As the 3D environment would likely have to be built dynamically in a production environment (i.e. the warehouse would be a different shape/size), there probably would need to be some error handling for if the 3D scene doesn't initialise, possibly similar to a <Suspense> and fallback pattern in React

## Incomplete requirements (optional)

n/a

## Additional Context (optional)

- I started with a gridHelper for the grid (I've left that commented out) because I initally struggled to find a straightforward solution to create a grid and lots of people online were suggesting the gridHelper. I've changed this because I felt the instructions to not use 3rd party libraries with emphasis on the grid may mean you did not want me to use the helper
