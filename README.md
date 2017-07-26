# Another Toy Project, just a Todo-List made with React with Redux

But this time, I tried hard to bring TDD(Test Driven Development) to this project.

[Thanks to the amazing guide of Sanjay Purswani](https://hackernoon.com/a-guide-to-tdd-a-react-redux-todolist-app-part-4-edb62e113c9b)

- All Components(only 3 though) are fully tested
- Reducer, Actions as well
- End-to-End test is available
- Features: Add Todo, Delete Todo, Undelete

*Discliamer:* I recommend to use yarn over npm as a package manager.

## Setup Project

    yarn install

## Start Application

    yarn start

## Unit test

    yarn test

## e2e/feature test

    yarn selenium-setup // run only once at first
    yarn selenium-start // selenium server should be running before testing
    yarn e2e-tests
    yarn e2e-tests-watch // watch mode

## TODO

- [ ] A little bit of styling
- [ ] Typescript integration
- [ ] More features like filter
