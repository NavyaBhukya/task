import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DraftComponent } from './draft/draft.component';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { LoginComponent } from './login/login.component';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent,
  children:[
    {
      path:'', component:InboxComponent
    },
    {
      path:'inbox', component:InboxComponent
    },
    {
      path:'sent', component:SentComponent
    },
    {
      path:'create', component:CreateComponent
    },{
      path:'draft',component:DraftComponent
    }
  ]
 },
  { path: 'login', component: LoginComponent },
  // { path: 'sent', component: SentComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
