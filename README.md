# angular_training_cert_dev
 Angular Training from certificates.dev

## Quiz for Basics of Angular

1. Which CLI command should we run to compile and serve our project locally in development mode?

- **ng serve**
- ng development
- ng deploy
- ng build

2. What does Angular refer to?

- **The latest version of the framework (Angular 2+)**
- Version 16 of the framework
- Version 3 of the framework
- Version 1 of the framework

3. Which of the following file names does not follow the Angular style-guide conventions?

- name.service.ts
- app.component.ts
- **uppercase-pipe.ts**
- highlight-all.directive.ts

4. Which one of the following is not a valid Angular CLI command?

- ng add
- ng test
- **ng fix**
- ng build

5. Which one of these concepts does not exist in the Angular framework?

- **Redux reducers**
- Standalone components
- Structural directives
- NgModules

6. Which of the following statements is true?

- **Pipes are used to format data such as dates and numbers**
- Directives are a way to interact with server-side APIs
- Services link components to server-side HTML templates
- Component libraries cannot be customized to our needs

7. What's the main language of the Angular framework?

- JSP
- JavaScript
- **TypeScript**
- AppScript

8. Which @NgModule decorator option defines the main component of an Angular application?

- main: [AppComponent]
- bootstrap: AppComponent
- **bootstrap: [AppComponent]**
- start: AppComponent

## Quiz for Angular Components
1. Which @for block option is required?

- **track**
- trackBy
- $index
- count

2. Which of the following options is not a valid Angular selector?

- [header]
- app-header
- **`<app-header>`**
- .header

3. What is the decorator used to pass data to a component?

- **@Input()**
- @Model()
- @Prop()
- @Data()

4. Which of these HTML template examples would automatically render the latest value of `data` when `data` changes?

- **[value]="data"**
- {data}
- ([ngModel])=”data”
- (click)="data"

5. The following syntax does not compile:
<div *ngIf="showItems" *ngFor="let item of items">{{item}}</div>
Which alternative syntax would generate the exact same DOM structure as intended above?

- `<div *ngIf="showItems">
     <span *ngFor="let item of items">{{item}}</span>
</div>`


- **`<ng-container *ngIf="showItems">

    <div *ngFor="let item of items">{{item}}</div>
    </ng-container>`**


- `<div [hidden]="! showItems" *ngFor="let item of items">{{item}}</div>`


- `<ng-template *ngIf="showItems">

<div *ngFor="let item of items">{{item}}</div>
</ng-template>`


6. What is the purpose of the ViewChild decorator in this component example?
`@Component({
 . . .
 template: '<p #test></p>'
})
export class UserDetailsComponent {
 @ViewChild('test') test;`


- It makes the tag in the template support content projection.
- It indicates that the tag be rendered as a child of the parent view that uses this component.
- **It provides access from within the component class to the ElementRef object for the tag that has the test template reference variable.**
- It makes the tag visible in the final render. If @ViewChild was not used in the class, then Angular would automatically hide the tag that has #test on it.


7. Which of the following functions is not a part of the Signals API?

- signal()
- effect()
- **observable()**
- computed()

## Quiz for JavaScript and TypeScript

1. What's the value of `a` in this example?
`let a = otherValue ?? 21`

- 12 if otherValue === 12, 21 if otherValue is null or undefined
- 12 if otherValue === 12, 21 if otherValue is {} or undefined
- "otherValue"
- 12 if otherValue == 12, 21 if otherValue is null

2. According to the following function signature:
`function setCurrency(value: number, currency: 'USD' | 'GBP')`
Which of the following code examples would compile:

- setCurrency(10);
- **setCurrency(10, 'USD');**
- setCurrency('10', 'GBP');
- None of the above, the function syntax is incorrect

3. What does the following code output to the console?
`enum UserResponse {
 No = 0,
 Yes = 1,
}

console.log(UserResponse.Yes);`

- [object Object]
- Yes
- UserResponse.Yes
- **1**

4. How many parameters does the following function expect?
`function test(a, b, ...c) {
   // ...
}`

- None, this function signature is incorrect
- 2 to 5
- exactly 3
- **at least 2**


## Quiz for Directives and Pipes

1. Which of the following is not an Angular directive from `@angular/common`?

- ngClass
- ngFor
- **ngBind**
- ngSwitch

2. Which of these options is the correct syntax for pipe parameters?

- {{ amount | currency | ‘USD’ }}
- {{ amount | currency :: ‘$’ }}
- **{{ amount | currency : ‘USD’ }}**
- None of the above - all are incorrect

3. What is the `HostBinding` decorator doing in this directive?
`@Directive({
 selector: '[appHighlight]'
})
export class HighlightDirective {
 @HostBinding('class.highlighted') highlight = true;
}`

- **It is adding the CSS class named highlighted to any DOM element that has the appHighlight attribute on it.**
- HostBinding does not do anything on directives, it only works with components.
- It is creating an inline style on the host element with a CSS property named highlighted set to true.
- It is adding the CSS class named highlighted to any DOM element for which the tag name is appHighlight.

4. What is the proper syntax to display a list of names in `div` elements when `display` is true?

- `<div *ngIf="display" *ngFor="let name of names">
    {{name}}
</div>`

- **<ng-container *ngIf="display">

  `<div *ngFor="let name of names">{{name}}</div>`
</ng-container>**

- <ng-template *ngIf="display">

  `<div *ngFor="let name of names">{{name}}</div>`
</ng-template>

- <ng-switch *ngSwitchCase="display">

`<div *ngFor="let name of names">{{name}}</div>`
</ng-switch>


## Quiz for Services and Dependency Injection

1. In Angular, which of the following decorators is used to register a class as a service?

- **@Injectable**
- @Service
- @NgService
- @Inject

2. Can the following class be injected into a component as-is?
`import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

    constructor(private http: HttpClient) {}

    getCartContents() {
        // Some code
    }

}
`

- **No, it has to be added to an array of providers first**
- Yes
- No, that code does not compile
- No, it does not have the @Service decorator

3. According to the following code, how many instances of TokenService can we have in an Angular application?
(assuming there's no other dependency injection configuration anywhere else for that service)

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  // ... (rest of the class implementation)
}

- It could be any number of instances
- One
- One per module
- **Zero or one**

4. One of the following syntaxes is correct for injecting a `LoginService` in `LoginComponent`.
Which one is it?

- loginService = constructor(loginService: LoginService);
- @Injectable()
loginService: LoginService;
- loginservice = create(LoginService)
- **myService = inject(LoginService);**


## Quiz for Angular Router

1. In Angular, what is the purpose of the <router-outlet> tag?

- It defines the root component of the application
- It specifies navigation links for the user
- It's a way to embed an iframe in an Angular application
- **It indicates where routed components will be rendered**

2. Considering the following router config, which component will be rendered when a user navigates to /products/21?
RouterModule.forRoot([
     { path: '', component: ProductListComponent },
     { path: 'products/:productId', component: ProductDetailsComponent }
])

- A 404 page would show up
- ProductListComponent
- **ProductDetailsComponent**
- None; there is no mapping for that route

3. Which of the following is not an existing guard function that can be used with the Angular router?

- CanDeactivate
- CanLoad
- **CanNavigate**
- CanActivateChild

4. What is one requirement for this syntax to work?

loadComponent:
    () => import('./admin/admin.component').then(comp => comp.AdminComponent)

- AdminComponent must be in a lazy-loaded module
- **AdminComponent must be a standalone component**
- AdminComponent must be the default export in its source file
- This syntax does not work


## Quiz for RxJs Observables

1. Which of the following is an incorrect statement regarding RxJS observables?

- They are used by the HttpClient of Angular
- They are objects we subscribe to
- They are a way to work with asynchronous data
- **They make our code synchronous**

2. When using Rxjs Observables, what does the `.pipe()` method do?

- It enables the use of Angular pipes with RxJs
- It turns an Observable into an Angular pipe
- **It enables chaining multiple RxJs operators**
- It automatically subscribes and unsubscribes from an Observable

3. What does the RxJs `map()` operator do?

- Applies a given function to the source Observable, subscribes to it, and emits the resulting values as an Observable
- Applies a given function to each array emitted by the source Observable, and returns the resulting values as an Observable of arrays
- Applies a given function to each value emitted by the source Observable, and returns the resulting values as an array
- **Applies a given function to each value emitted by the source Observable, and emits the resulting values as an Observable**

4. Which of the following is a common use case for `switchMap` in Angular?

- Creating animations
- **Making HTTP requests based on user input, like searching or fetching data**
- Turning an Observable into a Signal
- Managing application state


## Quiz for Angular Forms

1. Which of the following properties is NOT a valid property of an Angular `FormControl`:

- valid
- untouched
- **async**
- dirty

2. What is the name of the Angular service used to create reactive forms?

- FormFactory
- FormService
- FormControl
- **FormBuilder**

3. Which event is emitted when the value of a form control changes in Angular reactive forms?

- controlChange
- update
- **valueChange**
- input

4. Which syntax is used to access the underlying `NgForm` instance in a template-driven form?

- #model="ngModel"
- Turning an Observable into a Signal
- **#form="ngForm"**
- [ngForm]="value"


## Coding Challenge
### Create a Component Driven by Inputs
#### Challenge Description
In this challenge, let's create a movie item component that receives Movie information as an input.

##### Requirements
- Open src/movie-item/movie-item.component.ts
- Add a required input of type Movie (see sample movie provided in src/app.component.ts)
- Update the provided HTML template to render the movie:
- - Title
- - Release date (no formatting needed)
- - Budget ($ {value} million - for instance: $ 50 million)
- - Duration ({value} min - for instance: 152 min)
- Update src/app.component.html to pass the sample movie as an input
- Ensure your component is displayed properly on the screen
- - 💡 HINT: Review our self-study content if you get stuck at any step

##### Other Considerations
- If you see the data-test attribute anywhere in the boilerplate don't remove it.
- Mini.css is preinstalled with the default config. It might be helpful for you, if you want to have some styles. (Not required)

##### Example of Finished Component
This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

## Coding Challenge
### Display a List of Components
#### Challenge Description
In this challenge, we display multiple instances of our MovieItemComponent.

##### Requirements
- Inject MoviesService into the AppComponent
- - 💡 HINT: Review our self-study content on dependency injection if you're stuck here

- Retrieve a Signal of all movies from that service.
- Use the @for block to repeat MovieItemComponent as many times as needed
- - 💡 HINT: Feel free to remove any code that isn't needed anymore in your components

##### Other Considerations
- If you see the data-test attribute anywhere in the boilerplate don't remove it.
- Mini.css is preinstalled with the default config. It might be helpful for you, if you want to have some styles (not required)

##### Example of Finished Application
This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

## Coding Challenge
### Highlight a Specific Movie in the List on Mouse Over
#### Challenge Description
In this challenge, we want to highlight movies on mouse over by changing their background color to gold. We want to use a custom directive to do so.

##### Requirements
- Edit the provided src/highlight.directive.ts
- Add a way for the directive to add the CSS class highlight to its host element on mouse over (such CSS class is already defined in styles.css)
- - 💡 HINT: Review our self-study content on host bindings and host listeners

- Add a way for the directive to remove the CSS class highglight from its host element on mouse out
- Apply the directive on your MovieItemComponent

##### Other Considerations
- If you see the data-test attribute anywhere in the boilerplate don't remove it.

##### Example of Finished Application
This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

## Coding Challenge
### Create Pipes to Improve Budget and Duration Formatting
#### Challenge Description
In this challenge, we want to display movie budgets as follows using a custom pipe:

- If the budget is "175", render it as "$175 million"
- If the budget is a range such as "175-200", render it as "$175 to $200 million"
- Then create another custom pipe to format the movie duration so that "92" is displayed as "1h 32min"

##### Requirements
- Edit the provided src/pipes/million-dollar.pipe.ts
- Implement the transform method to format input values as defined in the challenge description:
- - If the budget is "175", render it as "$175 million"
- - If the budget is a range such as "175-200", render it as "$175 to $200 million"
- - 💡 HINT: Not sure how to parse strings in Javascript? Take a look at string.split()

- Add your pipe to the template of movie-item.component.ts and ensure the movie budgets are displayed as required
- Edit the provided src/pipes/min-to-duration.pipe.ts
- Implement the transform method to format input values as defined in the challenge description:
- - "92" must be displayed as "1h 32min"
- Add your pipe to the template of movie-item.component.ts and ensure the movie durations are displayed as required
- - 💡 HINT: This challenge can make use of a lot of modern Javascript features covered in the Javascript section of our training (template strings, ?? operator, and more)

##### Other Considerations
- If you see the data-test attribute anywhere in the boilerplate don't remove it.

##### Example of Finished Application
This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

## Coding Challenge
### Use a Service to Manage Favorite Movies
#### Challenge Description
In this challenge, we want to be able to manage favorite movies in the app by:

- Adding a movie as a favorite by clicking on a "star" icon ☆
- Displaying current favorite movies by displaying their "star" icon in yellow color ⭐
- Removing a movie from our favorites by clicking again on the "star" icon ☆

##### Requirements

- Edit the provided src/services/favorites.service.ts
- Use a Signal to store the list of current favorite movies (empty array by default)
- Implement a method toggleFavorite to toggle (add/remove) a movie from the list of favorites
- - 💡 HINT: Not sure how to work with Signals? Head back to our section on Signals in Chapter 2

- Implement a method isFavorite(movie) that returns whether a movie is a favorite or not
- Add inputs/outputs to movie-item.component.ts to pass the information when a movie is a favorite, as well as emit an event when the "star" icon is clicked.
- Use the active CSS class to turn the ☆ icon into ⭐. Remove that class to do the opposite.
- Update app.component.ts to handle the interactions with favorites.service.ts and pass the favorite information to movie-item.component.ts.
- - 🚨 PRO TIP: Using inputs/outputs to avoid injecting services in too many components is a fundamental architectural concept known as using presentation and container components.

##### Other Considerations
- If you see the data-test attribute anywhere in the boilerplate don't remove it.

##### Example of Finished Application
This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.


## Coding Challenge
### Use the Router to Display Movie Details
#### Challenge Description
In this challenge, we want to be able to display movie details by clicking on the "Details" button of any movie displayed on the screen, using the component router and lazy-loading.

##### Requirements

- Edit the provided src/home/home.component.ts to make it the new landing page that displays the list of movies.
- Change app.component.ts to display just a <router-outlet />. The entire page will be controlled by the router.
- Change the router config in app.routes.ts by adding two routes:
- - A route for the default path "" goes to HomeComponent (landing page with movies list)
- - A route for the path "details/:id" lazy-loads MovieDetailsComponent (page with details for a single movie)
- - 💡 HINT: Not sure how to use lazy-loading? Head back to our lesson section on lazy-loading

- Update the "Details" button in MovieItemComponent so it uses a routerLink to navigate to the proper movie details.

##### Other Considerations
If you see the data-test attribute anywhere in the boilerplate don't remove it.

##### Example of Finished Application
This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

## Coding Challenge
### Use RxJs Observables to Display Data
#### Challenge Description
In this challenge, our lead developer decided to update movies.service.ts to make it return Observables instead of Signals. As a result, we have to update our components to use Observables instead of Signals.

##### Requirements
- Update src/home/home.component.ts to make it handle the new Observable and render the list of all movies.
- - 💡 HINT: Remember the async pipe? Now is a good time to use it!

- Update MovieDetailsComponent to make it handle the new Observable and render movie details.
- The app should work just like it did before with no visible difference to the user.

##### Other Considerations
If you see the data-test attribute anywhere in the boilerplate don't remove it.

##### Example of Finished Application
This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

## Coding Challenge
### Add Filters to our Movies App
#### Challenge Description
In this challenge, we want to add filters to the UI so users can look for specific movies by title and year of release.

##### Requirements
- apture user input in the form using some of the tools described in our lesson.
- - 💡 HINT: Is this a complex form or a simple one? What's the easiest approach to get a form's value?

- Use the filterMovieList from movies.service to get an Observable of filtered movies based on user input.
- Display a filtered list of movies to the user.

##### Other Considerations
If you see the data-test attribute anywhere in the boilerplate don't remove it.

##### Example of Finished Application
This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.