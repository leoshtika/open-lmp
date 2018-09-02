import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatTooltipModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatTooltipModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule { }
