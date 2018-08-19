import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatTooltipModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatTooltipModule],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatTooltipModule],
})
export class MaterialModule { }
