import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-project';

  states:string[]=['Por hacer', 'En progreso', 'Finalizado']
  categories:string[]=['Trabajo', 'Hogar', 'Educacion', 'Personal']
  priorities:string[]=['Alta', 'Media', 'Baja']

  addField(event:Event){
    const element = event.target as HTMLInputElement
    console.log(element.value)
  }
}
