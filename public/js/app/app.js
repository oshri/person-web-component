var app = angular.module('app', []);

app.run(['$rootScope', function($rootScope) {
    $rootScope.persons = [{
        image: '09811ea.jpg',
        fullName: 'Roee Adler',
        position: 'Chief Product Officer',
        company: 'WeWork',
        summary: 'Roee is the chief product officer at WeWork, leading the company\'s digital technology. Prior to WeWork Roee was the chief product officer at Soluto, where he ran product, marketing and business development, and led Soluto\'s launch at TechCrunch Disrupt NYC 2010 (where Soluto won the start-up battlefield).'
    }, {
        image: '1f7de72.jpg',
        fullName: 'Sergey Khilchenko',
        position: 'Application Software Engineer',
        company: 'Retalix',
        summary: 'Expertise in Web Development: .Net 1.1 / 2 / 3 / 3.5 / 4.0 / 4.5, Asp.Net, Asp.Net Ajax, Ajax.Pro, JavaScript, jQuery, CSS, HTML, DHTML, MSSQL 2005 / 2008, Oracle, Visual Studio 2003 / 2005 / 2010, Microsoft MVC. Development using Agile & Scrum. Specialties: Web Development.'
    }, {
        image: '23fdba0.jpg',
        fullName: 'Moty Michaely',
        position: 'VP R&D',
        company: 'Xplenty',
        summary: 'Software R&D expert, Mentor, Consultant and Team Leader with more than 13 years of experience in project management, software engineering, large scale cloud based systems design and development. I love building stunning products with awesome team mates.'
    }, {
        image: '2c3f19b.jpg',
        fullName: 'Uri Meirav',
        position: 'CTO & VP R&D',
        company: 'Wibbitz',
        summary: 'Over 13 years experience in software development and leading developers. Software architecture enthusiast, experienced in all development phases. Very good communication skills.'
    }, {
        image: '183c9d4.jpg',
        fullName: 'Shai Gretz',
        position: 'Natural Language Processing Lead',
        company: 'Wibbitz',
        summary: 'I am a Natural Language Processing developer with deep interests and skill in Natural Language Processing and Computational Linguistics. My interests revolve the computational side but also the linguistic side, the fascinating link between language and computers and the ability to understand human language automatically.'
    }, {
        image: '24f0d0a.jpg',
        fullName: 'Yoni Lev',
        position: 'Research Engineer',
        company: 'Genesys',
        summary: ''
    }, {
        image: '287b5d3.jpg',
        fullName: 'Shay Ben Yacov',
        position: 'Project Manager',
        company: 'Wochit',
        summary: 'Innovation. Startups. Entrepreneurship. Technology. People. NBA.'
    }]

    $rootScope.person = $rootScope.persons[0];

}])
