# 05 Third-Party APIs: Work Day Scheduler

Had to create a Work Day Scheduler to add important events to manage my time effectively:

- needed to make sure current day was displayed on the calender.
- time blocks for standards business hours from 9am-5pm.
- time blocks were color coded to indicate past, present and future.
- user is able to click on time block to enter text for the event.
- user saves event for that block by clicking save button and is stored in local storage.
- save events persist even after refreshing.

So I started off by making my timeblocks in the html using bootstrap. I made a container, within the container, time is in its own column, and enter events with button in its own column, Since we are submitting the events into local storage I made sure to create a form and made sure to switch the button type to submit. I also added a font awesome icon on the button as well. Once I was okay with the style/setup, I started working on the Javascript using jQuery. Since I'm using jQuery I had to start off with my $(document).ready function(). Then set up the current date using the moment function. Then worked on the submit button creating a submit function and using the event.preventDefault function to stop the site from refreshing. Then made an array for the time and converted it into Military time to make things easier. Had to create idtags in html for the time in the input section for each hour. Created a for each loop to store in local storage. Created conditionals if it were null to add the time in local storage with nothing in the value section. Then an else if statement to add the time and value for entry. Then created a const for the current hour by using the moment().hour(). Used that to create another conditional for entering the text in the events and set up the color backgrounds for past, present, and future using the css provided. past events will turn grey, current will be red and cannot make new entries while red, and future events will be green but will still be able to enter events until it is the current hour. 

Below are the links for the demo, screenshot, repo, and live url

![Vince's Day Planner Demo OH YEAH!] https://drive.google.com/file/d/1v2BdW7sWTWcwpYNeTGLF2-lkw7JoTAf7/view

[screencapture-vgines73-github-io-HW5-dayPlannerOhYeah-2020-10-31-14_20_28.pdf](https://github.com/vgines73/HW5_dayPlannerOhYeah/files/5469823/screencapture-vgines73-github-io-HW5-dayPlannerOhYeah-2020-10-31-14_20_28.pdf)

https://github.com/vgines73/HW5_dayPlannerOhYeah

https://vgines73.github.io/HW5_dayPlannerOhYeah/



