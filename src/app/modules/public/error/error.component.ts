import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {
    
    code: number;
    sub: Subscription

    constructor(private router: ActivatedRoute) {}

    ngOnInit(): void {
        this.sub = this.router.data.subscribe(d => this.code = d.code)
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}