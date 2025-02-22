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

##### xample of Finished Application
This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.