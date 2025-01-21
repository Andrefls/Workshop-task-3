link to website https://andrefls.github.io/Workshop-task-3/

# Workshop-task-3
the face scream, it also cries

Synopsis

- When I began working on this workshop task, my goal was to animate one of my drawings using pixels. I wanted to make the animation dynamic and represent something new.

- Additionally, I aimed to make the project interactive. I believed that by allowing people to start the loop when they were ready, I could empower the audience to experience the art in the way that felt right for them.

Summary/Problem-solving


- I first watched our lecture video at

- https://canvas.auckland.ac.nz/courses/121821/pages/week-1-overview?module_item_id=2435967.

- I spent a significant amount of time focusing on the pixel samples and how to modify them.

- I began following the examples from our lecture; however, my intentions were slightly different from the lecture's samples. I want the pixels to create the sensation of moving, like a field of crowded bugs.

- After extensive reading, I began experimenting with various background problems. Something seemed off with the images, and my work did not progress as I had anticipated. Whenever I changed the background, my images disappeared.

- Initially, I thought the index number was causing the problems, but I discovered that wasn't the case. I tried various solutions during my troubleshooting, and in the process, I found something very important that would prove useful later in my code: constraints

- https://p5js.org/reference/p5/constrain/.

- This calculation is crucial for limiting the display of triangles within the canvas.

- Afterward, I asked Leo for help, my lecturer. We discussed the possible issues in my code. Following Leo's suggestions, I removed the background statement because the code seemed to get confused with the transparencies. This adjustment worked temporarily. He also said that the index was not the issue.

- The challenge persisted, as I needed the pixels to move in a way that created a sense of motion. I revisited transformations

- https://genekogan.com/code/p5js-transformations/

- I found my knowledge in this area still lacking.

- I then remembered my earlier task, where I was able to create movement simply by altering positions.

- To build on this, I revisited my previous work and analyzed it to develop a new function. I followed the lecturer's tasks and tweaked them by adding a new index inside the function.


for (let y = 0; y < img3.height; y++){
for (let x = 0; x < img3.width; x++){
let index = (x + y * img3.width)*4;
img3.pixels [index+0] = random (205) // red value
img3.pixels [index+1] = random (100) // green value
img3.pixels [index+2] = random (3) // blue value
let mX = x + random (-4, 4);
let mY = y + random (-8,8);
mX= constrain (mX, 0, img3.width);
mY= constrain (mY, 0, img3.height);
let newIndex = (mX + mY * img3.width) * 4;
img3.pixels [newIndex] = img3.pixels [index];
img3.pixels [newIndex + 1] = img3.pixels [index+1];
img3.pixels [newIndex + 2] = img3.pixels [index +2];'''

- I have successfully made the pixels move, but now I need to conduct trials to modify the values and ensure everything works correctly. 

- After some adjustments, the movement behaves as I intended. 

- Next, I faced a new challenge: I wanted geometric figures to appear in the image and create a slow-motion canvas, aiming to play with the viewers' patience. 

- I decided that these geometric shapes should represent human feelings. After much thought, I returned to using a triangle. 

- https://p5js.org/reference/p5/triangle/

- By pointing the triangle downward, I could metaphorically convey a feeling of crying. 

- The next issue was figuring out how to make these triangles appear at a certain speed. I researched ways to set a frame speed, and since I have studied film, I knew that I needed to make the movement slightly faster than the normal rate.

- Consequently, I added a frame rate function to my setup.

- https://p5js.org/reference/p5/frameRate/

- I also returned to the constrain function and applied it to the triangles, ensuring they remained within the canvas boundaries. 

- To add an interactive element, I incorporated mouse functions and discovered a great feature: using the Enter key on the keyboard. 

- https://p5js.org/reference/p5/keyPressed/

- As in my previous project, I realized I needed to instruct viewers on how to interact with my video. Therefore, I revisited my earlier sample, copied the function, and made some tweaks.

Future development

- I am eager to learn about transformations for my final project. 

- I want my drawings to convey movement and colors that connect with people's emotions. 

- It would be wonderful to learn how to create slow-motion effects and also allow the audience to control the frame rate.

Conclusion:

- Currently, I am using VSCodium. 

- I learnt that === means equal lol 

- I feel that when you connect with your ideas and understand the coding, you can express a wide range of concepts. 

- However, my lack of knowledge continues to be a barrier to fully expressing myself.
