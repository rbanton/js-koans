# Quick access to instructions

1. [Grab the project](#grab-the-project)
2. [Work through the exercises](#work-through-the-exercises)
3. [Backup and submit your project](#backup-and-submit-your-project)
4. [Opportunity for extra credit](#opportunity-for-extra-credit)

## Grab the project

1. Clone this project to your machine. Using GitHub Desktop, you can `Open in Desktop` in the `Clone or download` button.
<details>
<img width="1041" alt="screen shot 2016-10-10 at 5 50 52 pm" src="https://cloud.githubusercontent.com/assets/16547949/19252302/3640a3e8-8f12-11e6-8aaf-4a716412dadd.png">
</details>
1. Tell GitHub Desktop where you'd like to save this project on your machine.
<details>
<img width="1116" alt="screen shot 2016-10-10 at 5 52 49 pm" src="https://cloud.githubusercontent.com/assets/16547949/19252349/6af2451a-8f12-11e6-9ed5-8abdceafce74.png">
</details>
1. Create a new branch on GitHub Desktop -- this branch will house your own work. Name your branch with your GitHub handle. For example, my branch would be titled `hectorsector`.
<details>
<img width="1116" alt="screen shot 2016-10-10 at 5 54 58 pm" src="https://cloud.githubusercontent.com/assets/16547949/19252406/acb71d40-8f12-11e6-8302-db290fe5a033.png">
</details>
1. Open the project folder by right-clicking on the project, and select `Open in Finder` on a Mac, or `Open in Explorer` no a Windows machine. If you have Atom installed and would like to use that text editor, you can choose `Open in Atom`.
<details>
<img width="999" alt="screen shot 2016-10-10 at 5 56 20 pm" src="https://cloud.githubusercontent.com/assets/16547949/19252462/f6911a9c-8f12-11e6-90bf-83749c1205dd.png">
</details>

## Work through the exercises

1. You'll be working through a series of exercises called *JavaScript Koans*. Open the file `jskoans.htm` in your web browser (Safari, Chrome, or Firefox, please). This will show you the result of each test.
<details>
![screen shot 2016-10-10 at 6 00 38 pm](https://cloud.githubusercontent.com/assets/16547949/19252574/8ae0dde0-8f13-11e6-8cfb-168d0800cdf6.png)
</details>
1. In your favorite text editor, locate the file indicated by your test. For example, in this screenshot, the problem is in my `topics/about_asserts.js` file, line number `5`. So I'll open up that file.
<details>
<img width="1432" alt="screen shot 2016-10-10 at 6 02 55 pm" src="https://cloud.githubusercontent.com/assets/16547949/19252665/ff005bd8-8f13-11e6-809f-2a95a8e55f1b.png">
</details>
1. Reflect on the error message on your web browser. For example, in the first test, the error is: `what will satisfy the ok assertion?` and in the `about_asserts.js` file, I see an equality test in line 5:

  ```js
  ok(__ === true, 'what will satisfy the ok assertion?');
  ```
  
1. I will fix line `5` by changing the underscores `__` to `true` so that the equality statement is valid. Then I'll refresh the page in the web browser.
<details>
<img width="1412" alt="screen shot 2016-10-10 at 6 07 56 pm" src="https://cloud.githubusercontent.com/assets/16547949/19252776/a979ab0a-8f14-11e6-9cc8-7145e7a3f317.png">
</details>
1. Note that the first test now passes, and the next test appears, which can be corrected by looking at the file `topics/about_asserts.js`, line `9`.
1. Continue working through the exercises, refreshing after each one.

## Backup and submit your project

1. You can back up your project to GitHub at any time by committing your changes, and then publishing them to GitHub.
  <details>
  - make sure you're on your branch, in my example that is the `hectorsector` branch
  - switch to the "Uncommitted change" tab on GitHub Desktop
  - check each of the files you'd like to include in this backup
  - add a short message describing this backup, and click the `commit to USERNAME` button -- **make sure** that it says your username, don't commit to anyone else's branch, nor to `master`
  - click on the `Publish` button. After you've already backed up once, this button may just say `Sync`
  - verify your branch, and your files exist on your branch on GitHub
  - Here's a GIF of what these steps looks like.
  ![how-to-backup](https://cloud.githubusercontent.com/assets/16547949/19283785/3d232334-8fc1-11e6-8a11-98dbb0e3df8e.gif)
  </details>
1. When you're ready to submit your project, create a pull request.
  <details>
  - in the project repository, click on `New pull request`
  <img width="957" alt="screen shot 2016-10-11 at 2 48 57 pm" src="https://cloud.githubusercontent.com/assets/16547949/19283971/009de948-8fc2-11e6-98e3-5a09349f6242.png">
  - Verify the `base` drop-down is set to `master`. Change the `compare` drop-down to YOUR branch (it should have your username). In my example, I chose `hectorsector`.
  ![select-branch](https://cloud.githubusercontent.com/assets/16547949/19284048/4f433a9e-8fc2-11e6-839b-5f01c99a4d56.gif)
  - Change the title of the Pull Request so it includes your name, something like: `Hector's code submission` -- note: you can start a pull request early even if you're not ready to submit. You don't lose anything by doing this, it just makes sure that you don't miss the submission deadline. Future commits will be reflected on the existing Pull Request.
  - Fill in a comment explaining the current status of your pull request, and some questions you'd like your classmates to answer if this is a work-in-progress. If you're finished, please say that in the comments. DO NOT leave the comments blank.
  - Click the `Create pull request` button.
  - An automated test will kick-off on your pull request, and will tell you if your code is correct. If you are starting the submission early and are not finished, you'll get a failing test (looks like a red-x, that's OK). When you're all finished, though, you should get a passing test (looks like a green-check).
  <img width="787" alt="screen shot 2016-10-11 at 3 00 07 pm" src="https://cloud.githubusercontent.com/assets/16547949/19284360/9d4128c2-8fc3-11e6-9bc1-d9f5090ae230.png">
  </details>
1. Keep an eye on open Pull Requests and leave comments if you are able to help your classmates.

## Opportunity for extra credit

Look for the Extra Credit Pull Request (it is [PR #2](https://github.com/cop1000/js-koans/pull/2)). This Pull Request is a place to collaborate with your classmates on a series of explanations for why each of the Koans work the way they work. To get your extra credit, follow the instructions on that Pull Request.
