Task
===
Create a person view component as a same element (same HTML syntax) with different scopes of view.

1. **Large**
2. **Medium**
3. **Small**

![Person view component](/design-spec.fw.png "Spec")

Write as less code as possible, with focus on clean and reusable code. Try to take advantage from frameworks available below or add another familiar to you.
The project use a number of open source projects to work properly.

**Example of person item data:**
```json
{
    "image": "09811ea.jpg",
    "fullName": "Roee Adler",
    "position": "Chief Product Officer",
    "company": "WeWork",
    "summary": ""
}
```

### Technologies

* [Bootstrap] - UI boilerplate
* [LESS] - CSS pre-processor
* [AngularJS] - HTML enhanced for web apps
* [jQuery] - WTF!?
* [Node.js] - Evented I/O for the backend
* [Gulp] - The streaming build system

### How to run the project?

Node.js sould be installed.

- Download this repository
- Open terminal in project folder
- Run dependencies installation
```sh
npm install
```

- Run project with gulp
```sh
gulp
```

- Go to: [http://localhost:3000/](http://localhost:3000/).


[Bootstrap]:http://getbootstrap.com/
[LESS]:http://lesscss.org/
[AngularJS]:http://angularjs.org
[jQuery]:http://jquery.com/
[Node.js]:http://nodejs.org
[Gulp]:http://gulpjs.com
