import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryViewComponent } from './story-view/story-view.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [StoryViewComponent],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    StoryViewComponent,
  ]
})
export class SharedModule { }
