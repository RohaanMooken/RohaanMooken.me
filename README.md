# RohaanMooken.me

#### Video Demo: https://youtu.be/z9nWh5RqAHw
#### Description

<!-- # Source Code -->

# Frontend

# Backend

Using Django framework for the backend

### backend/app

#### admin.py

### backend/backend

### asgi.py
Not in use

### settings.py

#### Changes
    + [Added *app*, *rest_framwork* and *corsheaders* to INSTALLED_APPS](backend/backend/settings.py)
    + [Added *REST_FRAMEWORK = {"DEFAULT_PERMISSION_CLASES": ["rest_framework.permissions.AllowAny"]}*](backend/backend/settings.py)
    + [Added *CORS_ORIGIN_ALLOW_ALL = True*](backend/backend/settings.py)
    + [Changed *TIME_ZONE = "America/Chicago"* to *TIME_ZONE = 'Europe/Oslo'*](backend/backend/settings.py)

### urls.py


### wsgi.py
In use, default settings applied



# Language Breakdown Progress Bar in /Projects
Integrated the progress bar from [React-Github-Languages](https://github.com/willdavsmith/react-github-languages)
Originally installed via "npm install", however source code had not implemented support for the C++ language.
Thus I copied the source code into the gh.js file and added the support for it myself, this also allowed me to change the fontsize of the texts.