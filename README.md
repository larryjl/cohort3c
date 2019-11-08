## Links

View the GitHub page for this repo:    
https://larryjl.github.io/cohort3/

1. [01-getting-started](src/01-getting-started/)
1. [02-dom](src/01-getting-started/)
1. [03-objects](src/03-objects/)
1. [cities](src/03-objects/cities/)
1. [javascript](src/javascript/)

---

## Getting Started

This project is the "Getting Started" project for EvolveU Full Stack Development program. It is a baseline to demonstrate:

- development environment
- development tools
- best practices

## Required Tools

The following tools are required to run the sample project:

- git - If you do not have git installed, install with default parameters. See [git](https://git-scm.com). To check, enter:
```sh
git --version
```
- Node - If you do not have Node installed, install the LTS version (left). See [node](https://nodejs.org/en/). To check, enter: 
```sh
node -v
```
- VSCode - If you do not have VSCode installed see [VSCode](https://code.visualstudio.com/).
- live-server - is a little development server with live reload capability. 
```sh
npm install -g live-server
```

## Setup Instructions

For the following instructions use your command line. In Windows, it could be dos or PowerShell. For mac and Linux use terminal.

1. Clone this repository. In your command line move to the directory that you would like to use as your base code directory. This command will add a directory below the directory you are in.
```sh
git clone https://github.com/larryevolveu/reference.git
```
2. Install the dependencies required for the project. This command looks at the 'package.json' file and installs all of the dependencies. 
```sh
cd reference
npm i
```
3. Run the automated unit tests to ensure the code works as advertised. 
```sh
cd src
cd 01-getting-started
npm test
```
All the tests should run.

4. Start a simple development server with live load capabilities. 
```sh
live-server
```
Look through the application. Notice in the "Size" section of the web page there is some logic that, based on a number, will tell you if it is small / medium / large.

## Dissecting what's there

Let's start looking at this simple application. First, you will notice that the HTML and CSS in the project are fairly complicated. Like it or not, the design and layout is the sizzle that sells. The functionality is expected to work. 

As Full Stack Developers, we will often be expected to contribute or even write the design component of the project. For the next six months, we will be concentrating on the Programming or logic component more than the css or html components. This does not mean that it's not important.

1. Notice the directory structure. It may not be exact, but it will be close.
```
reference/
  node_modules/
  src/
    01-getting-started/
      images/
      scripts/
      index.css
      index.html
  package.json
  README.md
```
2. At your leisure, look through the HTML and CSS and figure out how it works. For now, let's look at the simple logic component.
3. In file src/01-getting-started/index.html search for "idSize". Let's drill into how that works. Look at src/01-getting-started/scripts. We will spend some time here.

---

## Authors

* **Larry Shumlich**, Instructor - [reference repository](https://github.com/larryevolveu/reference/)
* **Lawrence Lee**, Full Stack Trainee - [this repository](https://github.com/larryjl/cohort3/)

## Acknowledgments

* Thanks to the rest of the evolveU team for continued inspiration.
