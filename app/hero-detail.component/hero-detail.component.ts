import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { HeroService } from './../hero.service/hero.service';
import {Hero} from './../hero/hero';
@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component/hero-detail.component.css'],
    inputs: ['hero']
})
export class HeroDetailComponent {
    hero: Hero;
    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
    goBack() {
        window.history.back();
    }

}
