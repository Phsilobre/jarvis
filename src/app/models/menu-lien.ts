import { Component } from '@angular/core';

export class MenuLink {

    constructor(public title: string, public link: string, public autoclose: boolean = true) {}
}