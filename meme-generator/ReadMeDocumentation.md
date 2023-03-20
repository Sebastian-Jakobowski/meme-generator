# Documentation
## Meme Generator
Here we will write down all points of interests that the challenge wanted to have answered. <br>
The answers won't be in depth because of the level of knowledge, since getting more knowledge would break the alloted timeframe. <br>

- ## technology stack
The decision of which technology stack we want to focus on is mainly comprimised in my own field of experience. But I will give broad ideas in what directions I would want to expand this app. 
<br><br>
The App will be run on the browser and therefore the first step would be the optimization for Desktop Users. Usability should be guaranted on Firefox and Chromium based Browsers. As a follow up Mobile User optimization can be intergrated.
<br><br>
Languages used in the project are mainly Java, Typescript, HTML, CSS/Less. JPA will be used to speak to our database.
<br>
The IDE used by the developer will be Visual Studio Code. The reasons for that are mainly of financial origin. If freely choosable the choice would fall on IntelliJ Ultimate since it has great features for Angular and Java.
<br><br>
For the Database we will use either Oracle or MySQL since these two are the most used in the market which speaks for a certain degree of quality.
<br><br>
Our Frameworks will be Spring in the Backend and Angular in our Frontend.
<br>
The topic of Web Server has to be researched first. Therefore there is no decision in this aspect. <br>
The OS shouldn't be a big factor. But our focus will be in this aspect on Windows based systems.

- ## frontend framework
After consideration what the current most used [frontend frameworks](https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/) are I decided to use **Angular** since my main experience is with this framework. Furthermore Angular has a very good usage for **single page applications** which fits the aspect of our challenge.
- ## backend framework
As depicted in frontend framework we compare my current knowledge with whats the most used one. For backend framework with web developement as a focus we have this [statistic](https://statisticsanddata.org/data/most-popular-backend-frameworks-2012-2023/). There we have **Laravel, Django** and **Spring** as the top players. Since a big userbase creates a big community we should always look which of the top contenders make sense for us.
We would currently use Spring since my experience with it is the highest. But if time would be given I would look up how the other two work and if it makes sense for us.
- ## database
Our decision will fall between MySQL and Oracle. Here I would need to go deeper to find out pros and cons between these. Also i still have to look into the technology background of how Cloud Databases work and if they are eligible for this project.
- ## Architecture
The term architecture is for me still very vague because it can contain very different aspects of a company. If it's IT focused then we will use a shortened version of Scrum focused on a solo developer, since the project would only have me. This could be upgraded into a real Scrum team with enough people.
The length of a sprint will be 2 weeks with CI/CD as a focus. Therefore using small deliveries/updates to make the application in  incremental manageable steps better over time with a quick response to errors.
For our structure in these aspects we will use Jenkins, Jira and Bitbucket. These are my current experiences. With more time I can research some other ways.
- ## Delivery
The first delivery to production will be when the team defined state of the MVP is reached. Till then we will use either a fake prod platform or put it into prod but flag it as not usable/deliverable.

- ## Please provide us with a zip of your code or a link to a repository.
To find the project please use my newly created [Github Repo](https://github.com/Sebastian-Jakobowski/meme-generator)
- ## Discussion
I don't really know what discussion in a solo challenge depicts.
- ## Maintainability
To secure a good maintainable application we need a high test coverage of atleast 80%. If time allows it we should aim towards a higher number since it will help us in the long run. Here we would use pactests for API or REST Calls, playwright for our general functionality tests and a1ly to check our general accessibility. In the later stages we should either get an external company to check our application or use an online service that checks our frontend. Noone should be excluded when it comes to the joy of Memes.
- ## Extendability
If we want our project to have an easy way of extending itself and getting bigger we should focus on the principles of Clean Code since a clean and well written code is a requisite for other developers or myself in a few months to still understand everything. In addition knowledge of design patterns should be refreshed. These can help develop a readable clean project.
- ## Stability
Stability is officially part of Maintainability therefore a lot of points there are also depicted in this aspect. The only thing I would add here is that not only the code but the commits, pull requests, stories etc. need to be handled in a clean way, because only then we will have a very clear overview and fast navigation through the whole project.
- ## Perfomance
In my worklife I haven't had much to do with performance except that it works. That's why I would look up in what ways one can check how well ones application works. For example checking the times of requests, overloading the system with a big stack of requests and probably lots of different ways of testing the performance.
- ## Security
The only security measures that are known to me are ways to stop external forces to penetrate our system via injection for example. Or to blur out passwords and not show sensible data in plaintext in our Requests. So basically protection against outwards force and encoding/crypting. Here I would need to consult a specialist or do my own research in what ways I can improve in this positions.