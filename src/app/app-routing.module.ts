import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import{ ListRenderComponent }from './componentes/list-render/list-render.component';
import { PrimeiroComponeteComponent } from "./componentes/primeiro-componete/primeiro-componete.component";
import { DiretivasComponent } from "./componentes/diretivas/diretivas.component";
import { IfRenderComponent } from "./componentes/if-render/if-render.component";
import { EventosComponent } from "./componentes/eventos/eventos.component";
import { EmitterComponent } from "./componentes/emitter/emitter.component";
import { PipesComponent } from "./componentes/pipes/pipes.component";
import { TwoWayBidingComponent } from "./componentes/two-way-biding/two-way-biding.component";

const routes : Routes= [
    {path:'',component:PrimeiroComponeteComponent},
    {path:'list',component: ListRenderComponent},
    {path:'diretivas',component: DiretivasComponent},
    {path:'If-render',component: IfRenderComponent},
    {path:'eventos',component:EventosComponent},
    {path:'emittir',component:EmitterComponent},
    {path:'pipes',component:PipesComponent},
    {path:'two-way-biding',component:TwoWayBidingComponent},

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
