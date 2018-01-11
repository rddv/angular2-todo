import {Component} from "@angular/core";
import {Todo} from "./shared/todo";
@Component({
    selector: 'app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title: string = 'Angular application';
}