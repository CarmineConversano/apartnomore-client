import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from './create/create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SubscribedComponent} from './subscribed/subscribed.component';
import {ViewGeneralComponent} from './view/view-general/view-general.component';
import {communityRouting} from "./community.routing";
import {NgxPermissionsModule} from "ngx-permissions";
import {ChangeImageComponent} from './change-image/change-image.component';
import {MdbCollapseModule, MdbTooltipModule} from "mdb-angular-ui-kit";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { SearchComponent } from './search/search.component';
import {NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    CreateComponent,
    SubscribedComponent,
    ViewGeneralComponent,
    ChangeImageComponent,
    SearchComponent
  ],
  exports: [
    SubscribedComponent
  ],
    imports: [
        communityRouting,
        CommonModule,
        ReactiveFormsModule,
        NgxPermissionsModule,
        MdbTooltipModule,
        FormsModule,
        InfiniteScrollModule,
        LeafletModule,
        MdbCollapseModule,
        NgbTypeaheadModule
    ]
})
export class CommunityModule {
}
