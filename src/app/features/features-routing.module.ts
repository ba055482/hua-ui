import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  // {
  //   path: 'decisions',
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'create',
  //       component: DecisionFormComponent,
  //       canActivate: [AuthGuard, GeneralGuard]
  //     },
  //     {path: 'edit/:id', component: DecisionFormComponent, canActivate: [AuthGuard, GeneralGuard]},
  //     {
  //       path: 'search',
  //       component: DecisionsSearchComponent
  //     },
  //     {path: 'preview/:id', component: PreviewDocumentComponent},
  //   ]
  // },
  // {path: 'users-management', component: UserManagementComponent, canActivate: [AuthGuard, AdminGuard]},
  // {path: '', component: DecisionsSearchComponent, canActivate: [AuthGuard]},
  // {path: 'login', component: LoginComponent},
  // {path: 'taxis_login_callback', component: TaxisLoginComponent},
  // { path: '', component: DecisionsSearchComponent, canActivate: [AuthGuard] },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
