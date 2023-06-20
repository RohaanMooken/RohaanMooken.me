# RohaanMooken.me

#### Video Demo: https://youtu.be/z9nWh5RqAHw

<!-- # Source Code -->

# Frontend
Almost all of the JavaScript files are accompanied by their corresponding CSS file 

## [index.js](frontend/src/index.js)
Creates a BrowerRouter from the react-router-dom module and uses it to define the specific urls for specific pages. In this case:
+ "/" for the *Root* element which in this case is the home page
+ "/skills" for the *Skills* element which in this case is the skills page
+ "/certificates" for the *Certificates* element which in this case is the certificates page
+ "/projects" for the *Projects* element which in this case is the projects page

All of the paths also have a *errorElement* defined which routes the user to the *ErrorPage* element

## [error-page.js](frontend/src/pages/error-page.js)
The *ErrorPage* function uses the *useRouteError* function from the installed react-router-dom. This function outputs the error code which is saved in *error* and logged to the console.

It returns a simple error page with the error *statusText* and *message*

## [root.js](frontend/src/routes/root/root.js)
The Root function simply imports *data* from a json file which contains:
+ *firstName*
+ *middleName*
+ *lastName*
+ *urls*
+ *buttons*

All of these variables except *urls* are inputted into the HeaderContainer element to specify how it looks on this specific page. The urls go to the footerContainer.

## [skills.js](frontend/src/routes/skills/skills.js)
The Skills function contais everything the Root function does except the footerContainer and *urls* variable. However, it does implement some new featuers. Two "cards" that are hardcoded into the file. These contain information on how the **Beginner** and **Advanced Beginner** levels are defined.

Lastly in the return it returns the *SKillsAPI* element

## [certificates.js](frontend/src/routes/certificates/certificates.js)
The Certificates function contains everything the Root function does, however the *footerContainer* has been replaced by the *CertificatesAPI* element.

## [projects.js](frontend/src/routes/projects/projects.js)
The Certificates function contains everything the Root function does, however the *footerContainer* has been replaced by the *GenerateGithubCards* element.

## [buttons.js](frontend/src/components/buttons/buttons.js)
This file contains three functions
+ Btn
+ GenerateButtons
+ Buttons

**Btn** is just a "a" element with its *href={route}* and the its text defined by the *name* variable.

**GenerateButtons** takes one parameter/argument called *buttons* it then generates buttons based on *buttons*'s length and gives them *names* and *routes* based on the parameter given. For every button it pushes them into the *generatedButtons* list then returns that list.

**Buttons** simply takes one parameter called buttons and encases the *GenerateButtons* element in a div with a className added to it. It also passes down the buttons variable.

## [footerContainer.js](frontend/src/components/footerContainer/footerContainer.js)
The *FooterContainer* function simply encases the *Socials* element a div with two classes, gives it a className of its own and passes down the *urls* variable.

## [githubCard.js](frontend/src/components/githubCard/githubCard.js)
The *GithubCard* function creates a card using the bootstrap library and divs. Wihtin this card's title there is a Link icon imported from the react-bootstrap-icons module and text with is passed down as a parameter called *title*.

It then gives the card some text which is also a parameter passed down called *description*.

And lastly it creates a card footer with the LanguageBar element where it passes down the *repo* parameter, *width={300}*, *textColor='white'* and *lightColor='#aaa'*.

## [generateGithubCards.js](frontend/src/components/generateGithubCards/generateGithubCards.js)
The *GenerateGithubCards* class extends *React.Component*.

Within its *constructor* it declares a dictionary called *state*, containing a *data* key with its value being an empty list.

Next in the *componentDidMount* function we use the **Axios** module to fetch *data* from all of "rohaanmooken"'s repositories using the api.github.com site given by Github. We then set the *data* key in *state* equal to the fetched data from the url.

Lastly we map all of the data within *data* to the *GithubCard* element passing down the required parameters.

## [headerContainer.js](frontend/src/components/headerContainer/headerContainer.js)
The *HeaderContianer* function is just a div with a className, and within it is two elements *Name* and *Buttons*, it passes down all the nesecarry parameters obtained from its own parameters.

## [languageBar.js](frontend/src/components/languageBar/languageBar.js)
Integrated the progress bar from [React-Github-Languages](https://github.com/willdavsmith/react-github-languages)
Originally installed via "npm install", however source code had not implemented support for the C++ language.
Thus I copied the source code into the languageBar.js file and added the support for it myself, this also allowed me to change the fontsize of the texts.

## [name.js](frontend/src/components/name/name.js)
The *Name* function takes three parameters
+ *firstName*
+ *middleName*
+ *lastName*

It encases two *h1* elements in a div and makes the *h1* elements' text two the passed down parameters. And adds styling through the classNames.

## [socials.js](frontend/src/components/socials/socials.js)
This file contains four functions
+ SocialSwitch
+ Social
+ GenerateSocials
+ Socials

**SocialSwitch** has two parameters *domainName* and *size*, *size* has a default parameter so it dosent need you to pass it down. Based on the *domainName* the switch statement within returns the corresponding Icon imported from the react-bootstrap-icons library.

**Social** takes two arguments *domainName* and *url* it encompasses a "a" element in a div. The "a" element's *href={url}* and its text is the *SocialSwitch* element with the *domainName* passed down.

**GenerateSocials** takes one parameter/argument called *urls* it then generates *Social* elements based on *urls*'s length and gives them *domainName* and *url* based on the parameter given. For every *Social* it pushes them into the *generatedSocials* list then returns that list.

**Socials** takes one argument called *urls* which is passes down into the *GenerateSocials* function which is encompassed within a "div" element.

## [certificatesAPI.js](frontend/src/api/certificatesAPI/certificatesAPI.js)
*CertificatesAPI* extends *React.Component*. It declares a state dictionary, within it is a key called *details* and its value an empty list. In the *componentDidMount* function it declares a variable called *data*. It then uses the Axios module which has been imported to fetch data from the backend database. If there is an error it catches it then logs it to the console.

Within the *render* function it generates a table with the certificates' name, origin, and date issued, which is based on the data from the backend database.

## [skillsAPI.js](frontend/src/api/skillsAPI/skillsAPI.js)
*SkillsAPI* extends *React.Component*. It declares a state dictionary, within it is a key called *details* and its value an empty list. In the *componentDidMount* function it declares a variable called *data*. It then uses the Axios module which has been imported to fetch data from the backend database. If there is an error it catches it then logs it to the console.

Within the render *function* it generates cards using styling from the bootstrap library. It maps the data using the *map* function. Each cards' title is equal to the *skill_name*, its text *skill_level* and footer *last_updated*

# Backend

Using Django framework for the backend

## [admin.py](backend/app/admin.py)
+ Contains the classes SkillAdmin and CertificateAdmin
+ Registers them to the built in admin panel from Django

### SkillAdmin
Adds a category called Skills in the admin panel where you can edit each field in the [Skill class](backend/app/models.py) from the models.py file

the fieldsets variable defines the editable/shown fields within each entered skill. In this case all of the defined variables for the [Skill class](backend/app/models.py) is editable.

the list_display variable defines the fields to be shown in the list of all entered skills. In this case the list shows the skill name and its level.
### CertificateAdmin
Adds a category called Certificates in the admin panel where you can edit each field in [Certificate class](backend/app/models.py) from the models.py file

The list_display variable defines the fields to be shown in the list of all entered certificates. In this case the list shows the certifcate name, its origin and date issued.

## [models.py](backend/app/models.py)
+ Contains the classes Skill and Certificate which are children of *models.Model*

### Skill
+ Defines the *time* variable, which automatically gets the time of instantiation
+ *Beginner, Advanced Beginner, Intermediate, Advanced, Expert* variables set to itself as a string with only the first character capitalized for later use in the *SKILL_LEVEL_CHOICES* variable
+ *SKILL_LEVEL_CHOICES* defines the choices available, which, are used in the *skill_level* later
+ *skill_name* field contains the name of the skill with a max name of 100 characters
+ *skill_level* field contains the level of the skill with the choices being from the *SKILL_LEVEL_CHOICES* variable, has a max length of 20 chars (required parameter/arg) and the default value is *BEGINNER*
+ *pub_date* is a datetime field which contains the datetime of publication and by default is set to the current datetime from the *time* variable above
+ *last_updated* is a datetime field which contains the datetime of when the skill was last updated and by default is set to the current datetime from the *time* variable above
+ The *__str__* function just makes it so the skill actually uses its own name when displayed in the admin panel

### Certificate
+ Defines the *certificate_name* variable which is a charfield that contains the certificat's name with a max char length of 200
+ *certificate_origin* is the same as name except its meant for the certificate origin i.e, place of publication/issued
+ *certificate_issued* is a datetime field containing the month and year the certificate was issued
+ The *__str__* function just makes it so the certificate actually uses its own name when displayed in the admin panel

## [views.py](backend/app/views.py)
Contains the *SkillsView* and *CertificatesView* classes whom are both children of the *APIView* class imported from the *rest_framework* module. This makes it easier for the frontend to fetch data from the backend's databases. Defines a get function for when a user loads the corresponding page and their broswer submits a get request.

### SkillsView
The get function outputs all of the entered/created skills in the database with their correlating name, level pub_date and last_updated.

### CertificateView
The get function outputs all of the entered/created certificates in the database with their correlating name, origin and date issued.

## asgi.py
Not in use

## [settings.py](backend/backend/settings.py)

### *Changes*
+ Added *app*, *rest_framwork* and *corsheaders* to INSTALLED_APPS
+ Added *REST_FRAMEWORK = {"DEFAULT_PERMISSION_CLASES": ["rest_framework.permissions.AllowAny"]}*
+ Added *CORS_ORIGIN_ALLOW_ALL = True*
+ Changed *TIME_ZONE = "America/Chicago"* to *TIME_ZONE = 'Europe/Oslo'*

## [urls.py](backend/backend/urls.py)
+ Imported Skillsview and CertificatesView
+ Added own urlpatterns
+ Set the admin panel to be example.com/admin/
+ Set the skills page for the frontend API to be example.com/skills/
+ Set the certificates page for the frontend API to be example.com/certificates/

## wsgi.py
In use, default settings applied


