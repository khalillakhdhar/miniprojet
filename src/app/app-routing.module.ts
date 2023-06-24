import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';
//import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  {
    path:'',redirectTo:'auth',pathMatch:'full'
  },
    {
        path: 'auth',
        loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
    }, {
        path: 'gestion',
        loadChildren: () => import ('./gestion/gestion.module').then(m => m.GestionModule),
        canActivate: [AuthGuardService]

    }, {
        path: 'chat',
        loadChildren: () => import ('./chat/chat.module').then(m => m.ChatModule),
        canActivate: [AuthGuardService]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
